var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var result = 0
var lineIndex = 0

rl.on('line', function (line) {
    if (lineIndex == 0) {
        let values = line.split(" ");
        let a = parseInt(values[0]),
            x = parseInt(values[1]),
            b = parseInt(values[2]),
            c = parseInt(values[3]);
        result = a * x * x + b * x + c
        rl.close()
        console.log(result)
    }
})

