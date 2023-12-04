import Li from "@/components/layout/Li";
import Article, { Body, SubTitle } from "@components/layout/Article";
import { useEffect, useState } from "react";
import pkg from "@/../package.json";
import Code from "@/components/code";
import WasHelpful from "@/components/layout/WasHelpful";

const desc = "@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";

export default function FAQs() {
  useEffect(() => {
    document.title = `FAQs - ${pkg.homepage}`;
  }, []);

  return (
    <Article title="FAQs" desc={desc}>
      <SubTitle>How about the Compatibility ?</SubTitle>
      <p>
        This library is compatible with <code>react@^16.8.0</code> ~ <code>react@^18.2.0</code>.
      </p>
      <SubTitle>Is it really lightweight ?</SubTitle>
      <p>
        Yes, it is. The bundle size is only <code>~ 1.5kb</code> (minified and gzipped). It goes without any
        dependencies besides <code>react</code> and <code>react-dom</code>.
      </p>
      <SubTitle>How about its support for typescript ?</SubTitle>
      <p>
        This library is written in typescript and it has its own type definitions. So you can use it with typescript
        without any problem.
      </p>
      <SubTitle>Is it tree-shakable ?</SubTitle>
      <p>Yes, it is. All of the hooks are exported as named exports. So you can import only the hooks that you need.</p>
      <SubTitle>How about the performance ?</SubTitle>
      <p>
        The performance is good. The hooks are optimized and memoized. So they will not cause unnecessary re-renders in
        your app.
      </p>
      <SubTitle>How about the browser support ?</SubTitle>
      <p>
        This library is compatible with all modern browsers. It also works with IE11. But you need to include the
        polyfills for <code>Promise</code> and <code>Object.assign</code> in your app. Some special hooks such as
        useRipple that goes with Houdini may not be available in some browsers.
      </p>
      <SubTitle>How about the accessibility ?</SubTitle>
      <p>
        This library is compatible with accessibility. All of the hooks are tested with{" "}
        <code>eslint-plugin-jsx-a11y</code>.
      </p>
      <WasHelpful />
    </Article>
  );
}
