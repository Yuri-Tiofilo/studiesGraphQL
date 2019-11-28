const users = [
  {id: 1, name: 'Yuri', email: 'yuri@gmail.com'},
  {id: 2, name: 'Fabio', email: 'yuri@gmail.com'},
]

module.exports ={
  Query : {
    users: () => users,
    user: () => users[0],
  },


  Mutation: {

    createUser: () => users[0],
  }, 
}