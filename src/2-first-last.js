export const firstLast = (items) => {

  let first = items[0]
  let last = items[items.length - 1]

  if (items.length >= 2) {
    return `First: ${first}, Last: ${last}`
  }

  else if (items.length === 1) {
    return `Only item: ${first}`
  }

  else if (items.length === 0) {
    return `No items!`
  }
}
