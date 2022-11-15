// import { readFile, writeFile, watchFile } from "fs";
// @ts-check

import { graphqlDgraphAdminRequestClient } from "../../../src/clints/GQLDgraphAdminClient";
import { validateSchema } from "./utils/validate";

import { getSdk } from "./generatedTyps";
import { readFile, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const sync = async () => {
  const SchemaPath = join(__dirname, "../../../../../../../schema/schema.gql");
  const GenSchemaPath = join(
    __dirname,
    "../../../../../../../schema/genratedSchema.gql"
  );
  console.log(__dirname);
  const schema = readFileSync(SchemaPath, { encoding: "utf-8" });
  console.log(schema);
  const isValid: any = await validateSchema(schema);
  if (isValid.errors[0].message !== "Schema is valid") {
    //console.error(isValid.errors[0].message, isValid.errors[0].extensions.code);
    process.exit(2);
  } else {
    try {
      const res = await getSdk(graphqlDgraphAdminRequestClient).updateGQLSchema(
        { sch: schema }
      );
      const generatedSchema =
        res.updateGQLSchema?.gqlSchema?.generatedSchema.trim();
      console.log(generatedSchema);
      writeFileSync(GenSchemaPath, generatedSchema!, { encoding: "utf-8" });
    } catch (error) {
      console.error(error);
    }
    try {
    } catch (error) {}
  }
  return;
};
//
sync();
//yarn tsc  src\Database\admin\scripts\generatedTyps.ts
//export {  };
