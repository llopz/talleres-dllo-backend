export default function desglosarStringAction(str: string, strcond: string): number | undefined {
  if (str === undefined || strcond === undefined) return undefined
  if (str === "") return 0

  let busq: string[] = []
  if (strcond === "vocales") {
    busq = ["a", "e", "i", "o", "u"]
  } else if (strcond === "consonantes") {
    busq = [
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "ñ",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]
  } else {
    return undefined
  }

  return str
    .toLowerCase()
    .split("")
    .filter(char => busq.includes(char)).length
}
