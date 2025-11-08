async function includesAction(list: number[], num: number) {
  if (list.length === 0) return false
  for (const element of list) if (element === num) return true
  return false
}

export default includesAction
