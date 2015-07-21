function divideBy10(num){
  return num/10;
}

function multiplyBy5(num){
	return num*5;
}

function check(){
  var output = document.getElementById("output");
  var field = document.getElementById("input");
  var input = field.value;
  var result = 0;
  if(input==="" || isNaN(input)){
    output.innerHTML = "Invalid input";
  } else if(input>10000){
    result = divideBy10(input);
    output.innerHTML = "New Number:   "+result;
  } else{
    result = multiplyBy5(input);
    output.innerHTML = "New Number:   " + result;
  }
}


var button = document.getElementById("executer");

// Assign a function to be executed when the button is clicked
button.onclick = check;//();
//doesn't need () because 