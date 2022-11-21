import { GraphQLClient } from "graphql-request";
import { env } from "../env/server.mjs";

export const DgraphGraphqlRequestClient = new GraphQLClient(
  env.DGRAPH_GRAPHQL_ENDPOINT,
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Dgraph-AuthToken": `${env.DGRAPH_GRAPHQL_KEY}`,
    },
  }
);
