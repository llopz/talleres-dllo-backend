function findMax(list) {
  if (list.length === 0) return null

  let max = list[0]

  for (let element of list) {
    if (element > max) {
      max = element
    }
  }
  return max
}

function findMin(list) {
  if (list.length === 0) return null

  let min = list[0]

  for (let element of list) {
    if (element < min) {
      min = element
    }
  }
  return min
}

console.log(findMax([3, 17, -1, 4, -19]))

function includes(list, num) {
  if (list.length === 0) return false

  for (let element of list) {
    if (element === num) {
      return true
    }
  }

  return false
}

console.log(includes([3, 17, -1, 4, -19], 2))
console.log(includes([3, 17, -1, 4, -19], 4))

function sum(list) {
  if (list.length === 0) return 0

  let suma = 0

  for (let element of list) {
    suma += element
  }

  return suma
}

console.log(sum([3, 17, -1, 4, -19]))

function missingNumbers(list) {
  if (list.length === 0) return []

  let max = findMax(list)
  let min = findMin(list)
  let missing = []

  for (let num = min; num <= max; num++) {
    if (includes(list, num) === false) {
      missing.push(num)
    }
  }

  return missing
}

console.log(missingNumbers([7, 2, 4, 6, 3, 9]))
