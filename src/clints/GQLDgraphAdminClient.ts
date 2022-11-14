import { GraphQLClient } from "graphql-request";
import { env } from "../env/server.mjs";

const graphqlDgraphAdminRequestClient = new GraphQLClient(
  "https://graphql.anilist.co",
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Dgraph-AuthToken": env.DGRAPH_GRAPHQL_KEY,
    },
  }
);
export default graphqlDgraphAdminRequestClient;
