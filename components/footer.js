export default function Footer(props) {
  const editBase = props.editBase;
  const currentVersion = props.currentVersion;
  const currentSection = props.currentSection;
  const currentSlug = props.currentSlug;
  const currentDoc = props.currentDoc;
  return (
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
  );
}
