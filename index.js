console.log('hello world');


// Basically it uses a string variable to start. Called "originalString".

// Then it splits the string into separate characters, and saves it in an array called "array"

// Then it calls  the animateTitle function. That function continuously removes the first index of the array(first letter)
    // and then put it at the end of the array.
    // then saves it back to a string called "titleString"

// then it changes the webpage title to that string.

// function to run the code
function animateTitle(array) {
    if (array.length > 0 ) {
        setTimeout( function () {   // delays each iteration     
            let firstCharacter = array.shift(); // remove first index array
            array.push(firstCharacter); // added to end of array
            
            titleString = array.join('');  // make it a string again
            document.title = titleString   // change the title to that string.

            array = titleString.split('');  // split the new string again, and save it in an array.
            animateTitle(array);  // then repeat the process. Call the function within it's self is called recursion.
        }, 250 ); // delay each iteration by this many milliseconds. 
    }
}

// original string
let originalString = 'Your Title Text Goe Here - '  // <--- Replace with your won title text

// continuously changing string that creates the animation effect
let array = originalString.split('')


animateTitle(array); // first initial function call to start the process.