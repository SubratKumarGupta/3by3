// import { QueryKey, useQuery } from "@tanstack/react-query";
// import React from "react";
// import {GraphQLResponse} from "graphql-request/dist/types"
// import {gql} from "graphql-request"
// import graphqlRequestClient from "../clints/GQLRequestClient"

export default "hsj";

// const GET_SEARCH_ANIME = gql(_,[searchKey])`
// query ($id: Int, $page: Int, $perPage: Int,$searchKey:string) {
//     Page(page: $page, perPage: $perPage) {
//       pageInfo {
//         total
//         currentPage
//         lastPage
//         hasNextPage
//         perPage
//       }
//       media(id: $id, type: ANIME, sort: POPULARITY_DESC, search:$searchKey) {
//         id
//         coverImage {
//           extraLarge
//           large
//           medium
//           color
//         }
//         format
//         isAdult
//         title {
//           romaji
//           english
//         }
//       }
//     }
//   }
// `

// // const useAnimeSearch = (searchKey:string)=>{
// //     const {data} =useQuery<GraphQLResponse, Error>(
// //      ["amimesearch",searchKey],
// //      async () => {
// //         return graphqlRequestClient.request(GET_SEARCH_ANIME)
// //      }
// //     )
// //     return("")
// // }
