import Footer from "./footer";
import { CleanHyphen } from "../utils/string";
import { getMDXComponent } from "mdx-bundler/client";
import { useEffect, useMemo, useState } from "react";
import { CH } from "@code-hike/mdx/components"

import P from "./render/p";
import HR from "./render/hr";
import H1 from "./render/h1";
import H3 from "./render/h3";
import H2 from "./render/h2";
import Note from "./alert/note";
import Theme from "./theme";
import Code from "./render/ch/code";
import InlineCode from "./render/ch/inlineCode";

const render = {
  p: P,
  hr: HR,
  h1: H1,
  h2: H2,
  h3: H3,
  CH: {
    ...CH,
    Code: Code,
    InlineCode: InlineCode,
  },
};

export default function Content(props) {
  const currentDoc = props.currentDoc;
  const editBase = props.editBase;
  const currentVersion = props.currentVersion;
  const currentSection = props.currentSection;
  const currentSlug = props.currentSlug;

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  const Component = useMemo(
    () => getMDXComponent(currentDoc.code, {note: Note, theme: Theme}),
    [currentDoc.code]
  );

  return (
    <div className={"wrapper-content"}>
      <div className={"pb-4 content"}>
        <p className={"font-semibold text-primary capitalize"}>
          {CleanHyphen(currentSection)}
        </p>
        <h1 className={"py-5 text-4xl font-semibold"}>{currentDoc.title}</h1>
        {showChild && <Component components={render} />}
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
