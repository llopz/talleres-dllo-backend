async function findMaxAction(list: number[]) {
  if (list.length === 0) return null
  let max = list[0]
  for (const element of list) if (element > max) max = element
  return max
}

export default findMaxAction
