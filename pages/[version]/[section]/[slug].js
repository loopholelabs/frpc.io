import Layout from "../../../components/layout";
import Sidebar from "../../../components/sidebar";
import Content from "../../../components/content";
import TableOfContents from "../../../components/table-of-contents";
import { allDocs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Config from "../../../current.config.json";

export default function Documentation(props) {
  return (
    <Layout {...props}>
      <Sidebar sections={props.sections} />
      <Content doc={props.doc} />
      <TableOfContents />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const docs = allDocs.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  const sorted = allDocs
    .sort((a, b) => b.version.localeCompare(a.version))
    .map((doc) => {
      return {
        version: doc.version,
        section: doc.section,
        slug: doc.slug,
      };
    });

  const groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const versions = [...new Set(sorted.map((doc) => doc.version))].sort((a, b) =>
    b.localeCompare(a)
  );
  const sections = groupBy(
    sorted.filter((doc) => doc.version === params.version),
    "section"
  );
  const defaultPages = allDocs
    .filter((doc) => doc.default)
    .sort((a, b) => b.version.localeCompare(a.version))
    .map((doc) => {
      return {
        version: doc.version,
        section: doc.section,
        slug: doc.slug,
      };
    })
    .reduce((a, v) => ({ ...a, [v.version]: v }), {});

  return {
    props: {
      config: Config,
      docs: docs,
      versions: versions,
      sections: sections,
      defaultPages: defaultPages,
      doc: docs.find(
        (doc) =>
          doc.version === params.version &&
          doc.section === params.section &&
          doc.slug === params.slug
      ),
      version: params.version,
      section: params.section,
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  const paths = allDocs.map((doc) => {
    return {
      params: {
        version: doc.version,
        section: doc.section,
        slug: doc.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
