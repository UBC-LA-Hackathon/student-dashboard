const flatten = arr => arr.reduce((acc, cur) =>
  Array.isArray(cur)
    ? [...acc, ...cur]
    : [...acc, cur]
, [])

module.exports = {
  flatten
}
