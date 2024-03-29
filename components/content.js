import Footer from "./footer";
import { CleanHyphen } from "../utils/string";
import { getMDXComponent } from "mdx-bundler/client";
import { useEffect, useMemo, useState } from "react";

import P from "./render/p";
import HR from "./render/hr";
import H1 from "./render/h1";
import H3 from "./render/h3";
import H2 from "./render/h2";
import Note from "./render/alert/note";
import Theme from "./theme";
import Code from "./render/code";
import Tooltip from "./tooltip";
import UL from "./render/ul";
import LI from "./render/li";
import A from "./render/a";

const render = {
  p: P,
  hr: HR,
  h1: H1,
  h2: H2,
  h3: H3,
  ul: UL,
  li: LI,
  a: A,
  div: function (props) {
    if (props["data-rehype-pretty-code-fragment"] === "") {
      return <Code {...props} />;
    }
    return <div {...props} />;
  },
  Tooltip: Tooltip,
  Note: Note,
};

export default function Content(props) {
  const docs = props.docs;
  const currentDoc = props.currentDoc;
  const defaultVersion = props.defaultVersion;
  const editBase = props.editBase;
  const currentVersion = props.currentVersion;
  const currentSection = props.currentSection;
  const currentSlug = props.currentSlug;

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  const Component = useMemo(
    () => getMDXComponent(currentDoc.code, { note: Note, theme: Theme }),
    [currentDoc.code]
  );

  return (
    <div className={"wrapper-content"}>
      <div className={"pb-4 content code"}>
        <p className={"font-semibold text-primary capitalize"}>
          {CleanHyphen(currentSection)}
        </p>
        <h1 className={"py-3 md:py-5 text-4xl font-semibold"}>
          {currentDoc.title}
        </h1>
        {showChild && <Component components={render} />}
      </div>
      <Footer
        docs={docs}
        defaultVersion={defaultVersion}
        currentVersion={currentVersion}
        currentSection={currentSection}
        currentSlug={currentSlug}
        currentDoc={currentDoc}
        editBase={editBase}
      />
    </div>
  );
}
