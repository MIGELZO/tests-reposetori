window.addEventListener("load", () => {
  const dice = document.getElementById("dice-btn");
  const decision = document.getElementById("winnerDeclaration");
  dice.addEventListener("click", intervalFunc);

  let timer = 30;
  let intervalId1;
  let intervalId2;
  let p1Result = 0;
  let p2Result = 0;
  let userTurne = 1;
  let counter = 0;

  function intervalFunc() {
    if (userTurne === 1) {
      intervalId1 = setInterval(player1Turn, 100);
    } else if (userTurne === 2) {
      intervalId2 = setInterval(player2Turn, 100);
    }
  }

  //---- תורו של השחקן הראשון

  function player1Turn() {

    dice.disabled = true;

    let randomDice = Math.floor(Math.random() * 6 + 1);
    let diceLocation = "accets/number" + randomDice + ".png";
    let img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", diceLocation);

    let randomDice2 = Math.floor(Math.random() * 6 + 1);
    let diceLocation2 = "accets/number" + randomDice2 + ".png";
    let img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", diceLocation2);

    let dice1 = randomDice;
    let dice2 = randomDice2;

    timer--;
    if (timer == 0) {
      clearInterval(intervalId1);
      p1Result = dice1 + dice2;
      dice.disabled = false;
      timer = 30;
      userTurne = 2;
      counter++;
      winner(p1Result, p2Result)
    }
  }

  //---- תורו של השחקן השני

  function player2Turn() {
    dice.disabled = true;

    let randomDice3 = Math.floor(Math.random() * 6 + 1);
    let diceLocation3 = "accets/number" + randomDice3 + ".png";
    let img3 = document.querySelectorAll("img")[2];
    img3.setAttribute("src", diceLocation3);

    let randomDice4 = Math.floor(Math.random() * 6 + 1);
    let diceLocation4 = "accets/number" + randomDice4 + ".png";
    let img4 = document.querySelectorAll("img")[3];
    img4.setAttribute("src", diceLocation4);

    let dice3 = randomDice3;
    let dice4 = randomDice4;

    timer--;
    if (timer == 0) {
      clearInterval(intervalId2);
      p2Result = dice3 + dice4;
      dice.disabled = false;
      timer = 30;
      userTurne = 1;
      counter++;
      winner(p1Result, p2Result)
    }
  }
  // winner(p1Result,p2Result);
  //---- בודק מי השחקן המנצח


  function winner(p1Result, p2Result) {
    if(counter % 2 == 0){
      if (p1Result > p2Result) {
        decision.innerHTML = "The winner is Player 1";
        userTurne = 1;
      } else if (p1Result < p2Result) {
        decision.innerHTML = "The winner is Player 2";
        userTurne = 2;
      } else {
        decision.innerHTML = "Its a draw";
      }
      dice.innerHTML = "play again";
    }
  }
});
