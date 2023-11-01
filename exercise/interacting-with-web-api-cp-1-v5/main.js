function task1() {
  const elemen = document.getElementById("random-number");
  return elemen.textContent;
}

function task1_1() {
  const randomNumberElement = window.document.getElementById("random-number-class");
  return randomNumberElement.textContent;
}

function task2() { //DOM Manipulasi 
  const elemen = document.getElementById("task-2");
  // elemen.innerHTML = 100; //DOM Manipulasi
  elemen.textContent = 100;
}

function task3() {
  const elemen = document.getElementById("task-3");
  const button = document.getElementById("task-3-button");
  
  function handleClick() {
    elemen.textContent = 100;
  }
  button.addEventListener('click', handleClick);
}

function task3_1() {
  const elemen = document.getElementById("task-3-1");
  const button = document.getElementById("task-3-1-button");

  function handleClick() {
    elemen.textContent = '';
  }
  button.addEventListener('click', handleClick);
}

console.log("Number inside random-number element is: ", task1());
console.log("Number inside random-number-class element is: ", task1_1());
task2();
task3();
task3_1();

if (typeof module !== "undefined") {
  module.exports = { task1, task1_1, task2, task3, task3_1 };
}
