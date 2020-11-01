var elFormTemperature = document.querySelector('.form-temperature');


var celsiusToFahrenheit = function (inputCelsius) {
  return (inputCelsius * 9 / 5) + 32;
}

elFormTemperature.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var elInputCelsius = elFormTemperature.querySelector('.celsius-input');
  elInputCelsius = parseFloat(elInputCelsius.value.trim(), 10);

  var elResultFahrenheit = elFormTemperature.querySelector('.fahrenheit-input');
  elResultFahrenheit.textContent = celsiusToFahrenheit(elInputCelsius).toFixed(1);

});