
const nome = "mika"
const idades = 27
const frase = `Meu nome é ${nome} e tenho ${idades} anos.`

console.log(frase)

//exercicio
//___________________________________________________________

let nome01 = "Eduardo S Lopez"
let cor = "Vinotinto"
let filme = "LA CASA DE PAPEL"
let time = "FEDERAÇÃO GAUCHA DE TAEKWONDO"

const frasse = `Hola! me llamo ${nome01} y mi color favorito es el ${cor}. Me gusta mucho estudiar en el SENAC e mi serie favorita es ${filme}. Ademas de eso mi equipo favorito es la ${time}`
// imprimi com `` 
console.log(frasse)
//------------------------------------------------------------

const nome02 = "vitor hugo"

console.log(time.length)

//___________________________________________________________

let comidaFavorita = "Arepa domino"

console.log(comidaFavorita.length)

//----------------------------------------------------------

const frassse = "OiEeeeEEEEeeE BOmMMMmm dIAaaaAAAaaaAAaaAA"

const fraseMinucusla = frassse.toLowerCase()

console.log(fraseMinucusla)

//__________________________________________________________

const frasssse = "OiEeeeEEEEeeE BOmMMMmm dIAaaaAAAaaaAAaaAA"

const fraseMinucuslaa = frasssse.toUpperCase()

console.log(fraseMinucuslaa)
 
//-----------------------------------------------------------

const frassssse = "  OiE BOm dIA  "

const fraseMinucuslaaa = frassssse.trim()

console.log(fraseMinucuslaaa)

//___________________________________________________________

const frasee = "hoje comi cenoura"
console.log(frasee.includes("cenoura"))
console.log(frasee.includes("batata"))

 //----------------------------------------------------------

let fraseee = "hoje comi cenoura, adoro cenoura"
const novaFrase = fraseee . replaceAll("cenoura","batata")

console.log(novaFrase)

//-----------------------------------------------------------

let core = ["azul", "verde"]
core.unshift("vermelho")
console.log(core)//[ 'vermelho', 'azul', 'verde' ]
 
//--------------------------------------------------------
let fruta = [" maça", " banama", " laranja"]
fruta.shift()
console.log(fruta) //[ ' banama', ' laranja' ]

//--------------------------------------------------------

let meuPeixes = [" palhaço", " mamderim", " esturjão"]
console.log(meuPeixes)

meuPeixes.pop()
console.log(meuPeixes) 

//----------------------------------------------------------

let letra = ["A", "B", "C", "D", "E", "F", "G", "H"]
//INDICES (i) 0    1    2    3    4    5    6    7
console.log(`A lista de letras completas: ${letra}`)

//   letra = ["A", "B", "D", "E", "F", "G", "H"]
//INDICES (i)  0    1    2    3    4    5    6   

letra.splice(2, 1)

console.log(`A listas de 1 letras ${letra}`) 
letra.splice(3, 2) //   letra = ["A", "B", "D", "G", "H",]

console.log(`A listas sem 2 letras: ${letra}`)
//-------------------------------------------------------------

//craiar baralho inicial
let deck = ["Pikachu", "Charmande", "Bulbasaur", "Pikachu", "Squirtle", "Meowth"]
//1. remover o repetido (índices 3)
//splice (3,1) remove 1 elemento consoderado o indices 3 
deck.splice(3, 1)
console.log(deck)

// 2. inserir o Snorlax entre 3 e 4 
// Podemos utiçizar o splaice para adicionar tmb... porem utilizando o 0 na sintaxe aqual, logo: 
// splice(i,n) ---> a partir na posiçaõ i retiro n elementos 
// quando usamos o 0 no lugar do n - sinalizamos que não estamos tirando nada... então ela adiciona 

// vamos aplicar 
deck.splice(3,0, "Snorlax")
console.log(deck)

// Adicionar a Eevee no lugar do Meowtrh
deck.splice(5,1, "Eevee")
console.log(deck)  

let fruta2 = ["maça", "banana"]
let legume = ["cenoura", "batata"]

let alimentos = fruta2.concat(legume)
console.log(alimentos)

// oprdenando do forma alfavetica

let frutas = [" Banana", " Maça", " Laranja"]
frutas.sort()
console.log(frutas)
// Saida :  ' Banana', ' Laranja', ' Maça' 
















