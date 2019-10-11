
function startGame(){
  var person1 = prompt("Please enter your name");
    if (person1 != null){
      document.getElementById("start1").innerHTML = "Welcome " + person1 + "! You are Player 1";
    }

  var person2 = prompt("Next guest enter your name");
  if (person2 != null){
    document.getElementById("start2").innerHTML = "Welcome " + person2 + "! You are Player 2! Now let's begin!";
  }
}




let response = document.getElementById("0");

for (let i = 0; i < 9; i++){
response = document.getElementById(i.toString());


response.addEventListener("click", function(){
  if (i == "0"){
    document.getElementById("0").textContent = "X";
  }else if(i == "1"){
    document.getElementById("1").textContent = "X";
  }else if (i == "2"){
    document.getElementById("2").textContent = "X";
  }else if (i == "3"){
    document.getElementById("3").textContent = "X";
  }else if (i == "4"){
    document.getElementById("4").textContent = "X";
  }else if(i == "5"){
    document.getElementById("5").textContent = "X";
  }else if(i == "6"){
    document.getElementById("6").textContent = "X";
  }else if (i == "7"){
    document.getElementById("7").textContent = "X";
  }else{
    document.getElementById("8").textContent = "X";
  }

})




};