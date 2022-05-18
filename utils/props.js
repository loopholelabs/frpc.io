import { allDocs } from "contentlayer/generated";
import config from "../current.config.json";

export function getProps(params) {
  const versionIndex = allDocs
    .filter((doc) => !doc.draft)
    .reduce((accumulated, item) => {
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

  const versionOrder = [
    ...new Set(allDocs.filter((doc) => !doc.draft).map((doc) => doc.version)),
  ].sort((a, b) => b.localeCompare(a));

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

  let currentDoc = {};

  if (params) {
    const requiredDoc = allDocs
      .filter((doc) => !doc.draft)
      .find(
        (doc) =>
          doc.version === params.version &&
          doc.section === params.section &&
          doc.slug === params.slug
      );
    currentDoc = {
      headings: requiredDoc.headings,
      code: requiredDoc.body.code,
      title: requiredDoc.title,
      sectionOrder: requiredDoc.sectionOrder,
    };
  }

  return {
    props: {
      defaultPages: defaultPages,
      docs: docs,
      versionOrder: versionOrder,
      sectionOrder: sectionOrder,
      currentDoc: currentDoc,
      currentVersion: params ? params.version : config.defaultVersion,
      currentSection: params ? params.section : "",
      currentSlug: params ? params.slug : "",
      defaultVersion: config.defaultVersion,
      editBase: config.editBase,
    },
  };
}
