function reduceRoman(acum: number, actual: number, i: number, arr: number[]): number {
  const siguiente = arr[i + 1]
  return acum + (siguiente && actual < siguiente ? -actual : actual)
}

export default function conversionRomanaAction(numRomano: string): number {
  const romanMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  return numRomano
    .split("")
    .map(letra => romanMap[letra])
    .reduce(reduceRoman)
}
