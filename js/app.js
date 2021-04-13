window.onload = function () {
  var form = document.getElementById("myForm");

  // create the pristine instance
  var pristine = new Pristine(form);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // check if the form is valid
    var valid = pristine.validate(); // returns true or false
  });
};

// Config code

let defaultConfig = {
  // class of the parent element where the error/success class is added
  classTo: "form-group",
  errorClass: "has-danger",
  successClass: "has-success",
  // class of the parent element where error text element is appended
  errorTextParent: "form-group",
  // type of element to create for the error text
  errorTextTag: "div",
  // class of the error text element
  errorTextClass: "text-help",
};

// A validator to check if the input value is within a specified range
// Global validators must be added before creating the pristine instance
 Pristine.addValidator("my-range", function(value, param1, param2) {
      return parseInt(param1) <= value && value <= parseInt(param2) 
   }, "The value (${0}) must be between ${1} and ${2}", 5, false);
   
   var form = document.getElementById("form1");

   var pristine = new Pristine(form);

   form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = pristine.validate();
      //alert('Form is valid: ' + valid);

   });



