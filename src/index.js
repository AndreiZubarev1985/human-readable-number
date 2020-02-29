module.exports = function toReadable (number) {
    let numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
            100: 'one hundred',
            200: 'two hundred',
            300: 'three hundred',
            400: 'four hundred',
            500: 'five hundred',
            600: 'six hundred',
            700: 'seven hundred',
            800: 'eight hundred',
            900: 'nine hundred',
    }
            if(number >= 0 && number <= 20) {
                  return numbers[number];
            } else if(number >= 20 && number < 100) {
                if(number%10 === 0) {
                    return numbers[number];
                } else {
                let a = Math.floor(number/10)*10;
                let b = number%10;
                number = a;
                number = b;
               let result = numbers[a] + ' ' + numbers[b];
               return result;
                }
            } else if(number >= 100 && number < 1000) {
                if(number === 100 || number === 200 || number === 300 || number === 400 || number === 500 || number === 600 || number === 700 || number === 800 || number === 900) {
                    return numbers[number];
                } else {
                let x = Math.floor(number/100)*100;
               
                let y = number%100;
               
                if(y >= 10 && y < 20) {
                    number = x;
                    number = y;
                    let result = numbers[x] + ' ' + numbers[y];
                    return result;
                } else if(y%10 === 0) {
                        number = x;
                        number = y;
                        let result = numbers[x] + ' ' + numbers[y];
                        return result;
                } else {
                 let z = Math.floor(y/10)*10;
               
                let n = y%10;
               
                number = x;
                number = z;
                number = n;
                let result = numbers[x] + ' ' + numbers[z] + ' ' + numbers[n];
                // return result;
                   let arr = result.split(' ');
                arr.map((item, index) => {
                    if(item === 'zero') {
                        arr.splice(index, 1);
                    } else {
                        return item;
                    }
                });
                return arr.join(' ');
            }
        }
        }
    
    }
