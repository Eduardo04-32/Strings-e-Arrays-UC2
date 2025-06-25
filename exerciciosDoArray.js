console.log("EXERCICIO N°1⬇️")

const raçaDeCachorro = [ "Bulldog Francês", "Pit bull", "São Bernardo", "Rottweiler", "Pug"]
let raçaFavorita = raçaDeCachorro[1]

console.log(`a primeira raça no meu codigo é ${raçaDeCachorro[0]}`)
console.log(`Meu cachorro favorito é o ${raçaFavorita}, porem, a a minha vó não deixa :( `)

//-----------------------------------------------------------------------------------------

console.log('----------------------------------------------------------------------------')
console.log("EXERCICIO N°2⬇️")
console.log('__________________________________________________________________________________')
 const guardaRopa = [" arregata cinza", " bermuda esportiva branca", " tenis esportivos para correr", " muhila", " meias cinza", " meias pretas", " meias brancas", " cueca branca", " cuaca preta", " cuaca cinza", " oculos de sol", " bune branco da nike", " relogio esportivo", " calça bege", " camizeta de botão azul bebe", " tenis brancos", " cinto para calça", " gravata", " termo branco", " arregata branca", " camizeta de botaão estilo xedres de cor azul", " bermuda branca", " colar", " polseira", " muchilinha para usar de lado", " camiseta manga longa confortavel", " calça rasgada", " chapeu", " botas"]

 const look01 = [guardaRopa[0], guardaRopa[1], guardaRopa[2], guardaRopa[3], guardaRopa[5], guardaRopa[9], guardaRopa[10], guardaRopa[11], guardaRopa[12]]
 console.log(`O meu look para sair no final de semana para o parque com as segintes peça de ropas: ${look01}`)

 console.log('__________________________________________________________________________________')

 const look02 = [guardaRopa[13], guardaRopa[14], guardaRopa[15], guardaRopa[16], guardaRopa[17], guardaRopa[18], guardaRopa[6], guardaRopa[8]]
 console.log(`O mue look para ir numa entrevistas de emprego é as seguintes peças: ${look02}`)

 console.log('__________________________________________________________________________________')
 const look03 = [ guardaRopa[19], guardaRopa[20], guardaRopa[21], guardaRopa[22], guardaRopa[23], guardaRopa[24], guardaRopa[9], guardaRopa[5], guardaRopa[4]]
 console.log(`O meu look para sair numa festas esta composto pelas seguintes peças: ${look03}`)

 console.log('__________________________________________________________________________________')
 const look04 = [guardaRopa[25], guardaRopa[1], guardaRopa[6], guardaRopa[7]]

console.log(`o meu look para olhar filme em casa é: ${look04}`)

console.log('__________________________________________________________________________________')
const look05 = [guardaRopa[20], guardaRopa[26],guardaRopa[27], guardaRopa[28], guardaRopa[6], guardaRopa[7]]
console.log(`O meu look de ropa para as festas junita para ir no senac esta composto pelas seguintes peças: ${look05}`)

console.log('----------------------------------------------------------------------------')

console.log("EXERCICIO N°3 ⬇️")

const lancheHomer = ["Rosquinha", "Rosquinha", "Rosquinha"]
const lancheScooby = ["Hambergue", "Batata frita", "Milkshske", "Biscoito Scooby", "Pizza"]
const lancheMagali = ["Melancia", "Maça", "Banana", "Abacate"]
const lancheBob = ["Hamburgue de siri", "Refri", "Batata", "Sorvete", "Molho secreto"]

console.log(`O Homer, ele come ${lancheHomer.length} alimentos`)
console.log(`O Scooby, ele come ${lancheScooby.length} alimentos`)
console.log(`A Magali, ela come ${lancheMagali.length} alimentos`)
console.log(`O Bob, ele come ${lancheBob.length} alimentos`)


console.log('----------------------------------------------------------------------------')
console.log("EXERCICIO N°4 ⬇️")

/*const serireBoas = ["Breaking Bad", "Brooklyn Nini-nine"]
console.log(serireBoas.includes("Breaking Bad"))
console.log(serireBoas.includes("Gane of Thrones"))*/
 
const poquemon = ["Pikachu", "Charmande", "Bulbasaur", "Squirtle"]
console.log(poquemon.includes("Pikachu"))
console.log(poquemon.includes("Meowth"))

console.log('----------------------------------------------------------------------------')
console.log("EXERCICIO N°5 ⬇️")

const lista = ["Arros", "Feijão", "Marracarão"]

lista.push("leite", "farinha", "banana", "canela", "cafe", "frango", "margarina", "farofa")
console.log(lista)

