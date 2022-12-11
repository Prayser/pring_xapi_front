import {Manifest} from './manifest'
import {XMLParser} from "fast-xml-parser";

export const ParseManifest = () => {
    const parser = new XMLParser({
        ignoreDeclaration: true,
        ignorePiTags: true,
        ignoreAttributes: false,
        attributeNamePrefix: 'attr_',

    });
    let jObj = parser.parse(Manifest);


    if ('courseStructure' in jObj && 'au' in jObj.courseStructure) {
        if (jObj.courseStructure.au.constructor === Array) {
            return jObj.courseStructure.au
        } else {
            return [jObj.courseStructure.au]
        }
    }
}