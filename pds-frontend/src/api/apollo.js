import { ApolloClient,
   gql, 
   InMemoryCache, 
   createHttpLink } from "@apollo/client"
import { setContext } from '@apollo/client/link/context';

export const TOKEN_KEY = "__ppgi_token__";

export const getAuthenticationToken = () => localStorage.getItem(TOKEN_KEY);

const link = createHttpLink({
  uri: "https://back-pds.herokuapp.com/",
  // credentials: 'same-origin'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getAuthenticationToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache()
})

export default client;
