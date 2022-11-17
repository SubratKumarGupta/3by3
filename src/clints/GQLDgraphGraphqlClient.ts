import { GraphQLClient } from "graphql-request";
import { env } from "../env/server.mjs";

export const DgraphGraphqlRequestClient = new GraphQLClient(
  "http://localhost:8080/graphql",
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Dgraph-AuthToken": `${env.DGRAPH_GRAPHQL_KEY}`,
    },
  }
);
