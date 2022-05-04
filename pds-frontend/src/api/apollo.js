import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://google.com",
  cache: new InMemoryCache()
})

