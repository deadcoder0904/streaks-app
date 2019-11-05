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
  const callFam = await photon.habits.create({
    data: {
      name: 'Call Family',
      streak: 63,
    },
  })
  const swimming = await photon.habits.create({
    data: {
      name: 'Swimming',
      streak: 7,
    },
  })
  const tennis = await photon.habits.create({
    data: {
      name: 'Tennis',
      streak: 18,
    },
  })
  const noSmoking = await photon.habits.create({
    data: {
      name: 'No Smoking',
      streak: 100,
    },
  })
  const codeEveryday = await photon.habits.create({
    data: {
      name: 'Code Everyday',
      streak: 309,
    },
  })
  console.log({
    workout,
    running,
    cycling,
    meditation,
    callFam,
    tennis,
    noSmoking,
    codeEveryday,
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
