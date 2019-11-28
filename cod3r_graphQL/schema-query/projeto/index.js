const {ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
  #pontos de entrada para a API GraphQl, tendo varias consultas, entrando dentro dos grafos
  type Query {
    ola: String
  }
`

const resolvers = {}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})