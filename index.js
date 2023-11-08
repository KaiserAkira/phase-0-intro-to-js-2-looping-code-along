// Code your solutions in this file

function writeCards(namesarray) {
const messages = []
    let i = 0
    while (i < namesarray.length) {
    console.log(`Thank you, ${namesarray[i]}, for the wonderful surprise gift!`)
    messages.push(`Thank you, ${namesarray[i]}, for the wonderful surprise gift!`)
    i++
    }
return messages
}

function countDown(n) {
    let i = 0
    while (i < 1+n) {
        
        console.log(n--)
    
    }
}
