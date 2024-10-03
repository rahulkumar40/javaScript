const form = document.getElementById('bmi-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const units = document.querySelector('input[name="units"]:checked').value;
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const results = document.getElementById('results');

  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  if (!height || height <= 0) {
    results.innerHTML = `<p>Please enter a valid height.</p>`;
    return;
  }

  if (!weight || weight <= 0) {
    results.innerHTML = `<p>Please enter a valid weight.</p>`;
    return;
  }

  let bmi;
  if (units === 'imperial') {
    // Convert inches to meters and lbs to kg
    height = height * 0.0254;
    weight = weight * 0.453592;
  } else {
    // Convert cm to meters
    height = height / 100;
  }

  bmi = (weight / (height * height)).toFixed(1);

  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }

  results.innerHTML = `<p>Your BMI is <span>${bmi}</span> (${category}).</p>`;
});
