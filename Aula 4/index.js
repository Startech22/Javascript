const albuns = [
    {nome: "Mais", cantor: "Marisa monte", ano: 1991, nota: 8.5},
    {nome: "A tempestade", cantor: "Legião Urbana", ano: 1996, nota: 9.5},
    {nome: "Domingo", cantor: "Titãs", ano: 1995, nota: 7.5},
    {nome: "Ouro de Minas", cantor: "Roupa Nova", ano: 2001, nota: 8},
    {nome: "Como estão vocês", cantor: "Titãs", ano: 2003, nota: 7},
    {nome: "Troco Likes", cantor: "Thiago Iorc", ano: 2015, nota: 4.5},
    {nome: "Dois", cantor: "Legião Urbana", ano: 1986, nota: 10},
    {nome: "Radiola", cantor: "Skank", ano: 2004, nota: 6.5},
    {nome: "Roupa acústico", cantor: "Roupa Nova", ano: 2004, nota: 9},
    {nome: "Umbilical", cantor: "Thiago Iorc", ano: 2011, nota: 3.5},
    {nome: "Barulhinho bom", cantor: "Marisa monte", ano: 1996, nota: 7.5}
];

const cantores = [
    {nome: "Vinícius de Moraes", estilo: "MPB"},
    {nome: "Rita Lee", estilo: "Rock"},
    {nome: "Marisa monte", estilo: "MPB"},
    {nome: "Legião Urbana", estilo: "Rock"},
    {nome: "Titãs", estilo: "Rock"},
    {nome: "Roupa Nova", estilo: "Pop rock"},
    {nome: "Thiago Iorc", estilo: "Nova MPB"},
    {nome: "Skank", estilo: "Pop rock"}
];

// 1
const albunsMarisa = albuns
    .filter(a => a.cantor === "Marisa monte")
    .map(a => ({nome: a.nome, ano: a.ano}));
console.log(albunsMarisa);

// 2
let cantoresEAlbuns = albuns.flatMap(a => [a.cantor, a.nome]);
console.log(cantoresEAlbuns);


// 3
const discosAntigos = albuns
    .filter(a => a.ano < 2005);
const somaNotas = discosAntigos.reduce((soma, album) => soma += album.nota, 0);
const mediaNotas = somaNotas / discosAntigos.length;
console.log(`Média das notas: ${mediaNotas.toFixed(2)}`);
console.log("ATIVIDADE 4 e 5");
const cantoresUnicos = albuns.reduce((c, a) => {
    if (!c[a.cantor]) c[a.cantor] = 0;
    c[a.cantor]++;
    return c;
}, {});


// 4
console.log(Object.keys(cantoresUnicos)); 
const cantoresAgrupados = cantores.reduce((ca, c) => {
    ca[c.nome] = c;
    return ca;
}, {});
albuns.forEach(a => a.cantor = cantoresAgrupados[a.cantor]);
console.log(albuns);


// 5
console.log(cantoresUnicos); 


// 6
function justDate(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
console.log(`date:${justDate(new Date())}`);


// 7
function before(date1, date2, inclusive = false) {
    if (inclusive) {
        return date1 <= date2;
    }
    return date1 < date2;
}
console.log(`before:${before(new Date(2020, 1, 1), new Date(2020, 1, 2))}`);
function after(date1, date2, inclusive = false) {
    if (inclusive) {
        return date1 >= date2;
    }
    return date1 > date2;
}   
console.log(`after:${after(new Date(2020, 1, 1), new Date(2020, 1, 2))}`);


//8
function between(date, date1, date2, {inclusiveStart = false, inclusiveEnd = false} = {}) {
    if (inclusiveStart && inclusiveEnd) {
        return date >= date1 && date <= date2;
    }
    if (inclusiveStart) {
        return date >= date1 && date < date2;
    }
    if (inclusiveEnd) {
        return date > date1 && date <= date2;
    }
    return date > date1 && date < date2;
}
console.log(`between:${between(new Date(2020, 1, 2), new Date(2020, 1, 1), new Date(2020, 1, 3))}`);

// 9
function listInterval(date, n, interval){
    let list = [];
    for (let i = 0; i < n; i++) {
        list.push(new Date(date));
        date = interval(date);
    }
    return list;    
}
console.log(`listInterval:${listInterval(new Date(2020, 1, 1), 3, d => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1))}`);


// 10
const albunsOrdenados = [...albuns]
   .sort((a, b) => a.ano - b.ano);
console.log(albunsOrdenados);


// 11
let pagina = paginador(albuns, 3);
console.log("pagina:"+JSON.stringify(pagina(1)));
function paginador(lista, tamanhoPagina = 10) {
    return function(nrPagina = 0) {
        const inicio = nrPagina * tamanhoPagina;
        const fim = (nrPagina+1) * tamanhoPagina;
        return lista.slice(inicio, fim);
    }
}

// 12
let avg = media(albuns, "nota");
console.log(`avg:${avg}`);
let avg2 = media([1,2,3,4,5]);
console.log(`avg2:${avg2}`);
function media(lista, propriedade) {
    if (propriedade) {
        return lista.reduce((soma, item) => soma += item[propriedade], 0) / lista.length;
    }
    return lista.reduce((soma, item) => soma += item, 0) / lista.length;
}
