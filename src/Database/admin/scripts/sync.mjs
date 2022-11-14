// import { readFile, writeFile, watchFile } from "fs";
// @ts-check

// import  graphqlDgraphAdminRequestClient  from "./";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generatedTyps.js";
//check if degraph has schenma
const graphqlDgraphAdminRequestClient = new GraphQLClient(
  "https://graphql.anilist.co",
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Dgraph-AuthToken": "ODhhZWIwMzg5NTk0YmRjZWVhYzllODk4ZTU3ODA0NDQ",
    },
  }
);
const clint = getSdk(graphqlDgraphAdminRequestClient);
const checkForSchema = async () => {
  try {
    const res = clint.checkSchema();
    console.log(res);
  } catch (error) {
    console.error(error);
  }

  return;
};
//
checkForSchema();
//export {  };
