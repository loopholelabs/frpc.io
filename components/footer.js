import Link from "next/link";

export default function Footer(props) {
  const editBase = props.editBase;
  const currentVersion = props.currentVersion;
  const currentSection = props.currentSection;
  const currentSlug = props.currentSlug;
  const currentDoc = props.currentDoc;
  const defaultVersion = props.defaultVersion;
  const docs = props.docs;

  function findNext() {
    const index = docs[currentVersion][currentSection].findIndex(
      (doc) => doc.slug === currentSlug
    );
    if (index < docs[currentVersion][currentSection].length - 1) {
      return docs[currentVersion][currentSection][index + 1];
    } else {
      const sectionKeys = Object.keys(docs[currentVersion]);
      const sectionIndex = sectionKeys.findIndex(
        (section) => section === currentSection
      );
      if (sectionIndex < sectionKeys.length - 1) {
        return docs[currentVersion][sectionKeys[sectionIndex + 1]][0];
      }
    }
    return null;
  }

  function findPrevious() {
    const index = docs[currentVersion][currentSection].findIndex(
      (doc) => doc.slug === currentSlug
    );
    if (index > 0) {
      return docs[currentVersion][currentSection][index - 1];
    } else {
      const sectionKeys = Object.keys(docs[currentVersion]);
      const sectionIndex = sectionKeys.findIndex(
        (section) => section === currentSection
      );
      if (sectionIndex > 0) {
        return docs[currentVersion][sectionKeys[sectionIndex - 1]][
          docs[currentVersion][sectionKeys[sectionIndex - 1]].length - 1
        ];
      }
    }
    return null;
  }

  const nextDoc = findNext();
  const previousDoc = findPrevious();
  return (
    <div>
      <div
        className={`pb-3 w-full flex items-center ${
          nextDoc && previousDoc
            ? "justify-between"
            : nextDoc
            ? "justify-end"
            : "justify-start"
        }`}
      >
        {previousDoc && (
          <Link
            href={
              defaultVersion === currentVersion
                ? `/${previousDoc.section}/${previousDoc.slug}`
                : `/${previousDoc.version}/${previousDoc.section}/${previousDoc.slug}`
            }
          >
            <a>
              <div
                className={
                  "float-left border border-control py-2 px-2.5 rounded-md"
                }
              >
                <p
                  className={
                    "text-text dark:text-text-dark text-sm text-right pb-0.5"
                  }
                >
                  Previous
                </p>
                <p>{previousDoc.title}</p>
              </div>
            </a>
          </Link>
        )}
        {nextDoc && (
          <Link
            href={
              defaultVersion === currentVersion
                ? `/${nextDoc.section}/${nextDoc.slug}`
                : `/${nextDoc.version}/${nextDoc.section}/${nextDoc.slug}`
            }
          >
            <a>
              <div
                className={
                  "float-right border border-control py-2 px-2.5 rounded-md"
                }
              >
                <p
                  className={
                    "text-text dark:text-text-dark text-sm text-right pb-0.5"
                  }
                >
                  Next
                </p>
                <p>{nextDoc.title}</p>
              </div>
            </a>
          </Link>
        )}
      </div>
      <footer className={"border-t-2 border-control"}>
        <div
          className={
            "py-3 md:py-6 px-3 flex flex-col-reverse md:flex-row items-center md:justify-between"
          }
        >
          <div className={"inline-flex"}>
            <p className={"footer-copyright"}>
              Copyright &copy; {new Date().getFullYear()}&nbsp;
            </p>
            <a href={"https://loopholelabs.io"} className={"footer-edit"}>
              Loophole Labs, Inc.
            </a>
          </div>
          <a
            href={`${editBase}/${currentVersion}/${currentDoc.sectionOrder}-${currentSection}/${currentSlug}.mdx`}
            className={"footer-edit"}
          >
            Edit This Page on Github
          </a>
        </div>
      </footer>
    </div>
  );
}
