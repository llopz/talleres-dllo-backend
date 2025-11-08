async function peorParidadAction(x: number) {
  let paridad = true
  while (x > 0) {
    paridad = !paridad
    x -= 1
  }
  return paridad
}

export default peorParidadAction
