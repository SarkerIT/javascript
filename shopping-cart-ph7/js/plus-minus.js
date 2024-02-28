function increase() {
  document.getElementById("btn-plus").addEventListener("click", function () {
    const numberText = document.getElementById("number-field").value;
    let numberPhone = parseInt(numberText);

    numberPhone = numberPhone + 1;

    const caseTotalElement = document.getElementById("number-field");
    caseTotalElement.innerText = numberPhone;
  });
}
