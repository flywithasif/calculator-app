// Display catch
let display = document.getElementById("display");

// 1) Press Button → add to display 
function press(num) {
  display.value += num;  // Text concatenate hota hai
  console.log(num);
}

//  2) Clear Screen
function clearDisplay() {
  display.value = "";
}

//  3) Delete Last Character
function deleteLast() {
  display.value = display.value.slice(0, -1);  
}

// 4) Calculate Result
function calculate() {
  try {
    // eval() mathematical string solve 
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
