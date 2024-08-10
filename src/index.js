const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const total = [];
    const finish = [];
    for (let i = 0; i < expr.length; i += 10) {
        total.push(expr.slice(i, i + 10));
    }


    for (let i = 0; i < total.length; i++) {
        let letter = [];
        for (let j = 0; j < 10; j += 2) {
            if (`${total[i][j]}${total[i][j + 1]}` === '10') {
                letter.push('.')
            } else if (`${total[i][j]}${total[i][j + 1]}` === '11') {
                letter.push('-')
            }
        }
        finish.push(letter.join());
    }


    let text = ''
    for (let i = 0; i < finish.length; i++) {
        if (!finish[i]) {
            text += ' '
        } else {
            text += MORSE_TABLE[finish[i].split(',').join('')]
        }
    }

    return text
}

module.exports = {
    decode
}