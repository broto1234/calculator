const getValue = document.getElementById("inputText");
const finalResult = document.getElementById("inputres");

let calculate = (number) => {
  getValue.value += number;
}

let Result = () => {
    try {
    finalResult.value = "= " + eval(getValue.value);    
  } catch (error) {
     alert("Enter valid Input");
  }
  
}

let clr = () => {
  getValue.value = " ";
  finalResult.value = " ";
}

let del = () => {
  getValue.value = getValue.value.slice(0,-1);
}