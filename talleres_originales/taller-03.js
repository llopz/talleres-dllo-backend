function desglosarString (str, strcond){
    
    if (str === undefined || strcond === undefined) return undefined
    if (str === "") return 0

    let busq = []
    if (strcond === "vocales"){
        busq = ["a", "e", "i", "o", "u"]
    }else if (strcond === "consonantes"){
        busq = ["b","c","d","f","g","h","j","k","l","m","n","ñ","p","q","r","s","t","v","w","x","y","z"]
    } else {
        return undefined
    }

    return str
        .toLowerCase()
        .split("")
        .filter(char => busq.includes(char))
        .length
    
}



function twoSum (listnum, num){
    if (listnum === undefined || num === undefined) return undefined
    if (listnum.length < 2) return []

    let numero = listnum.find(x => listnum.includes(num - x) && x !== num - x)
    if (numero === undefined){
        if(listnum.includes(num/2)){
            let list = listnum.filter(x => x === num/2)
            if (list.length > 1){
                return [listnum.indexOf(num/2), listnum.lastIndexOf(num/2)]
            } else {
                return []
            }
        }
    } else {
        return [listnum.indexOf(numero), listnum.indexOf(num - numero)]
    }
}



function reducefuntion (acum, actual, i, arr){
    let siguiente = arr[i + 1];
    return acum + (siguiente && actual < siguiente ? -actual : actual);
}

function conversionRomana(numRomano) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  return numRomano
    .split("")
    .map(letra => romanMap[letra])
    .reduce(reducefuntion)
}


function descomposicion (str){
    let palabras = str.split(",")
    let pal = palabras.shift()

    let partes = palabras.filter(x => palabras.includes(pal.replace(x, "")))
    return partes
}
