import fetch from "node-fetch";

const url = `${process.env.DEV_DGRAPH_ADMIN_ENDPOINT}/schema/validate?=`;

export const validateSchema = async (Schema: string) => {
  const options = {
    method: "POST",
    headers: {
      "content-type": "text/plain",
      "X-Dgraph-AuthToken": process.env.DEV_DGRAPH_ADMIN_ENDPOINT!,
    },
    body: Schema,
  };
  let res = null;
  try {
    res = await (await fetch(url, options)).json();
  } catch (error) {
    console.error(error);
  }
  console.log(res.errors[0].message);
  return res;
};
validateSchema(`
type Account {
  id: ID
  type: String
  provider: String @search(by: [hash])
  providerAccountId: String @search(by: [hash])
  refreshToken: String
  expires_at: Int64
  accessToken: String
  token_type: String
  refresh_token: String
  access_token: String
  scope: String
  id_token: String
  session_state: String
  user: User @hasInverse(field: "accounts")
}
type Session {
  id: ID
  expires: DateTime
  sessionToken: String @search(by: [hash])
  user: User @hasInverse(field: "sessions")
}
type User {
  id: ID
  name: String
  email: String @search(by: [hash])
  emailVerified: DateTime
  image: String
  accounts: [Account] @hasInverse(field: "user")
  sessions: [Session] @hasInverse(field: "user")
}

type VerificationToken {
  id: ID
  identifier: String @search(by: [hash])
  token: String @search(by: [hash])
  expires: DateTime
}
`);
