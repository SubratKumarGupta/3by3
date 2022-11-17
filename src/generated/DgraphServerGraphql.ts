import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Int64: any;
};

export type Account = {
  __typename?: 'Account';
  accessToken?: Maybe<Scalars['String']>;
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int64']>;
  id?: Maybe<Scalars['ID']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type AccountUserArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type AccountAggregateResult = {
  __typename?: 'AccountAggregateResult';
  accessTokenMax?: Maybe<Scalars['String']>;
  accessTokenMin?: Maybe<Scalars['String']>;
  access_tokenMax?: Maybe<Scalars['String']>;
  access_tokenMin?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  expires_atAvg?: Maybe<Scalars['Float']>;
  expires_atMax?: Maybe<Scalars['Int64']>;
  expires_atMin?: Maybe<Scalars['Int64']>;
  expires_atSum?: Maybe<Scalars['Int64']>;
  id_tokenMax?: Maybe<Scalars['String']>;
  id_tokenMin?: Maybe<Scalars['String']>;
  providerAccountIdMax?: Maybe<Scalars['String']>;
  providerAccountIdMin?: Maybe<Scalars['String']>;
  providerMax?: Maybe<Scalars['String']>;
  providerMin?: Maybe<Scalars['String']>;
  refreshTokenMax?: Maybe<Scalars['String']>;
  refreshTokenMin?: Maybe<Scalars['String']>;
  refresh_tokenMax?: Maybe<Scalars['String']>;
  refresh_tokenMin?: Maybe<Scalars['String']>;
  scopeMax?: Maybe<Scalars['String']>;
  scopeMin?: Maybe<Scalars['String']>;
  session_stateMax?: Maybe<Scalars['String']>;
  session_stateMin?: Maybe<Scalars['String']>;
  token_typeMax?: Maybe<Scalars['String']>;
  token_typeMin?: Maybe<Scalars['String']>;
  typeMax?: Maybe<Scalars['String']>;
  typeMin?: Maybe<Scalars['String']>;
};

export type AccountFilter = {
  and?: InputMaybe<Array<InputMaybe<AccountFilter>>>;
  has?: InputMaybe<Array<InputMaybe<AccountHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<AccountFilter>;
  or?: InputMaybe<Array<InputMaybe<AccountFilter>>>;
  provider?: InputMaybe<StringHashFilter>;
  providerAccountId?: InputMaybe<StringHashFilter>;
};

export enum AccountHasFilter {
  accessToken = 'accessToken',
  access_token = 'access_token',
  expires_at = 'expires_at',
  id_token = 'id_token',
  provider = 'provider',
  providerAccountId = 'providerAccountId',
  refreshToken = 'refreshToken',
  refresh_token = 'refresh_token',
  scope = 'scope',
  session_state = 'session_state',
  token_type = 'token_type',
  type = 'type',
  user = 'user'
}

export type AccountOrder = {
  asc?: InputMaybe<AccountOrderable>;
  desc?: InputMaybe<AccountOrderable>;
  then?: InputMaybe<AccountOrder>;
};

export enum AccountOrderable {
  accessToken = 'accessToken',
  access_token = 'access_token',
  expires_at = 'expires_at',
  id_token = 'id_token',
  provider = 'provider',
  providerAccountId = 'providerAccountId',
  refreshToken = 'refreshToken',
  refresh_token = 'refresh_token',
  scope = 'scope',
  session_state = 'session_state',
  token_type = 'token_type',
  type = 'type'
}

export type AccountPatch = {
  accessToken?: InputMaybe<Scalars['String']>;
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int64']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRef>;
};

export type AccountRef = {
  accessToken?: InputMaybe<Scalars['String']>;
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int64']>;
  id?: InputMaybe<Scalars['ID']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRef>;
};

export type AddAccountInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int64']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRef>;
};

export type AddAccountPayload = {
  __typename?: 'AddAccountPayload';
  account?: Maybe<Array<Maybe<Account>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddAccountPayloadAccountArgs = {
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AccountOrder>;
};

export type AddPostInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  user?: InputMaybe<UserRef>;
};

export type AddPostPayload = {
  __typename?: 'AddPostPayload';
  numUids?: Maybe<Scalars['Int']>;
  post?: Maybe<Array<Maybe<Post>>>;
};


export type AddPostPayloadPostArgs = {
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PostOrder>;
};

export type AddSessionInput = {
  expires?: InputMaybe<Scalars['DateTime']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRef>;
};

export type AddSessionPayload = {
  __typename?: 'AddSessionPayload';
  numUids?: Maybe<Scalars['Int']>;
  session?: Maybe<Array<Maybe<Session>>>;
};


