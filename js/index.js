// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.
var hacker1 = "Michael"
//1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`)
//1.3 Create a variable `hacker2` with the navigator's name.
var hacker2 = "Dragan and Bruno"
//1.4 Print `"The navigator's name is YYYY"`.
console.log(`the navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if ( hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }


// Iteration 3: Loops

function hacker() {
    let output = ""; 
    for ( let i=0; i <hacker1.length; i++) {
       output += hacker1[i].toUpperCase() + " "; 
      }
      return output;
    }
    // hacker();
    console.log(hacker());
    
    function reverse(){
    let reverseNavigator= "";
    
    for (let i = hacker2.length - 1; i >= 0; i--){
    reverseNavigator += hacker2[i];
    }
    return reverseNavigator
    }
    // reverse()
    console.log(reverse())

    
    // 3rd example

    function lexi(hacker1, hacker2) {
        if (hacker1 === hacker2) {
             return `What?! You both have the same name?`
       
        }
        
        let isFirst = hacker1.localeCompare(hacker2)===-1
           // Look at first name
           if(isFirst){
             return `The driver's name goes first.`
           } else {
             return `Yo, the navigator goes first definitely.`
           } 
          
         }
         
         console.log(lexi("Valerie", "Julian"))
         console.log(lexi("Julian", "Valerie"))