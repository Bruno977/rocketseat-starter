"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calculos = /*#__PURE__*/function () {
  function Calculos() {
    _classCallCheck(this, Calculos);
  }

  _createClass(Calculos, [{
    key: "somaNumeros",
    value: function somaNumeros(primeiro, segundo) {
      var soma = primeiro + segundo;
      console.log(soma);
    }
  }]);

  return Calculos;
}();

var minhaFuncao = new Calculos();

document.getElementById('botaoSoma').onclick = function () {
  minhaFuncao.somaNumeros(Number(entrada.value), Number(entrada2.value));
};
