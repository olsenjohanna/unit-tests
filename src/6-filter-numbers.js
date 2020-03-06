export const filterNumbers = (array, largerThan) => {

  array.forEach((element, index) => {
    if (element > largerThan) {
      let elementsToRemove = array.length - index
      array.splice(index, elementsToRemove)
    }
  });

  return array

}
