async function findMinAction(list: number[]) {
  if (list.length === 0) return null
  let min = list[0]
  for (const element of list) if (element < min) min = element
  return min
}

export default findMinAction
