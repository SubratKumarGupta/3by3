import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql.anilist.co",
  documents: "./src/**/*.graphql",

  generates: {
    "./src/generated/gen.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        legacyMode: true,
        pureMagicComment: true,
        fetch: "graphql-request",
      },
    },
  },
};

export default config;
