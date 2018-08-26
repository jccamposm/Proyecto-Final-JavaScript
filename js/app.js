var objPantalla = document.getElementById('display')

var button1 = document.getElementById('1')

var Calculadora = {
  init: function () {

    button1.addEventListener('click', function(){
      if (objPantalla.innerHTML == "0") {
        objPantalla.innerHTML = "1"
      } else {
        if (objPantalla.innerHTML.length < 8) {
            objPantalla.innerHTML = objPantalla.innerHTML + "1"
        } else {
            alert('Excede la cantidad permitida de caracteres')
        }
      }
    })

    var button2 = document.getElementById('2')
    button2.addEventListener('click', function(){
      if (objPantalla.innerHTML == "0") {
        objPantalla.innerHTML = "2"
      } else {
        if (objPantalla.innerHTML.length < 8) {
            objPantalla.innerHTML = objPantalla.innerHTML + "2"
        } else {
            alert('Excede la cantidad permitida de caracteres')
        }
      }
    })

    var button3 = document.getElementById('3')
    button3.addEventListener('click', function(){
      if (objPantalla.innerHTML == "0") {
        objPantalla.innerHTML = "3"
      } else {
        if (objPantalla.innerHTML.length < 8) {
            objPantalla.innerHTML = objPantalla.innerHTML + "3"
        } else {
            alert('Excede la cantidad permitida de caracteres')
        }
      }
    })

    var button4 = document.getElementById('4')
    button4.addEventListener('click', function(){
      if (objPantalla.innerHTML == "0") {
        objPantalla.innerHTML = "4"
      } else {
        if (objPantalla.innerHTML.length < 8) {
            objPantalla.innerHTML = objPantalla.innerHTML + "4"
        } else {
            alert('Excede la cantidad permitida de caracteres')
        }
      }
    })

    var button5 = document.getElementById('5')
    button5.addEventListener('click', function(){
      if (objPantalla.innerHTML == "0") {
        objPantalla.innerHTML = "5"
      } else {
        if (objPantalla.innerHTML.length < 8) {
            objPantalla.innerHTML = objPantalla.innerHTML + "5"
        } else {
            alert('Excede la cantidad permitida de caracteres')
        }
      }
    })

    var button6 = document.getElementById('6')
    button6.addEventListener('click', function(){
      if (objPantalla.innerHTML == "0") {
        objPantalla.innerHTML = "6"
      } else {
        if (objPantalla.innerHTML.length < 8) {
            objPantalla.innerHTML = objPantalla.innerHTML + "6"
        } else {
            alert('Excede la cantidad permitida de caracteres')
        }
      }
    })

    var button7 = document.getElementById('7')
    button7.addEventListener('click', function(){
      if (objPantalla.innerHTML == "0") {
        objPantalla.innerHTML = "7"
      } else {
        if (objPantalla.innerHTML.length < 8) {
            objPantalla.innerHTML = objPantalla.innerHTML + "7"
        } else {
            alert('Excede la cantidad permitida de caracteres')
        }
      }
    })

    var button8 = document.getElementById('8')
    button8.addEventListener('click', function(){
      if (objPantalla.innerHTML == "0") {
        objPantalla.innerHTML = "8"
      } else {
        if (objPantalla.innerHTML.length < 8) {
            objPantalla.innerHTML = objPantalla.innerHTML + "8"
        } else {
            alert('Excede la cantidad permitida de caracteres')
        }
      }
    })

    var button9 = document.getElementById('9')
    button9.addEventListener('click', function(){
      if (objPantalla.innerHTML == "0") {
        objPantalla.innerHTML = "9"
      } else {
        if (objPantalla.innerHTML.length < 8) {
            objPantalla.innerHTML = objPantalla.innerHTML + "9"
        } else {
            alert('Excede la cantidad permitida de caracteres')
        }
      }
    })

    var button0 = document.getElementById('0')
    button0.addEventListener('click', function(){
      if (objPantalla.innerHTML == "0") {
        objPantalla.innerHTML = "0"
      } else {
        if (objPantalla.innerHTML.length < 8) {
            objPantalla.innerHTML = objPantalla.innerHTML + "0"
        } else {
            alert('Excede la cantidad permitida de caracteres')
        }
      }
    })

    var buttonPunto = document.getElementById('punto')
    buttonPunto.addEventListener('click', function(){
      if (objPantalla.innerHTML == "0") {
        objPantalla.innerHTML = "0."
      } else {
        if (objPantalla.innerHTML.length < 8) {
            if (objPantalla.innerHTML.indexOf(".") < 0) {
                objPantalla.innerHTML = objPantalla.innerHTML + "."
            }
        } else {
            alert('Excede la cantidad permitida de caracteres')
        }
      }
    })

    var buttonON = document.getElementById('on')
    buttonON.addEventListener('click', function() {
      objPantalla.innerHTML = "0"
    })

    var buttonSign = document.getElementById('sign')
    buttonSign.addEventListener('click', function() {
      if (objPantalla.innerHTML.indexOf("-") < 0) {
          objPantalla.innerHTML = "-" + objPantalla.innerHTML
      } else {
        var CadenaValor = objPantalla.innerHTML
        objPantalla.innerHTML = CadenaValor.replace("-","")
      }
    })
  },
  capturaTeclado: function (event) {
    var tecla = event.which || event.keyCode;
    // alert(tecla);
    switch (tecla) {
      case 48:
        if (objPantalla.innerHTML == "0") {
          objPantalla.innerHTML = "0"
        } else {
          if (objPantalla.innerHTML.length < 8) {
              objPantalla.innerHTML = objPantalla.innerHTML + "0"
          } else {
              alert('Excede la cantidad permitida de caracteres')
          }
        }
        break;
      case 49:
        if (objPantalla.innerHTML == "0") {
          objPantalla.innerHTML = "1"
        } else {
          if (objPantalla.innerHTML.length < 8) {
              objPantalla.innerHTML = objPantalla.innerHTML + "1"
          } else {
              alert('Excede la cantidad permitida de caracteres')
          }
        }
        break;
      case 50:
        if (objPantalla.innerHTML == "0") {
          objPantalla.innerHTML = "2"
        } else {
          if (objPantalla.innerHTML.length < 8) {
              objPantalla.innerHTML = objPantalla.innerHTML + "2"
          } else {
              alert('Excede la cantidad permitida de caracteres')
          }
        }
        break;
      case 51:
        if (objPantalla.innerHTML == "0") {
          objPantalla.innerHTML = "3"
        } else {
          if (objPantalla.innerHTML.length < 8) {
              objPantalla.innerHTML = objPantalla.innerHTML + "3"
          } else {
              alert('Excede la cantidad permitida de caracteres')
          }
        }
        break;
      case 52:
          if (objPantalla.innerHTML == "0") {
            objPantalla.innerHTML = "4"
          } else {
            if (objPantalla.innerHTML.length < 8) {
                objPantalla.innerHTML = objPantalla.innerHTML + "4"
            } else {
                alert('Excede la cantidad permitida de caracteres')
            }
          }
          break;
      case 53:
        if (objPantalla.innerHTML == "0") {
          objPantalla.innerHTML = "5"
        } else {
          if (objPantalla.innerHTML.length < 8) {
              objPantalla.innerHTML = objPantalla.innerHTML + "5"
          } else {
              alert('Excede la cantidad permitida de caracteres')
          }
        }
        break;
      case 54:
        if (objPantalla.innerHTML == "0") {
          objPantalla.innerHTML = "6"
        } else {
          if (objPantalla.innerHTML.length < 8) {
              objPantalla.innerHTML = objPantalla.innerHTML + "6"
          } else {
              alert('Excede la cantidad permitida de caracteres')
          }
        }
        break;
      case 55:
        if (objPantalla.innerHTML == "0") {
          objPantalla.innerHTML = "7"
        } else {
          if (objPantalla.innerHTML.length < 8) {
              objPantalla.innerHTML = objPantalla.innerHTML + "7"
          } else {
              alert('Excede la cantidad permitida de caracteres')
          }
        }
        break;
      case 56:
        if (objPantalla.innerHTML == "0") {
          objPantalla.innerHTML = "8"
        } else {
          if (objPantalla.innerHTML.length < 8) {
              objPantalla.innerHTML = objPantalla.innerHTML + "8"
          } else {
              alert('Excede la cantidad permitida de caracteres')
          }
        }
        break;
      case 57:
        if (objPantalla.innerHTML == "0") {
          objPantalla.innerHTML = "9"
        } else {
          if (objPantalla.innerHTML.length < 8) {
              objPantalla.innerHTML = objPantalla.innerHTML + "9"
          } else {
              alert('Excede la cantidad permitida de caracteres')
          }
        }
        break;
      case 8:
        if (objPantalla.innerHTML == "0") {
          objPantalla.innerHTML = "0"
        } else {
          var longCad = objPantalla.innerHTML.length
          objPantalla.innerHTML = objPantalla.innerHTML.substring(0, longCad - 1)
          if (objPantalla.innerHTML == "") {
            objPantalla.innerHTML = "0"
          }
        }
        break;
      case 46:
        if (objPantalla.innerHTML == "0") {
          objPantalla.innerHTML = "0."
        } else {
          if (objPantalla.innerHTML.length < 8) {
              if (objPantalla.innerHTML.indexOf(".") < 0) {
                  objPantalla.innerHTML = objPantalla.innerHTML + "."
              }
          } else {
              alert('Excede la cantidad permitida de caracteres')
          }
        }
        break;
      case 27:
        objPantalla.innerHTML = "0"
        break;
      case 45:
        if (objPantalla.innerHTML.indexOf("-") < 0) {
            objPantalla.innerHTML = "-" + objPantalla.innerHTML
        } else {
          var CadenaValor = objPantalla.innerHTML
          objPantalla.innerHTML = CadenaValor.replace("-","")
        }
        break;
      default:
        alert(tecla);
    }
  }
}

Calculadora.init();
document.onkeypress = Calculadora.capturaTeclado;
