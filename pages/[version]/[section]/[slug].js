import Layout from "../../../components/layout";
import Sidebar from "../../../components/sidebar";
import Content from "../../../components/content";
import TableOfContents from "../../../components/table-of-contents";
import { allDocs } from "contentlayer/generated";
import Config from "../../../current.config.json";

export default function Documentation(props) {
  const currentVersion = props.currentVersion;
  const versionOrder = props.versionOrder;
  const defaultVersion = props.defaultVersion;
  const defaultPages = props.defaultPages;
  const sectionOrder=props.sectionOrder;
  const currentSlug=props.currentSlug;
  const currentSection=props.currentSection;
  const docs = props.docs;


  return (
    <Layout sectionOrder={sectionOrder} currentVersion={currentVersion} currentSlug={currentSlug} currentSection={currentSection} docs={docs} versionOrder={versionOrder} defaultVersion={defaultVersion} defaultPages={defaultPages} >
      <Sidebar defaultVersion={defaultVersion}  sectionOrder={sectionOrder} currentVersion={currentVersion} currentSlug={currentSlug} currentSection={currentSection} docs={docs} />
      <Content  />
      <TableOfContents  />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const versionIndex = allDocs.reduce((accumulated, item) => {
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
            slug: sectionItem.slug,
            order: sectionItem.order,
            sectionOrder: sectionItem.sectionOrder,
          }
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

  const versionOrder = [...new Set(allDocs.map((doc) => doc.version))].sort(
    (a, b) => b.localeCompare(a)
  );

  const sectionOrder = versionOrder.reduce((accumulatedVersions, version) => {
    accumulatedVersions[version] = Object.keys(docs[version]).sort(
      (a, b) => docs[version][a][0].sectionOrder - docs[version][b][0].section
    );
    return accumulatedVersions;
  }, {});

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
      defaultVersion: Config.defaultVersion,
      defaultPages: defaultPages,
      docs: docs,
      versionOrder: versionOrder,
      sectionOrder: sectionOrder,
      currentDoc: allDocs.find(
        (doc) =>
          doc.version === params.version &&
          doc.section === params.section &&
          doc.slug === params.slug
      ),
      currentVersion: params.version,
      currentSection: params.section,
      currentSlug: params.slug,
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
