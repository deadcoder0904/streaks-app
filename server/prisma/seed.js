const { Photon } = require('@generated/photon')
const photon = new Photon()

async function main() {
  const workout = await photon.habits.create({
    data: {
      name: 'Workout',
      streak: 49,
    },
  })
  const running = await photon.habits.create({
    data: {
      name: 'Running',
      streak: 245,
    },
  })
  const cycling = await photon.habits.create({
    data: {
      name: 'Cycling',
      streak: 77,
    },
  })
  const meditation = await photon.habits.create({
    data: {
      name: 'Meditation',
      streak: 60,
    },
  })
  console.log({
    workout,
    running,
    cycling,
    meditation,
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
