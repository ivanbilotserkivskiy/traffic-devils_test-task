import customSelect from 'custom-select';

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});




const slider = document.getElementById("myRange");
const output = document.getElementById("output");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  output.style.left = `${((((this.value - 1100) / (500000 - 1100)) * ((this.offsetWidth - 7) - 7)) + 7)- 20}px`;
}

const countryCodes = require('country-codes-list')

const myCountryCodesObject = countryCodes.customList('countryCode', '+{countryCallingCode}')

console.log(myCountryCodesObject)

const codeCountry = document.getElementById('mySelect');
const codeCountry2 = document.getElementById('mySelect2');

const countryCodesArr = Object.values(myCountryCodesObject)

countryCodesArr.forEach(code => {
  const option = document.createElement('option');
  option.textContent = code;
  codeCountry.appendChild(option);
});

countryCodesArr.forEach(code => {
  const option = document.createElement('option');
  option.textContent = code;
  codeCountry2.appendChild(option);
});

console.log(countryCodesArr)
const mySelects = customSelect("select");