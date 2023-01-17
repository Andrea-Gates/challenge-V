// function of button should be constant, so
const generateBtn = document.querySelector("#generate");
const numChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const specChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Nb: At first I tried making each character type an array (e.g., numArray, specArray, upperArray, lowerArray) and then tried to concatenate the choices to the selectedArray. This only got me as far as the first prompt, however, before I ran into problems. 
  

// So instead I started from getting the length of the possible allowed options: 
function passwordOptions() {
  let passwordLength = parseInt(
    prompt("How complicated do you want to make this? Gotta be more than 10, but less than 64 characters, capisce?")
  );

  if (passwordLength > 10 && passwordLength < 64){
    let uppers = confirm ("Would you like to include capital letters?");
    let lowers = confirm ("Okay, how do you feel about lowercase letters?");
    let nums = confirm ("Want to include any numbers?");
    let specials = confirm ("Special characters make your password big and strong, you in?");
  
    let options = {
      strength: passwordLength,
      uppers: uppers,
      lowers: lowers,
      nums: nums,
      specials: specials,
    };
    
    return options;
  } 
  // When any number between 10 and 64 is chosen via the prompt, the user can y/n (cancel/ok) to each option. Unfortunately, if the user choses, say, 8, they'll get an appropriate prompt message but will then have to hit the "generate password" button again to reset.

    else {
    alert ("Please enter a number between 10 and 64, work with me here.");
  }
}

function generatePassword(){
  let userPasswordChoices = passwordOptions();
  let userChoice = "";
  let password = "";

  // Initially I tried made the <choice> be = to <character type>.concat ... Nope. Then I tried variable = <character type>.concat This did not work either I knew neither === nor == was right, so I tried += 
  
  if (userPasswordChoices.uppers){
    userChoice += uppercase.join ("")
  }
  if (userPasswordChoices.lowers){
    userChoice += lowercase.join ("")
  }
  if (userPasswordChoices.nums){
    userChoice += numChars.join ("")
  }
  if (userPasswordChoices.uppers){
    userChoice += specChars.join ("")
  }

  for (let i = 0; i < userPasswordChoices.strength; i++){
    let random = Math.floor(Math.random() * userChoice.length);
    password += userChoice.charAt(random); 
  }
  return password;
}

  function writePassword(){
    const finalPassword = generatePassword();

    // the querySelector allows the function to grab any generated combo of chosen criteria with in the document (the unique password), and then return it (i.e., make it visible). But to be honest the fact that I then gave 'password' its own class was trial and error ('', "", passWord, .password, then finally "#"... I'm not even sure how I did it, but I was delighted to wake up this morning, try it again, and find that for all intents and purposes, it worked. Huzzah)
    let passwordText = document.querySelector("#password");
    passwordText.value = finalPassword;
  }

generateBtn.addEventListener("click", writePassword); 