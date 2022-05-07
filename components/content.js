import Footer from "./footer";
import { CleanHyphen } from "../utils/string";
import { getMDXComponent } from "mdx-bundler/client";
import React from "react";
import P from "./render/p";
import HR from "./render/hr";
import H1 from "./render/h1";
import H3 from "./render/h3";
import H2 from "./render/h2";

const render = {
  p: P,
  hr: HR,
  h1: H1,
  h2: H2,
  h3: H3,
};

export default function Content(props) {
  const currentDoc = props.currentDoc;
  const editBase = props.editBase;
  const currentVersion = props.currentVersion;
  const currentSection = props.currentSection;
  const currentSlug = props.currentSlug;

  const Component = React.useMemo(
    () => getMDXComponent(currentDoc.body.code),
    [currentDoc.body.code]
  );

  return (
    <div className={"wrapper-content"}>
      <div className={"pb-4"}>
        <p className={"font-semibold text-primary capitalize"}>
          {CleanHyphen(currentSlug)}
        </p>
        <h1 className={"py-5 text-4xl font-semibold"}>{currentDoc.title}</h1>
        <Component components={render} />
      </div>
      <Footer
        currentVersion={currentVersion}
        currentSection={currentSection}
        currentSlug={currentSlug}
        editBase={editBase}
      />
    </div>
  );
}
