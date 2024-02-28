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
  const width = parseFloat(getRectangleWidthText.value);

  // get area
  const rectArea = length * width;

  // display
  const rectAreaViewer = document.getElementById("rectangle-area");
  rectAreaViewer.innerText = rectArea;
}

// Parallelogram with gebneral functions

// ====================
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

  // display with ==== appendChild === in a section
  // Create an "li" node:
  const node = document.createElement("li");

  // Create a text node:
  const textNode = document.createTextNode(
    "Area of a parallelogram is : " + area
  );
}

//  Add cart item numbers
const allCalculateBtn = document.getElementsByClassName("calculate");

let count = 0;
for (const btn of allCalculateBtn) {
  btn.addEventListener("click", function (e) {
    count = count + 1;
    // increase cart item num
    setInnerText("cart-item-numbers", count);

    // const shapeName = e.target.parentNode.childNodes[1];
    const ol = document.getElementById("myList");

    const shapeName =
      e.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText;

    const shapeArea =
      e.target.parentNode.parentNode.childNodes[1].childNodes[4].innerText;

    const li = document.createElement("li");
    li.innerText = shapeName;

    const area = document.createElement("li");
    area.innerText = shapeArea;

    ol.appendChild(li);
    ol.appendChild(area);

    // setInnerText(shapeName, count);
  });
}

// set inner text
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function changeBgColor() {
  let list = document.getElementById("card-1").classList;

  list.add("bg-blue-100");
}
