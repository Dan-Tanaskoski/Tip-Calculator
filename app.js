// DOM VALUES

const billDOM = document.getElementById("service");

const serviceDOM = document.getElementById("amount");

const peopleDOM = document.getElementById("numPeople");

const resultDOM = document.getElementById("final-result");

// ACTIVATE SERVICE SELECTION
const serviceAmount = () => {
  selectedAmount = serviceDOM.value;
};

serviceDOM.addEventListener("change", serviceAmount);

// ADD FUNCTIONALITY TO THE BUTTON
const getInputValue = () => {
  const billVal = billDOM.value;
  const peopleVal = peopleDOM.value;
  const percentVal = serviceDOM.value;

  const totalTip = billVal * percentVal;
  const tipPerPerson = totalTip / peopleVal;

  document.getElementById(
    "final-result"
  ).innerHTML = `Tip per person: ${tipPerPerson}`;
};
