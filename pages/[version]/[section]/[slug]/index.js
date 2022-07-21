import Layout from "../../../../components/layout";
import { allDocs } from "contentlayer/generated";
import { getProps } from "../../../../utils/props";
import Content from "../../../../components/content";
import TableOfContents from "../../../../components/table-of-contents";

export default function Slug(props) {
  return (
    <Layout {...props}>
      <Content {...props} />
      <TableOfContents currentDoc={props.currentDoc} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  return getProps(params);
}

export async function getStaticPaths() {
  const paths = allDocs
    .filter((doc) => !doc.draft)
    .map((doc) => {
      return {
        params: {
          version: doc.version,
          section: doc.section,
          slug: doc.slug,
        },
      };
    });

    return {
    paths: paths,
    fallback: false,
  };
}
