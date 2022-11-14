// import { readFile, writeFile, watchFile } from "fs";
// @ts-check

import { graphqlDgraphAdminRequestClient } from "../../../src/clints/GQLDgraphAdminClient";

import { getSdk } from "./generatedTyps";

const checkForSchema = async () => {
  try {
    const a = await getSdk(graphqlDgraphAdminRequestClient).checkSchema();
    console.log(a.getGQLSchema?.schema);
  } catch (error) {
    console.error(error);
  }

  return;
};
//
checkForSchema();
//yarn tsc  src\Database\admin\scripts\generatedTyps.ts
//export {  };
