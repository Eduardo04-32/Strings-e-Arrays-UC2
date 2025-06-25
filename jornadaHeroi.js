//-------------------------------------------------------------------------------------------------------------------------------------------------------

//A JORNADA DO HEROI TALENTOSO DE REINO DOS TALENTOS TECNOLOGICOS 
//-------------------------------------------------------------------------------------------------------------------------------------------------------

/*Em um reino distante, um jovem talentoso desenvolvedor descobre descobre uma espada magica que revela seu destino como heroi. com coragem e poucos recursos ele parte de uma jornada desafeadora 
* O CENARIO: 
*O jogador é um heroi que embartca em uma jornada epica ao longo do caminho ele encontrara inimigos, coletera itens e efrentaram desafios. 
*/

//2. crie o inventario do Heroi: 
// O heroi começa sua aventura com alguns itens basicos. Vamos almarzenar esses itens em um array 

let inventario = [" Espada de destino : 3", " Escudo da coragem: 3", " Amuleto de guardão: 15", " Espada do gigante: 4", " botas de agilidades: 3"] 

//3. exiva o inventario inicial do heroi 
console.log(`Meus itens no inventario ${inventario}`)
console.log("itens: ", inventario.length)

//4. encontrado um tesoro
// o heroi encontra um bau de tesouro e ganha um novo intens 

inventario.push("arcos das variáveis")
console.log(`Meus itens no inventario ${inventario}`)
console.log("itens: " , inventario.length)

//5. Enfrente um inimiogo 
// O heroi enfrente um bobli chamado GoblinoDoTigrinho 🐯. qual armaira usar??????

console.log("Um globim apareceu!!! peparece para a batalha!!! Dano:13")
//Use itens do inventario para lutar
let itenUsado1 = inventario[2]
console.log(`Voce ataca o goblin com sua ${itenUsado1}`)

//6. O goblin sentiu o golpe....... agora ele tenta seu ultimo ataque com um dano de 3! Como voce finaliza esse adversario??
let itemUsado2 = inventario[3]
console.log(`Voce finalizam o globim com ${itemUsado2}`)

// 7.Um goldem aproveita sua distraçaõ e o ataca violentamente com um soco sismico! Dano 9.. como voce revida 
let itemUsado3 = inventario[0]
console.log(`voce revida com ${itemUsado3}`)
// calcule seus recursosm 
recursosREsistencia = 8
console.log(`Meua recursos de resitencia: ${recursosREsistencia}`)
//8. fanaliza a aventura... por enquanto... Nosso adeus não é para sempre...
//Como fanaliza o golpem?
let itemUsado4 = inventario[0]
console.log(`O heroi finaliza sua aventura com um golpe, utilozando: ${itemUsado4}`)