export type AddSessionPayloadSessionArgs = {
  filter?: InputMaybe<SessionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SessionOrder>;
};

export type AddUserInput = {
  accounts?: InputMaybe<Array<InputMaybe<AccountRef>>>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<InputMaybe<PostRef>>>;
  sessions?: InputMaybe<Array<InputMaybe<SessionRef>>>;
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type AddUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};

export type AddVerificationTokenInput = {
  expires?: InputMaybe<Scalars['DateTime']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type AddVerificationTokenPayload = {
  __typename?: 'AddVerificationTokenPayload';
  numUids?: Maybe<Scalars['Int']>;
  verificationToken?: Maybe<Array<Maybe<VerificationToken>>>;
};


export type AddVerificationTokenPayloadVerificationTokenArgs = {
  filter?: InputMaybe<VerificationTokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<VerificationTokenOrder>;
};

export type AuthRule = {
  and?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  not?: InputMaybe<AuthRule>;
  or?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  rule?: InputMaybe<Scalars['String']>;
};

export type ContainsFilter = {
  point?: InputMaybe<PointRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type CustomHttp = {
  body?: InputMaybe<Scalars['String']>;
  forwardHeaders?: InputMaybe<Array<Scalars['String']>>;
  graphql?: InputMaybe<Scalars['String']>;
  introspectionHeaders?: InputMaybe<Array<Scalars['String']>>;
  method: HttpMethod;
  mode?: InputMaybe<Mode>;
  secretHeaders?: InputMaybe<Array<Scalars['String']>>;
  skipIntrospection?: InputMaybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type DateTimeFilter = {
  between?: InputMaybe<DateTimeRange>;
  eq?: InputMaybe<Scalars['DateTime']>;
  ge?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  le?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DeleteAccountPayload = {
  __typename?: 'DeleteAccountPayload';
  account?: Maybe<Array<Maybe<Account>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteAccountPayloadAccountArgs = {
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AccountOrder>;
};

export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  post?: Maybe<Array<Maybe<Post>>>;
};


export type DeletePostPayloadPostArgs = {
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PostOrder>;
};

export type DeleteSessionPayload = {
  __typename?: 'DeleteSessionPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  session?: Maybe<Array<Maybe<Session>>>;
};


export type DeleteSessionPayloadSessionArgs = {
  filter?: InputMaybe<SessionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SessionOrder>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type DeleteUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};

export type DeleteVerificationTokenPayload = {
  __typename?: 'DeleteVerificationTokenPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  verificationToken?: Maybe<Array<Maybe<VerificationToken>>>;
};


export type DeleteVerificationTokenPayloadVerificationTokenArgs = {
  filter?: InputMaybe<VerificationTokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<VerificationTokenOrder>;
};

export enum DgraphIndex {
  bool = 'bool',
  day = 'day',
  exact = 'exact',
  float = 'float',
  fulltext = 'fulltext',
  geo = 'geo',
  hash = 'hash',
  hour = 'hour',
  int = 'int',
  int64 = 'int64',
  month = 'month',
  regexp = 'regexp',
  term = 'term',
  trigram = 'trigram',
  year = 'year'
}

export type FloatFilter = {
  between?: InputMaybe<FloatRange>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
};

export type FloatRange = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type GenerateMutationParams = {
  add?: InputMaybe<Scalars['Boolean']>;
  delete?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<Scalars['Boolean']>;
};

export type GenerateQueryParams = {
  aggregate?: InputMaybe<Scalars['Boolean']>;
  get?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['Boolean']>;
};

export enum HttpMethod {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT'
}

export type Int64Filter = {
  between?: InputMaybe<Int64Range>;
  eq?: InputMaybe<Scalars['Int64']>;
  ge?: InputMaybe<Scalars['Int64']>;
  gt?: InputMaybe<Scalars['Int64']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int64']>>>;
  le?: InputMaybe<Scalars['Int64']>;
  lt?: InputMaybe<Scalars['Int64']>;
};

export type Int64Range = {
  max: Scalars['Int64'];
  min: Scalars['Int64'];
};

export type IntFilter = {
  between?: InputMaybe<IntRange>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
};

export type IntRange = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type IntersectsFilter = {
  multiPolygon?: InputMaybe<MultiPolygonRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export enum Mode {
  BATCH = 'BATCH',
  SINGLE = 'SINGLE'
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAccount?: Maybe<AddAccountPayload>;
  addPost?: Maybe<AddPostPayload>;
  addSession?: Maybe<AddSessionPayload>;
  addUser?: Maybe<AddUserPayload>;
  addVerificationToken?: Maybe<AddVerificationTokenPayload>;
  deleteAccount?: Maybe<DeleteAccountPayload>;
  deletePost?: Maybe<DeletePostPayload>;
  deleteSession?: Maybe<DeleteSessionPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteVerificationToken?: Maybe<DeleteVerificationTokenPayload>;
  updateAccount?: Maybe<UpdateAccountPayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  updateSession?: Maybe<UpdateSessionPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  updateVerificationToken?: Maybe<UpdateVerificationTokenPayload>;
};


export type MutationAddAccountArgs = {
  input: Array<AddAccountInput>;
};


export type MutationAddPostArgs = {
  input: Array<AddPostInput>;
};


export type MutationAddSessionArgs = {
  input: Array<AddSessionInput>;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
};


export type MutationAddVerificationTokenArgs = {
  input: Array<AddVerificationTokenInput>;
};


export type MutationDeleteAccountArgs = {
  filter: AccountFilter;
};


export type MutationDeletePostArgs = {
  filter: PostFilter;
};


export type MutationDeleteSessionArgs = {
  filter: SessionFilter;
};


export type MutationDeleteUserArgs = {
  filter: UserFilter;
};


export type MutationDeleteVerificationTokenArgs = {
  filter: VerificationTokenFilter;
};


export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type MutationUpdateSessionArgs = {
  input: UpdateSessionInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateVerificationTokenArgs = {
  input: UpdateVerificationTokenInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float'];
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: InputMaybe<ContainsFilter>;
  intersects?: InputMaybe<IntersectsFilter>;
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type Post = {
  __typename?: 'Post';
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  user?: Maybe<User>;
};


export type PostUserArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type PostAggregateResult = {
  __typename?: 'PostAggregateResult';
  count?: Maybe<Scalars['Int']>;
  createdAtMax?: Maybe<Scalars['DateTime']>;
  createdAtMin?: Maybe<Scalars['DateTime']>;
  descriptionMax?: Maybe<Scalars['String']>;
  descriptionMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type PostFilter = {
  and?: InputMaybe<Array<InputMaybe<PostFilter>>>;
  has?: InputMaybe<Array<InputMaybe<PostHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StringExactFilter_StringFullTextFilter>;
  not?: InputMaybe<PostFilter>;
  or?: InputMaybe<Array<InputMaybe<PostFilter>>>;
};

export enum PostHasFilter {
  createdAt = 'createdAt',
  description = 'description',
  name = 'name',
  user = 'user'
}

export type PostOrder = {
  asc?: InputMaybe<PostOrderable>;
  desc?: InputMaybe<PostOrderable>;
  then?: InputMaybe<PostOrder>;
};

export enum PostOrderable {
  createdAt = 'createdAt',
  description = 'description',
  name = 'name'
}

export type PostPatch = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRef>;
};

export type PostRef = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRef>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAccount?: Maybe<AccountAggregateResult>;
  aggregatePost?: Maybe<PostAggregateResult>;
  aggregateSession?: Maybe<SessionAggregateResult>;
  aggregateUser?: Maybe<UserAggregateResult>;
  aggregateVerificationToken?: Maybe<VerificationTokenAggregateResult>;
  getAccount?: Maybe<Account>;
  getPost?: Maybe<Post>;
  getSession?: Maybe<Session>;
  getUser?: Maybe<User>;
  getVerificationToken?: Maybe<VerificationToken>;
  queryAccount?: Maybe<Array<Maybe<Account>>>;
  queryPost?: Maybe<Array<Maybe<Post>>>;
  querySession?: Maybe<Array<Maybe<Session>>>;
  queryUser?: Maybe<Array<Maybe<User>>>;
  queryVerificationToken?: Maybe<Array<Maybe<VerificationToken>>>;
};


export type QueryAggregateAccountArgs = {
  filter?: InputMaybe<AccountFilter>;
};


export type QueryAggregatePostArgs = {
  filter?: InputMaybe<PostFilter>;
};


export type QueryAggregateSessionArgs = {
  filter?: InputMaybe<SessionFilter>;
};


export type QueryAggregateUserArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type QueryAggregateVerificationTokenArgs = {
  filter?: InputMaybe<VerificationTokenFilter>;
};


export type QueryGetAccountArgs = {
  id: Scalars['ID'];
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryGetSessionArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryGetVerificationTokenArgs = {
  id: Scalars['ID'];
};


export type QueryQueryAccountArgs = {
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AccountOrder>;
};


export type QueryQueryPostArgs = {
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PostOrder>;
};


export type QueryQuerySessionArgs = {
  filter?: InputMaybe<SessionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SessionOrder>;
};


export type QueryQueryUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};


export type QueryQueryVerificationTokenArgs = {
  filter?: InputMaybe<VerificationTokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<VerificationTokenOrder>;
};

export type Session = {
  __typename?: 'Session';
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  sessionToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type SessionUserArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type SessionAggregateResult = {
  __typename?: 'SessionAggregateResult';
  count?: Maybe<Scalars['Int']>;
  expiresMax?: Maybe<Scalars['DateTime']>;
  expiresMin?: Maybe<Scalars['DateTime']>;
  sessionTokenMax?: Maybe<Scalars['String']>;
  sessionTokenMin?: Maybe<Scalars['String']>;
};

export type SessionFilter = {
  and?: InputMaybe<Array<InputMaybe<SessionFilter>>>;
  has?: InputMaybe<Array<InputMaybe<SessionHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<SessionFilter>;
  or?: InputMaybe<Array<InputMaybe<SessionFilter>>>;
  sessionToken?: InputMaybe<StringHashFilter>;
};

export enum SessionHasFilter {
  expires = 'expires',
  sessionToken = 'sessionToken',
  user = 'user'
}

export type SessionOrder = {
  asc?: InputMaybe<SessionOrderable>;
  desc?: InputMaybe<SessionOrderable>;
  then?: InputMaybe<SessionOrder>;
};

export enum SessionOrderable {
  expires = 'expires',
  sessionToken = 'sessionToken'
}

export type SessionPatch = {
  expires?: InputMaybe<Scalars['DateTime']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRef>;
};

export type SessionRef = {
  expires?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRef>;
};

export type StringExactFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
};

export type StringExactFilter_StringFullTextFilter = {
  alloftext?: InputMaybe<Scalars['String']>;
  anyoftext?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
};

export type StringFullTextFilter = {
  alloftext?: InputMaybe<Scalars['String']>;
  anyoftext?: InputMaybe<Scalars['String']>;
};

export type StringHashFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StringRange = {
  max: Scalars['String'];
  min: Scalars['String'];
};

export type StringRegExpFilter = {
  regexp?: InputMaybe<Scalars['String']>;
};

export type StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']>;
  anyofterms?: InputMaybe<Scalars['String']>;
};

export type UpdateAccountInput = {
  filter: AccountFilter;
  remove?: InputMaybe<AccountPatch>;
  set?: InputMaybe<AccountPatch>;
};

export type UpdateAccountPayload = {
  __typename?: 'UpdateAccountPayload';
  account?: Maybe<Array<Maybe<Account>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateAccountPayloadAccountArgs = {
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AccountOrder>;
};

export type UpdatePostInput = {
  filter: PostFilter;
  remove?: InputMaybe<PostPatch>;
  set?: InputMaybe<PostPatch>;
};

export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  numUids?: Maybe<Scalars['Int']>;
  post?: Maybe<Array<Maybe<Post>>>;
};


export type UpdatePostPayloadPostArgs = {
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PostOrder>;
};

export type UpdateSessionInput = {
  filter: SessionFilter;
  remove?: InputMaybe<SessionPatch>;
  set?: InputMaybe<SessionPatch>;
};

export type UpdateSessionPayload = {
  __typename?: 'UpdateSessionPayload';
  numUids?: Maybe<Scalars['Int']>;
  session?: Maybe<Array<Maybe<Session>>>;
};


export type UpdateSessionPayloadSessionArgs = {
  filter?: InputMaybe<SessionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SessionOrder>;
};

export type UpdateUserInput = {
  filter: UserFilter;
  remove?: InputMaybe<UserPatch>;
  set?: InputMaybe<UserPatch>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type UpdateUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};

export type UpdateVerificationTokenInput = {
  filter: VerificationTokenFilter;
  remove?: InputMaybe<VerificationTokenPatch>;
  set?: InputMaybe<VerificationTokenPatch>;
};

export type UpdateVerificationTokenPayload = {
  __typename?: 'UpdateVerificationTokenPayload';
  numUids?: Maybe<Scalars['Int']>;
  verificationToken?: Maybe<Array<Maybe<VerificationToken>>>;
};


export type UpdateVerificationTokenPayloadVerificationTokenArgs = {
  filter?: InputMaybe<VerificationTokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<VerificationTokenOrder>;
};

export type User = {
  __typename?: 'User';
  accounts?: Maybe<Array<Maybe<Account>>>;
  accountsAggregate?: Maybe<AccountAggregateResult>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  postsAggregate?: Maybe<PostAggregateResult>;
  sessions?: Maybe<Array<Maybe<Session>>>;
  sessionsAggregate?: Maybe<SessionAggregateResult>;
};


export type UserAccountsArgs = {
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AccountOrder>;
};


export type UserAccountsAggregateArgs = {
  filter?: InputMaybe<AccountFilter>;
};


export type UserPostsArgs = {
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PostOrder>;
};


export type UserPostsAggregateArgs = {
  filter?: InputMaybe<PostFilter>;
};


export type UserSessionsArgs = {
  filter?: InputMaybe<SessionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SessionOrder>;
};


export type UserSessionsAggregateArgs = {
  filter?: InputMaybe<SessionFilter>;
};

export type UserAggregateResult = {
  __typename?: 'UserAggregateResult';
  count?: Maybe<Scalars['Int']>;
  descriptionMax?: Maybe<Scalars['String']>;
  descriptionMin?: Maybe<Scalars['String']>;
  emailMax?: Maybe<Scalars['String']>;
  emailMin?: Maybe<Scalars['String']>;
  emailVerifiedMax?: Maybe<Scalars['DateTime']>;
  emailVerifiedMin?: Maybe<Scalars['DateTime']>;
  imageMax?: Maybe<Scalars['String']>;
  imageMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type UserFilter = {
  and?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  email?: InputMaybe<StringHashFilter>;
  has?: InputMaybe<Array<InputMaybe<UserHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StringExactFilter_StringFullTextFilter>;
  not?: InputMaybe<UserFilter>;
  or?: InputMaybe<Array<InputMaybe<UserFilter>>>;
};

export enum UserHasFilter {
  accounts = 'accounts',
  description = 'description',
  email = 'email',
  emailVerified = 'emailVerified',
  image = 'image',
  name = 'name',
  posts = 'posts',
  sessions = 'sessions'
}

export type UserOrder = {
  asc?: InputMaybe<UserOrderable>;
  desc?: InputMaybe<UserOrderable>;
  then?: InputMaybe<UserOrder>;
};

export enum UserOrderable {
  description = 'description',
  email = 'email',
  emailVerified = 'emailVerified',
  image = 'image',
  name = 'name'
}

export type UserPatch = {
  accounts?: InputMaybe<Array<InputMaybe<AccountRef>>>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<InputMaybe<PostRef>>>;
  sessions?: InputMaybe<Array<InputMaybe<SessionRef>>>;
};

export type UserRef = {
  accounts?: InputMaybe<Array<InputMaybe<AccountRef>>>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<InputMaybe<PostRef>>>;
  sessions?: InputMaybe<Array<InputMaybe<SessionRef>>>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type VerificationTokenAggregateResult = {
  __typename?: 'VerificationTokenAggregateResult';
  count?: Maybe<Scalars['Int']>;
  expiresMax?: Maybe<Scalars['DateTime']>;
  expiresMin?: Maybe<Scalars['DateTime']>;
  identifierMax?: Maybe<Scalars['String']>;
  identifierMin?: Maybe<Scalars['String']>;
  tokenMax?: Maybe<Scalars['String']>;
  tokenMin?: Maybe<Scalars['String']>;
};

export type VerificationTokenFilter = {
  and?: InputMaybe<Array<InputMaybe<VerificationTokenFilter>>>;
  has?: InputMaybe<Array<InputMaybe<VerificationTokenHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  identifier?: InputMaybe<StringHashFilter>;
  not?: InputMaybe<VerificationTokenFilter>;
  or?: InputMaybe<Array<InputMaybe<VerificationTokenFilter>>>;
  token?: InputMaybe<StringHashFilter>;
};

export enum VerificationTokenHasFilter {
  expires = 'expires',
  identifier = 'identifier',
  token = 'token'
}

export type VerificationTokenOrder = {
  asc?: InputMaybe<VerificationTokenOrderable>;
  desc?: InputMaybe<VerificationTokenOrderable>;
  then?: InputMaybe<VerificationTokenOrder>;
};

export enum VerificationTokenOrderable {
  expires = 'expires',
  identifier = 'identifier',
  token = 'token'
}

export type VerificationTokenPatch = {
  expires?: InputMaybe<Scalars['DateTime']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type VerificationTokenRef = {
  expires?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type GetUserProfileQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserProfileQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', name?: string | null, email?: string | null, image?: string | null, emailVerified?: any | null, description?: string | null, posts?: Array<{ __typename?: 'Post', name: string, createdAt?: any | null, description: string } | null> | null } | null };


export const GetUserProfileDocument = gql`
    query getUserProfile($id: ID!) {
  getUser(id: $id) {
    name
    email
    image
    emailVerified
    description
    posts {
      name
      createdAt
      description
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getUserProfile(variables: GetUserProfileQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserProfileQuery>(GetUserProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserProfile', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;