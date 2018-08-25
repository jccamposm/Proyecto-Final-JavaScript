var objPantalla = document.getElementById('display')

var Calculadora = {
  init: function () {
    var button1 = document.getElementById('1')
    var button2 = document.getElementById('2')
    var button3 = document.getElementById('3')
    var button4 = document.getElementById('4')
    var button5 = document.getElementById('5')
    var button6 = document.getElementById('6')
    var button7 = document.getElementById('7')
    var button8 = document.getElementById('8')
    var button9 = document.getElementById('9')
    var button0 = document.getElementById('0')

    button1.addEventListener('click', this.MostrarNumero("1"))
    button2.addEventListener('click', this.MostrarNumero("2"))
    button3.addEventListener('click', MostrarNumero("3"))
    button4.addEventListener('click', MostrarNumero("4"))
    button5.addEventListener('click', MostrarNumero("5"))
    button6.addEventListener('click', MostrarNumero("6"))
    button7.addEventListener('click', MostrarNumero("7"))
    button8.addEventListener('click', MostrarNumero("8"))
    button9.addEventListener('click', MostrarNumero("9"))
    button0.addEventListener('click', MostrarNumero("0"))

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
  MostrarNumero: function(numDisp) {
    alert(numDisp)
    if (objPantalla.innerHTML == "0") {
      objPantalla.innerHTML = numDisp
    } else {
      if (objPantalla.innerHTML.length < 8) {
          objPantalla.innerHTML = objPantalla.innerHTML + numDisp
      } else {
          alert('Excede la cantidad permitida de caracteres')
      }
    }
  },
  capturaTeclado: function (event) {
    var tecla = event.which || event.keyCode;
    // alert(tecla);
    switch (tecla) {
      case 48:
        button0.active;
        break;
      case 49:
        this.MostrarNumero("1");
        break;
      default:
        alert(tecla);
    }
  }
}

Calculadora.init();
document.onkeypress = Calculadora.capturaTeclado;
