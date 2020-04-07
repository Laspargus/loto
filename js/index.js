

const checkLoto = () => {


  let resultDiv = document.querySelector(".result");
 
  const firstname = document.formLoto.firstname.value;
  const lastname = document.formLoto.lastname.value;
  const email = document.formLoto.email.value;

  let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let testEmail = emailRegExp.test(email);

  const number1 = document.formLoto.number1.value;
  const number2 = document.formLoto.number2.value;
  const number3 = document.formLoto.number3.value;
  const number4 = document.formLoto.number4.value;
  const number5 = document.formLoto.number5.value;
  const number6 = document.formLoto.number6.value;

  let number = [Number(number1), Number(number2), Number(number3), Number(number4), Number(number5), Number(number6)].sort();

  if(firstname == "") {
    resultDiv.innerHTML = `<div class="alert alert-danger" role="alert">
      Please add your firstName !
      </div>`;
    return false;
  }
  if(lastname == "") {
    resultDiv.innerHTML = `<div class="alert alert-danger" role="alert">
    Please provide your Lastname !
    </div>`;
    return false;
  }

  if(email == "") {
    resultDiv.innerHTML = `<div class="alert alert-danger" role="alert">
    Please provide your email !
    </div>`;
    return false;
  }


  if (testEmail == false){
    resultDiv.innerHTML = `<div class="alert alert-danger" role="alert">
    Please provide a valid Mail !
    </div>`;
    return false;
  }
  return checkGame(number, resultDiv);
}


const checkGame = (number, resultDiv) => {
  let rand1 = getRandomIntInclusive(1, 10);
  let rand2 = getRandomIntInclusive(1, 10);
  let rand3 = getRandomIntInclusive(1, 10);
  let rand4 = getRandomIntInclusive(1, 10);
  let rand5 = getRandomIntInclusive(1, 10);
  let rand6 = getRandomIntInclusive(1, 10);
  let random =[rand1, rand2, rand3, rand4, rand5, rand6].sort();

  for (let i = 0; i < random.length; i++) {
		if (random[i] !== number[i]){ 
      resultDiv.innerHTML = `<div class="alert alert-warning" role="alert">
      Sorry you lost. The winning numbers were ${rand1}, ${rand2}, ${rand3}, ${rand4}, ${rand5}, ${rand6}
      </div>`;
     return false;
    } 
  }
  resultDiv.innerHTML = `<div class="alert alert-warning" role="alert">
     Congratulation, you just won 1 million dollar </div>`;
    return true; 
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}