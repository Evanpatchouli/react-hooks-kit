const useForm = <T = any>(
  schema: Record<
    keyof T,
    {
      value: T[keyof T] | undefined | null;
      required?: boolean;
      validator?: (value?: T[keyof T] | null) => Promise<string | undefined>;
      setter?: (v: T[keyof T] | undefined | null) => void;
    }
  >,
  formRef: React.RefObject<HTMLFormElement>
) => {
  const formSchema = schema;

  type FormSchema = typeof formSchema;

  const onSubmit =
    (
      handler: (formData: T) => void,
      validates?: boolean | keyof T | (keyof T)[]
    ) =>
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let fieldsTovalidate = validates;
      switch (typeof validates) {
        case "boolean":
          if (validates) {
            fieldsTovalidate = undefined;
          } else {
            fieldsTovalidate = [];
          }
          break;
        case "string":
          fieldsTovalidate = [validates];
          break;
        case "object":
          fieldsTovalidate = (fieldsTovalidate as (keyof T)[])?.filter(
            (field) => {
              return Object.keys(formSchema).includes(field as string);
            }
          );
          break;
      }
      if (!formController.validates(fieldsTovalidate as any)) {
        return;
      }
      const formData = formController.gets();
      handler(formData as T);
    };
  const formController = {
    onSubmit: onSubmit,
    get: (key: keyof FormSchema, formData?: FormData) => {
      if (!formData) {
        formData = new FormData(formRef.current as HTMLFormElement);
      }
      return formData.get(
        key as string
      ) as FormSchema[keyof FormSchema]["value"];
    },
    set: (
      key: keyof FormSchema,
      value: FormSchema[keyof FormSchema]["value"]
    ) => {
      if ("setter" in formSchema[key]) {
        formSchema[key].setter?.(value);
      }
    },
    sets: (
      data: Partial<{ [K in keyof FormSchema]: FormSchema[K]["value"] }>
    ) => {
      Object.keys(data).forEach((key) => {
        formController.set(
          key as keyof FormSchema,
          data[key as keyof FormSchema]
        );
      });
    },
    validate: (key: keyof FormSchema) => {
      const validator = formSchema[key].validator;
      const value = formController.get(key);
      return new Promise<boolean>((rs, rj) => {
        if (value === undefined || value === null || `${value}`.trim() === "") {
          if (formSchema[key].required) {
            console.warn(`${String(key)} is required`, "warning");
            return rs(false);
          }
        }
        if (validator) {
          const error = validator(value);
          error
            .then((v) => {
              if (v) {
                console.warn(error, "warning");
                return rs(false);
              } else {
                return rs(true);
              }
            })
            .catch((err) => {
              console.warn(error, "warning");
              rs(false);
            });
          if (error) {
            console.warn(error, "warning");
            return false;
          }
        } else {
          rs(true);
        }
      });
    },
    validates: async (keys?: (keyof FormSchema)[]) => {
      if (!keys) {
        keys = Object.keys(formSchema) as (keyof FormSchema)[];
      }
      if (keys) {
        const results = await Promise.all(
          keys.map((key) => formController.validate(key))
        );
        if (results.some((r) => !r)) {
          return Promise.resolve(false);
        } else {
          return Promise.resolve(true);
        }
      } else {
        return Promise.resolve(true);
      }
    },
    gets: (keys?: (keyof FormSchema)[]) => {
      const data = new FormData(formRef.current as HTMLFormElement);
      if (keys) {
        return keys.reduce((acc, key) => {
          acc[key] = formController.get(key, data);
          return acc;
        }, {} as Partial<{ [K in keyof FormSchema]: FormSchema[K]["value"] }>);
      }
      return Object.keys(formSchema).reduce((acc, key) => {
        acc[key as keyof FormSchema] = formController.get(
          key as keyof FormSchema
        );
        return acc;
      }, {} as Partial<{ [K in keyof FormSchema]: FormSchema[K]["value"] }>);
    },
    reset: (keys?: (keyof FormSchema)[]) => {
      if (keys) {
        keys.forEach((key) => {
          formController.set(key, undefined);
        });
        return;
      }
      Object.keys(formSchema).forEach((key) => {
        formController.set(key as keyof FormSchema, undefined);
      });
    },
  };
  return formController;
};

export default useForm;
