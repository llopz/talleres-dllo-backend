async function sumAction(list: number[]) {
  if (list.length === 0) return 0
  let suma = 0
  for (let element of list) {
    suma += element
  }
  return suma
}

export default sumAction
