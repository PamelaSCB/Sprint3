// Exercise 7
function validate() {
  let error = 0;

  // Get the input fields
  let fName = document.getElementById("fName");
  let fEmail = document.getElementById("fEmail");
  let fAddress = document.getElementById("fAddress");
  let fPassword = document.getElementById("fPassword");
  let fPhone = document.getElementById("fPhone");

  // RegExp
  let regExpName = /^[-'a-zA-ZÀ-ÿ\s]{3,}$/i;
  let regExpEmail = /^[-'a-zA-Z0-9_+]+@[-'a-zA-Z0-9_+]+\.[a-z]{2,3}$/i;
  let regExpPassword = /^.{4,8}$/;
  let regExpAddress = /^.{3,}$/;
  let regExhPhone = /^\d{9}$/;

  // Validate fields entered by the user: name, phone, password, and emaiL

  let regValidate = [regExpName,
    regExpName,
    regExpEmail,
    regExpPassword,
    regExpAddress,
    regExhPhone,
    fName,
    fLastN,
    fEmail,
    fPassword,
    fAddress,
    fPhone,
  ];

  for (i = 0; i < 6; i++) {
    if (
      regValidate[i + 6].value == "" ||
      regValidate[i].test(regValidate[i + 6].value) == false
    ) {
      regValidate[i + 6].classList.add("is-invalid");
      regValidate[i + 6].classList.remove("is-valid");
      error++;
      console.log(error);
    } else {
      regValidate[i + 6].classList.add("is-valid");
      regValidate[i + 6].classList.remove("is-invalid");
    }
  }

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK in validation");
  }
}
