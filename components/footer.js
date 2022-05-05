export default function Footer() {
  return (
    <footer
      className={
        "border-t-2 border-divider border-opacity-10 dark:border-divider-dark dark:border-opacity-50"
      }
    >
      <div
        className={
          "py-3 md:py-6 px-3 flex flex-col-reverse md:flex-row items-center md:justify-between"
        }
      >
        <p className={"footer-copyright"}>
          Copyright &copy; {new Date().getFullYear()} Loophole Labs, Inc.
        </p>
        <a href={"#"} className={"footer-edit"}>
          Edit This Page on Github
        </a>
      </div>
    </footer>
  );
}
