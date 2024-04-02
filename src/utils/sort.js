const sortAlphabetically = (hotels) => {
  return hotels.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  })
}

const sortByPrice = (hotels) => {
  return hotels.sort((a, b) => {
    return parseFloat(b.price.amount) - parseFloat(a.price.amount)
  })
}

const sortByRating = (hotels) => {
  return hotels.sort((a, b) => {
    return Number(b.rating) - Number(a.rating)
  })
}

export { sortAlphabetically, sortByPrice, sortByRating }