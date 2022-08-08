function NumeroDoInput() {
    let tiposNumericos = [
        Decimal,
        Binario,
        Octal,
        Hexa
    ]
    console.log(tiposNumericos)

    var numeroDoInput = document.getElementById("valor").value;
    let tipoDoInput = document.getElementById("tipo");
    let tipoDoInputValue = tipoDoInput.selectedIndex
    /*
    selectedIndex-0: Decimal
    selectedIndex-1: Binario
    selectedIndex-2: Octodecimal
    selectedIndex-3: Hexadecimal
    */
    tiposNumericos.splice(tipoDoInputValue, 1)
    for (i = 0; i < 3; i++) {
        console.log(tiposNumericos[i](numeroDoInput))
        let resposta = document.getElementById(i)
        resposta.innerHTML = tiposNumericos[i](numeroDoInput)
    }
    console.log("tipo de input: " + tipoDoInputValue)
}

function Decimal(numeroDecimal) {
    let tipoDoInput = document.getElementById("tipo");
    let tipoDoInputValue = tipoDoInput.selectedIndex
    let decimal
    switch (tipoDoInputValue) {
        case 1:
            decimal = BinarioDecimal(numeroDecimal);
            break;
        case 2:
            decimal = OctalDecimal(numeroDecimal);
            break;
        case 3:
            decimal = Hexadecimal(numeroDecimal)
            break;
        default:
            decimal = "A converção decimal é: " + Decimal
            console.log(Decimal)
            Document.getElementById(0).innerHTML = decimal
            break;
    };

    return decimal;
}

function Binario(numeroDecimal) {
    let binarioString
    let binarioArray = []
    while (numeroDecimal > 0) {
        7 * 0, 17

        binarioArray.unshift(numeroDecimal % 2)
        numeroDecimal = numeroDecimal / 2
        numeroDecimal = Math.trunc(numeroDecimal)
    }
    binarioString = "A converção de Binarios é: " + binarioArray
    while (binarioString.includes(",") == true) {
        binarioString = binarioString.replace(",", "")
    }
    console.log(binarioString)
    return binarioString
}
function Octal(numeroDecimal) {
    let octalString
    let octalArray = []
    while (numeroDecimal > 0) {

        octalArray.unshift(numeroDecimal % 8)
        numeroDecimal = numeroDecimal / 8
        numeroDecimal = Math.trunc(numeroDecimal)
    }
    octalString = "A converção de octal é: " + octalArray
    while (octalString.includes(",") == true) {
        octalString = octalString.replace(",", "")
    }
    console.log(octalString)
    return octalString
}
function Hexa(numeroDecimal) {
    let hexaString
    let hexaArray = []
    while (numeroDecimal > 0) {
        if (numeroDecimal % 16 == 10) {
            hexaArray.unshift('A')
            numeroDecimal = numeroDecimal / 16
            numeroDecimal = Math.trunc(numeroDecimal)
        } else
            if (numeroDecimal % 16 == 11) {
                hexaArray.unshift('B')
                numeroDecimal = numeroDecimal / 16
                numeroDecimal = Math.trunc(numeroDecimal)
            } else
                if (numeroDecimal % 16 == 12) {
                    hexaArray.unshift('C')
                    numeroDecimal = numeroDecimal / 16
                    numeroDecimal = Math.trunc(numeroDecimal)
                } else
                    if (numeroDecimal % 16 == 13) {
                        hexaArray.unshift('D')
                        numeroDecimal = numeroDecimal / 16
                        numeroDecimal = Math.trunc(numeroDecimal)
                    } else
                        if (numeroDecimal % 16 == 14) {
                            hexaArray.unshift('E')
                            numeroDecimal = numeroDecimal / 16
                            numeroDecimal = Math.trunc(numeroDecimal)
                        } else
                            if (numeroDecimal % 16 == 15) {
                                hexaArray.unshift('F')
                                numeroDecimal = numeroDecimal / 16
                                numeroDecimal = Math.trunc(numeroDecimal)
                            } else {
                                hexaArray.unshift(numeroDecimal % 16)
                                numeroDecimal = numeroDecimal / 16
                                numeroDecimal = Math.trunc(numeroDecimal)
                            }
    }
    hexaString = "A converção de hexa é: " + hexaArray
    while (hexaString.includes(",") == true) {
        hexaString = hexaString.replace(",", "")
    }
    console.log(hexaString)
    return hexaString
}

function BinarioDecimal(numeroBinario) {
    let binarioString = "";
    let numeroDecimal = 0;
    let stringBinario = numeroBinario.toString();
    numeroBinarioArray = stringBinario.split('');
    let i = numeroBinarioArray.length;
    let e = 0;
    while (i > 0) {
        numeroDecimal = numeroDecimal + (parseInt(numeroBinarioArray[i - 1]) * (2 ** e));
        i--;
        e++;
    }
    numeroDoInput = numeroDecimal
    binarioString = "A converção  b decimal é: " + numeroDecimal;
    console.log(binarioString);
    // Document.getElementById(0).innerHTML = binarioString;
    return binarioString;
}
function OctalDecimal(numeroOctal) {
    let octalString = "";
    let numeroDecimal = 0;
    let stringOctal = numeroOctal.toString();
    let numeroOctalArray = stringOctal.split('');
    let i = numeroOctalArray.length;
    let e = 0;
    while (i > 0) {
        numeroDecimal = numeroDecimal + (parseInt(numeroOctalArray[i - 1]) * (8 ** e));
        i--;
        e++;
    }
    numeroDoInput = numeroDecimal
    octalString = "A converção é o decimal: " + numeroDecimal;
    console.log(octalString);
    //  Document.getElementById(0).innerHTML = octalString;
    return octalString;
}
function Hexadecimal(numeroHexadecimal) {
    let hexaString = parseInt(numeroHexadecimal, 16)
    numeroDoInput = hexaString
    hexaString = "A converção é h decimal: " + hexaString
    console.log(hexaString);
    // Document.getElementById(0).innerHTML = hexaString;
    return hexaString;
}

