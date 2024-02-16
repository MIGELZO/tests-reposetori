window.addEventListener("load", () => {
  const dice = document.getElementById("dice-btn");
  dice.addEventListener("click", intervalFunc);

  timer = 30;
  intervalId1;
  intervalId2;
  p1Result = 0;
  p2Result = 0;

    function intervalFunc() {
        intervalId1 = setInterval(player1Turn , 100)
    }

  function player1Turn() {

    let randomDice = Math.floor(Math.random() * 6 + 1);
    let diceLocation = "accets/number" + randomDice + ".png";
    console.log(diceLocation);
    let img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", diceLocation);
    
    let randomDice2 = Math.floor(Math.random() * 6 + 1);
    let diceLocation2 = "accets/number" + randomDice2 + ".png";
    let img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", diceLocation2);
    

    timer--;
    if (timer == 0) {
        clearInterval(intervalId1)
    }
    

  }
});
