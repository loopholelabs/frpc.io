import { allDocs } from "contentlayer/generated";
import config from "../current.config.json";
const {propmaker} = require("./propmaker");

export function getProps(params) {
    return propmaker(allDocs, config, params);
}
