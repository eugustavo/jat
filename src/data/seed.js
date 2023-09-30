const fs = require("fs")
const path = require("path")
const { faker } = require("@faker-js/faker")

const statuses = ['in progress', 'win', 'fail']
const priorities = ['low', 'medium', 'high']

const tasks = Array.from({ length: 100 }, () => ({
  id: faker.datatype.uuid(),
  enterprise: faker.company.name(),
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  status: faker.helpers.arrayElement(statuses),
  priority: faker.helpers.arrayElement(priorities),
}))

fs.writeFileSync(
  path.join(__dirname, "tasks.json"),
  JSON.stringify(tasks, null, 2)
)

console.log("✅ Tasks data generated.")