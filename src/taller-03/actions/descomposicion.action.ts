export default function descomposicionAction(str: string): string[] {
  const palabras = str.split(",")
  const pal = palabras.shift()

  const partes = palabras.filter(x => palabras.includes(pal!.replace(x, "")))
  return partes
}
