var objPantalla = document.getElementById('display')  //Pantalla de la Calculadora
var Operando1, Operando2, Resultado  //Variables de Operación
var Suma, Resta, Mult, Divi  //Operaciones Matemáticas a realizar


var Calculadora = {
  //Función que inicializa todas las funciones de la Calculadora
  init: function () {
    Operando1 = 0;
    Operando2 = 0;
    Resultado = 0;
    //Banderas para determinar que operación se esta realizando
    Suma = false;
    Resta = false;
    Mult = false;
    Divi = false;

    //Tecla Numerica 1
    var button1 = document.getElementById('1')
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

    //Tecla Numerica 2
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

    //Tecla Numerica 3
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

    //Tecla Numerica 4
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

    //Tecla Numerica 5
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

    //Tecla Numerica 6
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

    //Tecla Numerica 7
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

    //Tecla Numerica 8
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

    //Tecla Numerica 9
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

    //Tecla Numerica 0
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

    //Tecla Punto
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

    //Tecla Borrado ON
    var buttonON = document.getElementById('on')
    buttonON.addEventListener('click', function() {
      objPantalla.innerHTML = "0";
      Suma = false;
      Resta = false;
      Mult = false;
      Divi = false;
      Operando1 = 0;
      Operando2 = 0;
    })

    //Tecla Signo
    var buttonSign = document.getElementById('sign')
    buttonSign.addEventListener('click', function() {
      if (objPantalla.innerHTML.indexOf("-") < 0) {
          objPantalla.innerHTML = "-" + objPantalla.innerHTML
      } else {
        var CadenaValor = objPantalla.innerHTML
        objPantalla.innerHTML = CadenaValor.replace("-","")
      }
    })

    //Tecla Suma
    var buttonSuma = document.getElementById('mas')
    buttonSuma.addEventListener('click', function() {
      if (objPantalla.innerHTML != "0") {
        if (Operando1 == 0) {
          Operando1 = Number(objPantalla.innerHTML)
        }
        //buttonSuma.style = "filter: sepia(100%)"
        Suma = true;
        Resta = false;
        Mult = false;
        Divi = false;
        objPantalla.innerHTML = "";
      }
    })

    //Tecla Resta
    var buttonResta = document.getElementById('menos')
    buttonResta.addEventListener('click', function() {
      if (objPantalla.innerHTML != "0") {
        if (Operando1 == 0) {
          Operando1 = Number(objPantalla.innerHTML)
        }
        Suma = false;
        Resta = true;
        Mult = false;
        Divi = false;
        objPantalla.innerHTML = "";
      }
    })

    //Tecla Multiplica
    var buttonMultiplica = document.getElementById('por')
    buttonMultiplica.addEventListener('click', function() {
      if (objPantalla.innerHTML != "0") {
        if (Operando1 == 0) {
          Operando1 = Number(objPantalla.innerHTML)
        }
        Suma = false;
        Resta = false;
        Mult = true;
        Divi = false;
        objPantalla.innerHTML = "";
      }
    })

    //Tecla Divide
    var buttonDivide = document.getElementById('dividido')
    buttonDivide.addEventListener('click', function() {
      if (objPantalla.innerHTML != "0") {
        if (Operando1 == 0) {
          Operando1 = Number(objPantalla.innerHTML)
        }
        Suma = false;
        Resta = false;
        Mult = false;
        Divi = true;
        objPantalla.innerHTML = "";
      }
    })

    //Tecla Igual
    var buttonResult = document.getElementById('igual')
    buttonResult.addEventListener('click', function () {
      if (objPantalla.innerHTML != "") {
        if (Operando1 != 0) {
          Operando2 = Number(objPantalla.innerHTML)
          if (Suma == true) {
            Resultado = Operando1 + Operando2;
          } else {
            if (Resta == true) {
              Resultado = Operando1 - Operando2;
            } else {
              if (Mult == true) {
                Resultado = Operando1 * Operando2;
              } else {
                Resultado = Operando1 / Operando2;
              }
            }
          }
        }else {
          alert("No ha digitado la cifra del primer operando")
        }
      } else {
        alert("Debe digitar el segundo operando para la operación")
      }
      var ResPant
      ResPant = Resultado.toString()
      objPantalla.innerHTML = ResPant.substring(0,8)
      Suma = false;
      Resta = false;
      Mult = false;
      Divi = false;
      Operando1 = Number(objPantalla.innerHTML);
      Operando2 = 0;
    })
  },

  //Función para capturar los eventos del teclado. Se repite codigo dependiendo de la tecla.
  capturaTeclado: function (event) {
    var tecla = event.which || event.keyCode;
    // alert(tecla);
    switch (tecla) {
      case 48: //Tecla 0
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
      case 49: //Tecla 1
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
      case 50: //Tecla 2
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
      case 51: //Tecla 3
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
      case 52: //Tecla 4
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
      case 53: //Tecla 5
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
      case 54: //Tecla 6
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
      case 55: //Tecla 7
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
      case 56: //Tecla 8
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
      case 57: //Tecla 9
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
      case 8: //Tecla 0
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
      case 46: //Tecla Punto
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
      case 27: //Tecla Borrado
        objPantalla.innerHTML = "0"
        Suma = false;
        Resta = false;
        Mult = false;
        Divi = false;
        Operando1 = 0;
        Operando2 = 0;
        break;
      case 45: //Tecla Resta. Oprimir solo el signo menos
        if (objPantalla.innerHTML != "0") {
          if (Operando1 == 0) {
            Operando1 = Number(objPantalla.innerHTML)
          }
          Suma = false;
          Resta = true;
          Mult = false;
          Divi = false;
          objPantalla.innerHTML = "";
        }
        break;
      case 43: //Tecla Suma
        if (objPantalla.innerHTML != "0") {
          if (Operando1 == 0) {
            Operando1 = Number(objPantalla.innerHTML)
          }
          Suma = true;
          Resta = false;
          Mult = false;
          Divi = false;
          objPantalla.innerHTML = "";
        }
        break;
      case 42: // Tecla Multiplicación (asterisco)
        if (objPantalla.innerHTML != "0") {
          if (Operando1 == 0) {
            Operando1 = Number(objPantalla.innerHTML)
          }
          Suma = false;
          Resta = false;
          Mult = true;
          Divi = false;
          objPantalla.innerHTML = "";
        }
        break;
      case 47: //Tecla División (Slash arriba del número 7)
          if (objPantalla.innerHTML != "0") {
            if (Operando1 == 0) {
              Operando1 = Number(objPantalla.innerHTML)
            }
            Suma = false;
            Resta = false;
            Mult = false;
            Divi = true;
            objPantalla.innerHTML = "";
          }
          break;
      case 95: //Tecla para cambiar Signo. Se valida el Shift y el menos ya que quedaria igual que ASCII de la resta
        if (objPantalla.innerHTML.indexOf("-") < 0) {
            objPantalla.innerHTML = "-" + objPantalla.innerHTML
        } else {
          var CadenaValor = objPantalla.innerHTML
          objPantalla.innerHTML = CadenaValor.replace("-","")
        }
        break;
      case 13: //Resultado (Enter)
        if (objPantalla.innerHTML != "") {
          if (Operando1 != 0) {
            Operando2 = Number(objPantalla.innerHTML)
            if (Suma == true) {
              Resultado = Operando1 + Operando2;
            } else {
              if (Resta == true) {
                Resultado = Operando1 - Operando2;
              } else {
                if (Mult == true) {
                  Resultado = Operando1 * Operando2;
                } else {
                  Resultado = Operando1 / Operando2;
                }
              }
            }
          }else {
            alert("No ha digitado la cifra del primer operando")
          }
        } else {
          alert("Debe digitar el segundo operando para la operación")
        }
        var ResPant
        ResPant = Resultado.toString()
        objPantalla.innerHTML = ResPant.substring(0,8)
        Suma = false;
        Resta = false;
        Mult = false;
        Divi = false;
        Operando1 = Number(objPantalla.innerHTML);
        Operando2 = 0;
        break;
      default:
        alert(tecla);
    }
  },

  
  // SumaOp: function (Op1, Op2) {
  //   var Canti
  //   Canti = Op1 + Op2;
  //   return Canti;
  // }
}

Calculadora.init();
document.onkeypress = Calculadora.capturaTeclado;
