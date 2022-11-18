// 1 a 4
const Circulo = {
  raio: parseInt(3),
  pi: parseInt(3.14),
  area: function() {
    console.log(`Raio: ${this.raio * this.pi * this.raio}`);
  },
  perimetro: function() {  // metodos: funcoes dentro de um obj
    console.log(`Perimetro: ${2 * this.pi * this.raio}`);
  },
};
Circulo.area()
Circulo.perimetro()



// 5
class CirculoClass {
  constructor(raio, Pi) {
    this.raio = parseInt(3);
    this.pi = parseInt(3.14);
  }
  print() {
    console.log(`Raio: ${this.raio}`)
    console.log(`Área: ${this.raio * this.raio * this.pi}`)
    console.log(`Perímetro: ${parseInt(2) * this.raio * this.pi}`)
  }
}
const circulo = new CirculoClass();
circulo.print();


// 6
class CirculoClass6 {
  #raio;
  constructor(raio, Pi) {
    this.raio = raio;
    this.pi = parseInt(3.14);
  }
  get raio() {
    return this.#raio;
  }
  set raio(valor) {
    this.#raio = valor || "?";
  }
  print(valor) {
    console.log(`Raio: ${this.raio}`)
    console.log(`Área: ${this.raio * this.raio * this.pi}`)
    console.log(`Perímetro: ${parseInt(2) * this.raio * this.pi}`)
  }
}
const circulo6 = new CirculoClass6(4);
circulo6.print();


// 7
class CirculoClass7 {
  #raio;
  constructor(raio, Pi) {
    this.raio = raio;
    this.pi = parseInt(3.14);
  }
  get raio() {
    return this.#raio;
  }
  set raio(valor) {
    if (valor < 0) {
      valor = -1 * valor;
    }
    this.#raio = valor;
  }
  print(valor) {
    console.log(`Raio: ${this.raio}`)
    console.log(`Área: ${this.raio * this.raio * this.pi}`)
    console.log(`Perímetro: ${parseInt(2) * this.raio * this.pi}`)
  }
}
const circulo7 = new CirculoClass7(-5);
circulo7.print();


// 8
class CirculoClass8 {
  #raio;
  constructor(raio, Pi) {
    this.raio = raio;
    this.pi = parseInt(3.14);
  }
  get raio() {
    return this.#raio;
  }
  set raio(valor) {
    if (valor < 0) {
      valor = -1 * valor;
    }
    this.#raio = valor;
  }
  print(valor) {
    const area = this.raio * this.raio * this.pi;
    const perimetro = parseInt(2) * this.raio * this.pi;
    var CirculoNovo = [this.raio, area, perimetro];
    if (CirculoNovo.length == 0) return "Não Definido";
    console.log(`Raio: ${this.raio}`)
    console.log(`Area: `+ CirculoNovo[CirculoNovo.length - 1])
    console.log(`Perímetro: `+ CirculoNovo[CirculoNovo.length-2])
  }
}
const circulo8 = new CirculoClass8(7);
circulo8.print();