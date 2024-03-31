function validateForm(){
    
   var animalType = document.getElementById('animalType').value;
   var breed = document.getElementById('breed').value;
   var age = document.getElementById('age').value;
   var gender = document.getElementById('gender').value;

   if(animalType === '' || breed === '' || age === '' || gender === ''){
    alert("Please fill in all required fields.");
    return false;
   }

   return true;
}
