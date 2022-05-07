import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { GetHeadings } from "./utils/headings";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the document",
      required: true,
    },
    order: {
      type: "number",
      description: "The order the document should be shown",
      required: true,
    },
    default: {
      type: "boolean",
      description:
        "Whether the document should be considered the default page for its section",
      required: false,
    },
  },
  computedFields: {
    version: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileDir.split("/")[0],
    },
    section: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileDir.split("/")[1].slice(2),
    },
    sectionOrder: {
      type: "number",
      resolve: (doc) =>
        parseInt(doc._raw.sourceFileDir.split("/")[1].slice(0, 1)),
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/.mdx\/?/, ""),
    },
    url: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/docs\/?/, ""),
    },
    headings: {
      type: "json",
      resolve: (doc) => GetHeadings(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "docs",
  documentTypes: [Doc],
  mdx: { rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings] },
});
