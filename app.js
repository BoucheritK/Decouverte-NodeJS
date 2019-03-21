process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('How old are you ? ')
process.stdin.on('data', (number) => {
    if (number < 100){
        console.log("So you're from " + (2019 - number) )
    }else {
        console.log("I\'m to old for that shits!")
    }
    process.exit()
})