import Sidebar from "../components/sidebar";
import Content from "../components/content";
import TableOfContents from "../components/table-of-contents";
import Breadcrumbs from "../components/breadcrumbs";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Content />
      <TableOfContents />
    </>
  );
}
