function calculateTriangleArea() {
  const baseInputField = document.getElementById("triangle-base");

  //   console.log(baseInputField);
  const base = parseFloat(baseInputField.value);

  const heightInputField = document.getElementById("triangle-height");
  const height = parseFloat(heightInputField.value);

  const area = 0.5 * base * height;

  //   display
  const areaHolder = document.getElementById("show-triangle-area");
  areaHolder.innerText = area;
}

function calculateRectangleArea() {
  // get length
  const getLengthInputText = document.getElementById("rectangle-height");
  const length = parseFloat(getLengthInputText.value);

  // get width
  const getRectangleWidthText = document.getElementById("rectangle-width");
  const width = parseFloat(getLengthInputText.value);

  // get area
  const rectArea = length * width;

  // display
  const rectAreaViewer = document.getElementById("rectangle-area");
  rectAreaViewer.innerText = rectArea;
}

// Parallelogram

// get the inputs (A GENERAL REUSABLE FUNCTION)
function getTheInputs(InputField) {
  const inputFieldText = document.getElementById(InputField);
  const inputNumber = parseFloat(inputFieldText.value);

  return inputNumber;
}

//set the value (A GENERAL REUSABLE FUNCTION)
function setAreaValue(innerField) {
  const setField = document.getElementById(innerField);
  return setField;
}

//function to calC para area
function calculateParallelogramArea() {
  //calculate area
  const base = getTheInputs("para-base");
  const height = getTheInputs("para-height");
  const area = base * height;

  //show the area
  const areaField = setAreaValue("show-para-area");
  areaField.innerText = area;
}
