import { GraphQLClient } from "graphql-request";

// const requestHeaders = {
//   authorization: "B9WB74eNu9hrEpuTiPZiaCeE5rl4lR314alwhV8S",
// };

const graphqlRequestClient = new GraphQLClient("https://graphql.anilist.co", {
  method: "POST",
  headers: {
    ["Accept"]: "application/json",
    ["Content-Type"]: "application/json",

    //authorization: "B9WB74eNu9hrEpuTiPZiaCeE5rl4lR314alwhV8S",./src/gen/graphql.ts
  },
});

export default graphqlRequestClient;
