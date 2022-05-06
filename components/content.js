import Footer from "./footer";

export default function Content(props) {
  return (
    <div className={"wrapper-content"}>
      <div className={"pb-4"}>
        <p className={"font-semibold text-primary"}>Installation</p>
        <h1 className={"py-5 text-4xl font-semibold"}>Getting Started</h1>
        <p className={"text-text dark:text-text-dark"}>
          {JSON.stringify(props.posts)}
        </p>
      </div>
      <Footer />
    </div>
  );
}
