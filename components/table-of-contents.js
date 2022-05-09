import { AddHyphen } from "../utils/string";

export default function TableOfContents(props) {
  const currentDoc = props.currentDoc;
  return (
    <div className={"wrapper-table-of-contents"}>
      <div className={"sticky top-14"}>
        <h2 className={"font-semibold pb-0.5"}>On This Page</h2>
        <h3 className={"table-of-content-header"}>{currentDoc.title}</h3>
        {currentDoc.headings
          .filter((heading) => heading.level === 1)
          .map((heading) => {
            return (
              <a
                href={`#${AddHyphen(heading.text).toLowerCase()}`}
                key={AddHyphen(heading.text)}
                className={"table-of-content-subheader"}
              >
                {heading.text}
              </a>
            );
          })}
      </div>
    </div>
  );
}
