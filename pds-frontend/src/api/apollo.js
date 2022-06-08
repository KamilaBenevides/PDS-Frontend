import { ApolloClient, gql, InMemoryCache } from "@apollo/client"

export const TOKEN_KEY = "__ppgi_token__";

export const getAuthenticationToken = () => localStorage.getItem(TOKEN_KEY);

export const client = new ApolloClient({
  uri: "https://back-pds.herokuapp.com/",
  // uri: "https://pds-apollo.herokuapp.com/",
  cache: new InMemoryCache()
})

export default client;
