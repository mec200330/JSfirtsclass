let turtle1 = 'Leonardo'
let turtle2 = 'Raphael'
let turtle3 = 'Donatello'
let turtle4 = 'Michelangelo'

let allTurtles = ''


console.log(allTurtles=turtle1)

allTurtles = turtle1+' '+turtle2+' '+turtle3+' '+turtle4


console.log(allTurtles)

console.log(allTurtles.indexOf('Donatello'))
console.log(allTurtles.length)

let firtsHalfTurtles = allTurtles.slice(0,16)
let secondhalfTurtles = allTurtles.slice(17,39)

console.log('Mis artistas favoritos son: ' +firtsHalfTurtles)
console.log('Mis artisyas menos favoritos son: ' +secondhalfTurtles)