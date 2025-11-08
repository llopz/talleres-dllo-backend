async function resolvedorAction(a: number, b: number, c: number, signo: boolean) {
  const x = signo
    ? (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
    : (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)

  return x
}

export default resolvedorAction
