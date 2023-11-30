// make data properties like start.script => start: { script }, notice some make like x.y.z => x : {y : {z}}, how deep is the depth is unknown.
export default function objectifyFlattedFormData<T extends object>(data: T) {
  const _data = JSON.parse(JSON.stringify(data));
  const _data1: T = {} as T;

  Object.keys(_data).forEach((key) => {
    const keys = key.split(".");
    let temp = _data1;

    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (i === keys.length - 1) {
        // @ts-ignore
        temp[k] = _data[key];
      } else {
        // @ts-ignore
        if (!temp[k]) {
          // @ts-ignore
          temp[k] = {};
        }
        // @ts-ignore
        temp = temp[k];
      }
    }
  });

  return _data1;
}
