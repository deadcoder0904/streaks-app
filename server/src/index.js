const { GraphQLServer } = require('graphql-yoga')
const {
  makeSchema,
  objectType,
  queryType,
  mutationType,
  idArg,
  stringArg,
} = require('nexus')
const { Photon } = require('@generated/photon')
const { nexusPrismaPlugin } = require('nexus-prisma')

const Habit = objectType({
  name: 'Habit',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.streak()
  },
})

const Query = queryType({
  definition(t) {
    t.crud.habit()

    t.list.field('habits', {
      type: 'Habit',
      resolve: (_, _args, ctx) => {
        return ctx.photon.habits.findMany()
      },
    })
  },
})

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneHabit({ alias: 'createHabit' })
    t.crud.deleteOneHabit({ alias: 'deleteHabit' })

    t.field('incrementStreak', {
      type: 'Habit',
      args: {
        name: stringArg(),
      },
      resolve: async (_, { name }, ctx) => {
        const habit = await ctx.photon.habits.findOne({
          where: {
            name,
          },
        })
        return ctx.photon.habits.update({
          data: {
            streak: habit.streak + 1,
          },
          where: {
            name,
          },
        })
      },
    })
  },
})

const photon = new Photon()

new GraphQLServer({
  schema: makeSchema({
    types: [Query, Mutation, Habit],
    plugins: [nexusPrismaPlugin()],
  }),
  context: { photon },
}).start(() =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/js/graphql#5-using-the-graphql-api`,
  ),
)

module.exports = { Habit }
