import Layout from "../../../components/layout";
import Sidebar from "../../../components/sidebar";
import Content from "../../../components/content";
import TableOfContents from "../../../components/table-of-contents";
import { allDocs } from "contentlayer/generated";
import config from "../../../current.config.json";

export default function Documentation(props) {
  const currentVersion = props.currentVersion;
  const versionOrder = props.versionOrder;
  const defaultPages = props.defaultPages;
  const sectionOrder = props.sectionOrder;
  const currentSlug = props.currentSlug;
  const currentSection = props.currentSection;
  const currentDoc = props.currentDoc;
  const docs = props.docs;

  const defaultVersion = config.defaultVersion;
  const editBase = config.editBase;

  return (
    <Layout
      editBase={editBase}
      sectionOrder={sectionOrder}
      currentVersion={currentVersion}
      currentSlug={currentSlug}
      currentSection={currentSection}
      docs={docs}
      versionOrder={versionOrder}
      defaultVersion={defaultVersion}
      defaultPages={defaultPages}
    >
      <Sidebar
        defaultVersion={defaultVersion}
        sectionOrder={sectionOrder}
        currentVersion={currentVersion}
        currentSlug={currentSlug}
        currentSection={currentSection}
        docs={docs}
      />
      <Content
        currentVersion={currentVersion}
        currentSection={currentSection}
        currentSlug={currentSlug}
        currentDoc={currentDoc}
        docs={docs}
        defaultVersion={defaultVersion}
        editBase={editBase}
      />
      <TableOfContents currentDoc={currentDoc} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const versionIndex = allDocs.filter((doc) => !doc.draft).reduce((accumulated, item) => {
    const version = item.version;
    if (version in accumulated) {
      accumulated[version].push(item);
    } else {
      accumulated[version] = [item];
    }
    return accumulated;
  }, {});

  const docs = Object.keys(versionIndex).reduce(
    (accumulatedVersions, version) => {
      accumulatedVersions[version] = versionIndex[version].reduce(
        (accumulatedSections, sectionItem) => {
          const section = sectionItem.section;
          const reducedSectionItem = {
            section: sectionItem.section,
            version: sectionItem.version,
            title: sectionItem.title,
            slug: sectionItem.slug,
            order: sectionItem.order,
            sectionOrder: sectionItem.sectionOrder,
          };
          if (section in accumulatedSections) {
            accumulatedSections[section] = [
              reducedSectionItem,
              ...accumulatedSections[section],
            ].sort((a, b) => a.order - b.order);
          } else {
            accumulatedSections[section] = [reducedSectionItem];
          }
          return accumulatedSections;
        },
        {}
      );
      return accumulatedVersions;
    },
    {}
  );

  const versionOrder = [...new Set(allDocs.filter((doc) => !doc.draft).map((doc) => doc.version))].sort(
    (a, b) => b.localeCompare(a)
  );

  const sectionOrder = versionOrder.reduce((accumulatedVersions, version) => {
    accumulatedVersions[version] = Object.keys(docs[version]).sort(
      (a, b) =>
        docs[version][a][0].sectionOrder - docs[version][b][0].sectionOrder
    );
    return accumulatedVersions;
  }, {});

  const defaultPages = allDocs
    .filter((doc) => !doc.draft)
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

  const requiredDoc = allDocs.filter((doc) => !doc.draft).find(
    (doc) =>
      doc.version === params.version &&
      doc.section === params.section &&
      doc.slug === params.slug
  );
  const currentDoc = {
    headings: requiredDoc.headings,
    code: requiredDoc.body.code,
    title: requiredDoc.title,
    sectionOrder: requiredDoc.sectionOrder,
  };

  return {
    props: {
      defaultPages: defaultPages,
      docs: docs,
      versionOrder: versionOrder,
      sectionOrder: sectionOrder,
      currentDoc: currentDoc,
      currentVersion: params.version,
      currentSection: params.section,
      currentSlug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  const paths = allDocs.filter((doc) => !doc.draft).map((doc) => {
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
