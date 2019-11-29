const {ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
  }
  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  #pontos de entrada para a API GraphQl, tendo varias consultas, entrando dentro dos grafos
  type Query {
    ola: String
    horaAtual: Date
    usuarioLogado: User
    produtoEmDestaque: Produto
  }
`

const resolvers = {
  User: {
    salary(usuario){
      return usuario.salary_real
    }
  },
  

  Query: {
    ola(){
      return 'Bom dia!'
    },
    horaAtual() {
      return new Date
    },
    usuarioLogado() {
      return {
        id: 1,
        name: 'Yuri',
        email: 'yuri@incca.com',
        age: 23,
        salary_real: 123.12,
        vip: true,
      }
    },
    produtoEmDestaque() {
      return{
        nome: 'Celular iphone',
        preco: 10.569,
        desconto: 0.15,
      }
    }
  }

}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})