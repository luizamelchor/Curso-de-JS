var idade = 12
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota.')
} else if (idade < 18 || idade > 65) { //else if é uma forma de simplificar
    console.log('Voto opcional.')
} else {
    console.log('Voto obrigatório.')
}