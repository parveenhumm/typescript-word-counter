import inquirer from "inquirer";
//This line imports the inquirer library, which allows you to create interactive 
//command-line prompts for user input.
const answer = await inquirer.prompt([
    { name: "sentence",
        // name: This specifies a key to access the user's answer later (here, "Sentence").
        type: "input",
        // type: This sets the type of question as "input", meaning the user will type their response.
        message: "Please Enter your sentence "
        // message: This displays the prompt text asking the user to enter their sentence.
    }
]);
const words = answer.sentence.trim().split(" ");
//.trim() removes any leading or trailing whitespace from the sentence.
//.split(" ") splits the sentence into individual words using whitespace as the 
//delimiter (anything considered a space). This creates an array named words containing 
//each word as a separate element.
console.log(words);
//This console.log prints the entire array words, which shows each word in the sentence
// on a separate line.
console.log(`your sentence word count is : ${words.length}`);
//This console.log uses template literals (backticks) to create a formatted string.
// It displays the message "your sentence word count is :" followed by the actual word count 
//obtained using words.length. This calculates the total number of words in the sentence.
