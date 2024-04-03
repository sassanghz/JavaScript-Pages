function js_style(){
 
    docBody = document.getElementsByTagName("body")[0];
    //Get all the p elements that are descendants of the body
    myBodyElements = docBody.getElementsByTagName("p");
    // get the first p elements
    myp1 = myBodyElements[0];
    myp1.style.background = "rgb(255,0,0)";

}