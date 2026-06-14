const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const passwordContainer = document.getElementById("passwords-container");
const passwordCountInput = document.getElementById("password-count");
const passwordEnteredLength = document.getElementById("password-length");

let passwordLength = 0;
let countOfPasswords = 0;

function createRandomPassword() {
  passwordLength = Number(passwordEnteredLength.value);
  if (passwordLength < 20 && passwordLength > 8) {
    console.log(passwordLength);
    console.log(passwordEnteredLength.value);
    let password = "";
    for (let i = 0; i < passwordLength; i++){
      password += characters[Math.floor(Math.random()*characters.length)];
  }

    const newParagraph = document.createElement("p");
    newParagraph.textContent = password;
    passwordContainer.append(newParagraph);
    newParagraph.classList.add("password-place");
    }
  }


function createPasswords() {
  countOfPasswords = Number(passwordCountInput.value);
  passwordLength = Number(passwordEnteredLength.value);

  if (passwordLength > 20 || passwordLength < 8) {
    alert("Password length must be between 8 and 20 characters");
    return;
  }

  if (countOfPasswords > 10 || countOfPasswords < 1) {
    alert("Number of passwords must be between 1 and 10");
    return;
  }

  passwordContainer.innerHTML = "";

  for (let i = 0; i < countOfPasswords; i++) {
    createRandomPassword();
  }
}
