var agora = new Date()
var hora = agora.getHours
console.log(`Agora são ${agora} horas.`)
if (hora < 12){
    console.log('Bom dia!')
} else if(hora <= 18){
    console.log('Tardê')
} else{
    console.log('Noitê')
}