console.log('----------------------------------------------------------------------------')
console.log("EXERCICIO N°6 ⬇️")
console.log('__________________________________________________________________________________')
console.log('BOLO RECHEIO!!!!')

let ListaIngredientes = [" Margarina", " Açucar", " Ovos", " Farinha", " Leite", " Fermento para bolon", " Chocolate em pó", " Nutella", " Brigadeiro negrimho", " Recheio de morangon", " Amentoin", " Nozes", " chantili", " morango"]

let baseDoBolo = [ListaIngredientes[0], ListaIngredientes[1], ListaIngredientes[2], ListaIngredientes[3], ListaIngredientes[4], ListaIngredientes[5], ListaIngredientes[6]]
console.log(`A reseita da masa do bolo são o seguinte: ${baseDoBolo}`)

let recheio01 = [ListaIngredientes[7], ListaIngredientes[10],]
let recheio02 = [ListaIngredientes[8], ListaIngredientes[11]]
let recheio03 = [ListaIngredientes[9], ListaIngredientes[13]]

console.log(`Apos o bolo estiver horneado, ele tem que ser dividido en tres partes. logos sera recheio com os seguintes topicos para recheios: 
    Primeiro recheio:${recheio01}
    Segundo recheio:${recheio02}
    Terceiro recheio:${recheio03}`)

let boloPronton = [baseDoBolo, recheio01, baseDoBolo, recheio02, baseDoBolo, recheio03]  

console.log(`O MEU BOLO FOI REALIZADO DA SEGUINTE MANEIRA 
    (${boloPronton[0]},)
    (${boloPronton[1]},)
    (${boloPronton[2]},)
    (${boloPronton[3]},)
    (${boloPronton[4]},) 
    (${boloPronton[5]},)`)
   
    console.log('----------------------------------------------------------------------------')  
    console.log("EXERCICIO N°7 ⬇️")

let marcaCelular = [" Iphone", " Samsumg", " Poco", " Xaiome", " BLUE"]
console.log(`As marcas de celular que estão disponiveis: ${marcaCelular}`)

marcaCelular.unshift("Mortorola")

console.log(`As marcas de celular e mais uma nova que esta disponiveis: ${marcaCelular}`)

console.log('----------------------------------------------------------------------------')  
console.log("EXERCICIO N°8 ⬇️")

let cidade = [" salvador", " Rio de Janeiro", " Brasilia"]
console.log(`Quais eram as 3 primeiras capitais do brasil?? eram: ${cidade}`)

cidade.shift()
console.log(`as duas cidades mais visitadas são: ${cidade}`) 


console.log('----------------------------------------------------------------------------')  
console.log("EXERCICIO N°9 ⬇️")

let lista01 = [" 5°: jantar",
     " 4°: ir no treino de luta",
      " 3°: assistir a aula no senac de São Leopoldo",
       " 2°: estar na escola das 7:15 até as 12:00",
        " 1°: academia"]

console.log(` A sua rutina no dia a dia é a seguinte: ${lista01}`)

lista01.pop()
console.log(`Mais uma tarefa comcluida, agora tem mais as seguinte atividades pendente: ${lista01}`)

console.log('----------------------------------------------------------------------------')  
console.log("EXERCICIO N°10 ⬇️")

let pacote01 = [" Pikachu", " Bulbasaur", " Charmander", " Meowth"]
let pacote02 = [" Squirtle", " Jigglypuff"]
let pacote03 = [" Meowth", " Snorlax"," Eevee"]

let cartasTotais = pacote01.concat(pacote02, pacote03) 

console.log(`No pacote de cartas, há as seguinte cartas: ${cartasTotais}`)

console.log(`E tem ${cartasTotais.length} cartas no meu pacote de cartas`)

console.log('----------------------------------------------------------------------------')  
console.log("EXERCICIO N°11 ⬇️")

let frase = "  Eu adorao JavaScript e estudar com meus colegas incríveis ! "

frase = frase.trim()
console.log(`A frase sem o espaço na frente: ${frase}`)

frase = frase.toLowerCase()
console.log(`A frase toda a caixa baixa: ${frase}`)

let incluiJavaScript = frase.includes("javascript")
console.log(incluiJavaScript)

console.log('----------------------------------------------------------------------------')  
console.log("EXERCICIO N°12 ⬇️")

let frutas01 = ["maça", "banana", "larnja"]

//adiciona "morango" no final
frutas01.push("morango")

//adiciona abacaxi no começo 
frutas01.unshift("Abacaxi")

//remove o primeiro elemento 
frutas01.shift()

//remove o ultimo elemento 
frutas01.pop()

//remove o elemento na posição 1 e adiciona "morango". O splice pode auxiliar 
frutas01.splice(1, 1, "morango")

console.log(frutas01)






