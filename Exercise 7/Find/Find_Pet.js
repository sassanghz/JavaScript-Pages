// Date: 2024/03/31
// Author: Sassan Ghazi
function validateForm() {
    var animalType = document.getElementById('animalType').value;
    var breed = document.getElementById('breed').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;

    if (animalType === '') {
        alert('Please select an option for Cat or Dog.');
        return false;
    }

    if (breed === '') {
        alert('Please enter the breed.');
        return false;
    }

    if (age === '') {
        alert('Please select an option for Preferred Age.');
        return false;
    }

    if (gender === '') {
        alert('Please select an option for Preferred Gender.');
        return false;
    }

    // Use the form data for further processing or submission
    console.log('Animal Type:', animalType);
    console.log('Breed:', breed);
    console.log('Age:', age);
    console.log('Gender:', gender);

    return true;
}
