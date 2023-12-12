const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please input the hook name: ", (componentName) => {
  const capitalizeComponentName =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);

  const apiTemplate = `import ApiTable from "@/components/api-table";
  import { SubTitle } from "@/components/layout/Article";
  
  export default function ${capitalizeComponentName}() {
    const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
      {
        name: "initial",
        type: "boolean",
        defaultValue: false,
        desc: "initial state of toggle",
      },
      {
        name: "valueMap",
        type: "object",
        defaultValue: { true: true, false: false },
        desc: "mapping of returned values",
        properties: [
          {
            name: "true",
            type: "boolean | T",
            defaultValue: true,
            desc: "value returned when toggle is on",
          },
          {
            name: "false",
            type: "boolean | F",
            defaultValue: false,
            desc: "value returned when toggle is off",
          },
        ],
      },
    ];
  
    const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
      {
        name: "[0] isOn",
        type: "boolean | T | F",
        defaultValue: null,
        desc: "state of toggle",
      },
      {
        name: "[1] toggle",
        type: "() => void",
        desc: "toggle function",
      },
      {
        name: "[2] setToggle",
        type: "(value: boolean|(value => boolean)) => void",
        desc: "set toggle function",
      },
    ];
  
    return (
      <>
        <SubTitle id="hook-api">Api of ${componentName}</SubTitle>
        <SubTitle low top="20px">
          Parameters
        </SubTitle>
        <ApiTable param rows={paramData} />
        <SubTitle low top="20px">
          ReturnValue (Array)
        </SubTitle>
        <ApiTable return rows={returnData} />
      </>
    );
  }
  `;

  const exampleTemplate = `import ${componentName} from "@/hooks/${componentName}";
  
  const View = () => {
    return (
      <>
        <h3>${componentName}</h3>
      </>
    );
  };
  
  const code = \`

  \`;
  
  export default {
    code,
    View,
  };
  `;

  const componentTemplate = `import useLocaleSelector from "@/locale/locale.selector";
import Article, {
  Body,
  Consideration,
  Demo,
  FAQs,
  SubTitle,
  Usage,
  Best
} from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "@/views/docs/views/examples/${capitalizeComponentName}/example.1";
import pkg from "@/../package.json";
import ${capitalizeComponentName}Api from "@/views/docs/views/hooks-apis/${componentName}.api";

export default function ${capitalizeComponentName}() {
  const hooksName = "${componentName}";
  const $desc = useLocaleSelector(\`\${hooksName}.desc\`);
  const $detail = useLocaleSelector(\`\${hooksName}.detail\`);
  const $best = useLocaleSelector(\`\${hooksName}.$best\`);
  const $consider = useLocaleSelector(\`\${hooksName}.consideration\`);
  const $p1 = useLocaleSelector(\`\${hooksName}.$p1\`);
  const $faqs = useLocaleSelector(\`\${hooksName}.$faqs\`);
  useEffect(() => {
    document.title = \`\${hooksName} - \${pkg.homepage}\`;
  }, []);

  return (
    <Article
      title={hooksName}
      desc={$desc}
    >
      <Body>{$detail}</Body>
      <Usage>
        <Demo code={example1.code}>{<example1.View />}</Demo>
        <p>{$p1}</p>
      </Usage>
      <Consideration>{$consider}</Consideration>
      <Best>{$best}</Best>
      <FAQs>{$faqs}</FAQs>
      <${capitalizeComponentName}Api />
    </Article>
  );
}
`;

  const dirs = [
    path.join(__dirname, "../src", "views", "docs", "views"),
    path.join(__dirname, "../src", "views", "docs", "views", "hooks-apis"),
    path.join(
      __dirname,
      "../src",
      "views",
      "docs",
      "views",
      "examples",
      capitalizeComponentName
    ),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  fs.writeFile(
    path.join(
      __dirname,
      "../src",
      "views",
      "docs",
      "views",
      "hooks-apis",
      `${componentName}.api.tsx`
    ),
    apiTemplate,
    (err) => {
      if (err) {
        console.error(
          `create ${componentName}.api.tsx fail`,
          err,
          // red
          "\x1b[31m%s\x1b[0m"
        );
      } else {
        console.log(
          `create ${componentName}.api.tsx success`,
          // green
          "\x1b[32m%s\x1b[0m"
        );
      }
    }
  );

  fs.writeFile(
    path.join(
      __dirname,
      "../src",
      "views",
      "docs",
      "views",
      "examples",
      capitalizeComponentName,
      "example.1.tsx"
    ),
    exampleTemplate,
    (err) => {
      if (err) {
        console.error(
          `create ${capitalizeComponentName}/example.1.tsx fail`,
          err,
          // red
          "\x1b[31m%s\x1b[0m"
        );
      } else {
        console.log(
          `create ${capitalizeComponentName}/example.1.tsx success`,
          // green
          "\x1b[32m%s\x1b[0m"
        );
      }
    }
  );

  fs.writeFile(
    path.join(
      __dirname,
      "../src",
      "views",
      "docs",
      "views",
      `${capitalizeComponentName}.tsx`
    ),
    componentTemplate,
    (err) => {
      if (err) {
        console.error(
          `create ${capitalizeComponentName}.tsx fail:`,
          err,
          // red
          "\x1b[31m%s\x1b[0m"
        );
      } else {
        console.log(
          `create ${capitalizeComponentName}.tsx success`,
          // green
          "\x1b[32m%s\x1b[0m"
        );
      }
      rl.close();
    }
  );
});
