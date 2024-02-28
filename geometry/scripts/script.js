// function calculateTriangleArea() {
//   // base
//   const baseInput = document.getElementById("triangle-base");

//   const baseText = baseInput.value;
//   const base = parseFloat(baseText);

//   //height
//   const heightInput = document.getElementById("triangle-height");

//   const heightText = heightInput.value;
//   const height = parseFloat(heightText);

//   // calculate area
//   const area = 0.5 * base * height;

//   // display triangle area
//   const triangleAreaSpan = document.getElementById("triangle-area");
//   triangleAreaSpan.innerText = area;
// }

// ============= from FUNCTION ==========

// function getInputValueById(inputFieldId) {
//   const inputField = document.getElementById(inputFieldId);
//   const inputValueText = inputField.value;
//   const inputValue = parseFloat(inputValueText);
//   return inputValue;
// }

// function calculateTriangleArea() {
//   const base = getInputValueById("triangle-base");
//   const height = getInputValueById("triangle-height");
//   const area = 0.5 * base * height;
//   // console.log(area);
//   setInnerTextById("triangle-area", area);
// }

// function setInnerTextById(elementId, area) {
//   const element = document.getElementById(elementId);
//   element.innerText = area;
// }
