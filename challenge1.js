let name = `Salman`
let year = 1995
const en = `en` 
const es = `es`
const fr = `fr`
const tr = `tr`



/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName(){
    console.log(`Salman Alnajdi`)
}

printName()

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(year){
   console.log(2024 - year) 
}

printAge(year)
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name ,language){
    if(language == en){
        console.log(`Hello ${name}`)
    }else  if(language == es){
        console.log(`Hola ${name}`)
    }else  if(language == fr){
        console.log(`Bonjour ${name}`)
    }else  if(language == tr){
        console.log(`Merhaba ${name}`)
    }
}

printHello(name , fr )

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(num1 , num2){
    if(num1>num2){
        console.log(`${num1} bigger than ${num2}`)
    }else if(num2>num1){
        console.log(`${num2} bigger than ${num1}`)
    }else if(num1 == num2){
        console.log(`${num1} Equal ${num2}`)
    }
}


printMax(2 , 3)
