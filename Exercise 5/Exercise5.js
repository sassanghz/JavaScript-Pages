// Date: 03/28/24
// Assignment 2: Exercise 5
// Author: Sassan Ghazi

function getUserInfo(){
    let name = prompt("What is your full name?");
    let age = prompt("How old are you?");

    if(name != null && age != null){
        let message = "Hi, my name is " + name + " and I'm " + age + " years old.";
        document.getElementById("content").innerHTML = message;
    }
}


