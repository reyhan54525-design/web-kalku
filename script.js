let display = document.getElementById("display");

function appendValue(value){

  if(display.value === "0" && value !== "."){
    display.value = value;
  }else{
    display.value += value;
  }

}

function clearDisplay(){
  display.value = "0";
}

function calculate(){

  try{

    let result = eval(display.value);

    if(result === undefined || isNaN(result)){
      display.value = "Error";
    }else{
      display.value = result;
    }

  }catch(error){
    display.value = "Error";
  }

}

const themes = [
  "linear-gradient(135deg,#0f172a,#1e293b,#334155)",
  "linear-gradient(135deg,#ff0080,#7928ca)",
  "linear-gradient(135deg,#00c6ff,#0072ff)",
  "linear-gradient(135deg,#11998e,#38ef7d)",
  "linear-gradient(135deg,#fc466b,#3f5efb)",
  "linear-gradient(135deg,#f7971e,#ffd200)"
];

let currentTheme = 0;

function changeTheme(){

  currentTheme++;

  if(currentTheme >= themes.length){
    currentTheme = 0;
  }

  document.body.style.background = themes[currentTheme];

}