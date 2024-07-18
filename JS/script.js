document.addEventListener('DOMContentLoaded', () => {
            const button = document.querySelector('#btn');
            button.addEventListener('click', calculateBMI);
        });

        function calculateBMI() {
            console.log('clicked');
            const height = document.querySelector('#height').value;
            const weight = document.querySelector('#weight').value;
            const result = document.querySelector('#result');

            if (isNaN(height) || height <= 0) {
                result.innerHTML = "<p>Please provide a valid Height</p>";
                return;
            } else if (isNaN(weight) || weight <= 0) {
                result.innerHTML = "<p>Please provide a valid Weight</p>";
                return;
            }

            const heightInMeters = height / 100;
            const BMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);

            if (BMI < 18.5) {
                result.innerHTML = `<p>Under Weight: ${BMI}</p>`;
            } else if (BMI >= 18.5 && BMI <= 24.9) {
                result.innerHTML = `<p>Normal: ${BMI}</p>`;
            } else if (BMI > 24.9) {
                result.innerHTML = `<p>Over Weight: ${BMI}</p>`;
            }
        }
