import { env } from "process";
console.log(env.DEV_DGRAPH_GRAPHQL_KEY);
const config = {
  schema: [
    {
      "http://localhost:8080/admin": {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-Dgraph-AuthToken": env.DEV_DGRAPH_GRAPHQL_KEY, //not type safe
        },
      },
    },
  ],
  documents: ["src/Database/admin/oprations"],
  generates: {
    "./src/Database/admin/scripts/generatedTyps.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
