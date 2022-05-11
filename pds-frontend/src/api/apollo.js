import { ApolloClient, gql, InMemoryCache } from "@apollo/client"



export const client = new ApolloClient({
  uri: "https://pds-apollo.herokuapp.com/",
  cache: new InMemoryCache()
})

export default client;
