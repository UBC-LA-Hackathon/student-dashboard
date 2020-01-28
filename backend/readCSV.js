const neatCSV = require('neat-csv')
const fs = require('fs').promises

const readCSV = async path => {
  const file = await fs.readFile(path)
  const csv = await neatCSV(file)
  return csv
}

module.exports = readCSV
