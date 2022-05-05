import Footer from "./footer";
import Breadcrumbs from "./breadcrumbs";

export default function Content() {
  return (
    <div className={"wrapper-content"}>
      <div className={"pb-4"}>
        <p className={"font-semibold text-primary"}>Installation</p>
        <h1 className={"py-5 text-4xl font-semibold"}>Getting Started</h1>
        <p className={"text-text dark:text-text-dark"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, cursus
          eros, arcu sit massa rhoncus molestie tortor elit. Ullamcorper in
          facilisi felis ut enim enim aliquet.
        </p>
      </div>
      <Footer />
    </div>
  );
}
