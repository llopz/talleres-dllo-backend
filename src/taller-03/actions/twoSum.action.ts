export default function twoSumAction(listnum: number[], num: number): number[] | undefined {
  if (listnum === undefined || num === undefined) return undefined
  if (listnum.length < 2) return []

  const numero = listnum.find(x => listnum.includes(num - x) && x !== num - x)
  if (numero === undefined) {
    if (listnum.includes(num / 2)) {
      const list = listnum.filter(x => x === num / 2)
      if (list.length > 1) {
        return [listnum.indexOf(num / 2), listnum.lastIndexOf(num / 2)]
      } else {
        return []
      }
    }
  } else {
    return [listnum.indexOf(numero), listnum.indexOf(num - numero)]
  }
}
