function validateForm(){
    var x = document.forms["myForm"]["fname"].value;
    if(x == ""){
        alert("Name must be filled out");
        return false;
    }
}
// if validate form is returning false than action attribute in the form will not be called else called.