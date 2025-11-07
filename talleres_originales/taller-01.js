function convertidorTemp(tempc) {
  let tempf

  tempf = tempc * (9 / 5) + 32

  return tempf
}

console.log(convertidorTemp(-40))

function resolvedor(a, b, c, signo) {
  let x

  if (signo) {
    x = (-b + (b ** 2 - 4 * a * c) ** (1 / 2)) / (2 * a)
  } else {
    x = (-b - (b ** 2 - 4 * a * c) ** (1 / 2)) / (2 * a)
  }

  return x
}

console.log(resolvedor(1, 5, 4, true))

function mejorParidad(x) {
  let paridad

  if ((x %= 2) === 0) {
    paridad = true
  } else {
    paridad = false
  }

  return paridad
}

console.log("el numero es par? " + mejorParidad(2))

function peorParidad(x) {
  let paridad

  if (x === 0) {
    paridad = true
  } else if (x === 1) {
    paridad = true
    while (x > 0) {
      if (paridad === true) {
        paridad = false
      } else if (paridad === false) {
        paridad = true
      }
      x -= 1
    }
  } else if (x === 2) {
    paridad = true
    while (x > 0) {
      if (paridad === true) {
        paridad = false
      } else if (paridad === false) {
        paridad = true
      }
      x -= 1
    }
  } else if (x === 3) {
    paridad = true
    while (x > 0) {
      if (paridad === true) {
        paridad = false
      } else if (paridad === false) {
        paridad = true
      }
      x -= 1
    }
  } else if (x === 4) {
    paridad = true
    while (x > 0) {
      if (paridad === true) {
        paridad = false
      } else if (paridad === false) {
        paridad = true
      }
      x -= 1
    }
  } else if (x === 5) {
    paridad = true
    while (x > 0) {
      if (paridad === true) {
        paridad = false
      } else if (paridad === false) {
        paridad = true
      }
      x -= 1
    }
  } else if (x === 6) {
    paridad = true
    while (x > 0) {
      if (paridad === true) {
        paridad = false
      } else if (paridad === false) {
        paridad = true
      }
      x -= 1
    }
  } else if (x === 7) {
    paridad = true
    while (x > 0) {
      if (paridad === true) {
        paridad = false
      } else if (paridad === false) {
        paridad = true
      }
      x -= 1
    }
  } else if (x === 8) {
    paridad = true
    while (x > 0) {
      if (paridad === true) {
        paridad = false
      } else if (paridad === false) {
        paridad = true
      }
      x -= 1
    }
  } else if (x === 9) {
    paridad = true
    while (x > 0) {
      if (paridad === true) {
        paridad = false
      } else if (paridad === false) {
        paridad = true
      }
      x -= 1
    }
  } else if (x === 10) {
    paridad = true
    while (x > 0) {
      if (paridad === true) {
        paridad = false
      } else if (paridad === false) {
        paridad = true
      }
      x -= 1
    }
  }

  return paridad
}

console.log("el numero es par? " + peorParidad(2))
