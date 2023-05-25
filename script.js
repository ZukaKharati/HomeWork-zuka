function passwordConfirmation() {
  let password = document.getElementById("pass").value;
  let confirmPassword = document.getElementById("confirmpass").value;

  if (password == "") {
    alert("ფასვორდის ველი ცარიელია");
  } else if (password == confirmPassword) {
    alert("Logged In");
  } else {
    alert("გთხოვთ დარწმუნდეთ, რომ თქვენი ფასვორდები იდენტურია");
  }
}

const inputElements = document.querySelectorAll("input");

for (let i = 0; i < inputElements.length; i++) {
  const input = inputElements[i];

  // Check if the input type is text
  if (input.type === "text") {
    // Check the length of the input value
    if (input.value.length > 100) {
      console.log("Text input value is more than 100 characters.");
      // Perform additional actions or display an error message
    } else {
      console.log("Text input value is not more than 100 characters.");
      // Perform other actions
    }
  }
}

function ValidateEmailAddress(emailString) {
  // check for @ sign
  var atSymbol = emailString.indexOf("@");
  if (atSymbol < 1) return false;

  var dot = emailString.indexOf(".");
  if (dot <= atSymbol + 2) return false;

  // check that the dot is not at the end
  if (dot === emailString.length - 1) return false;

  return true;
}

function CheckEmail(emailString) {
  //get result as true/false
  var Result = ValidateEmailAddress(emailString);

  if (Result) {
    document.getElementById("output").innerHTML = "Valid Email Id";
  } else {
    document.getElementById("output").innerHTML = "NOT a Valid Email Id";
  }
}

document.querySelector("form.form").addEventListener("submit", function (e) {
  e.preventDefault();
  let x = document.querySelector("form.form").elements;
  console.log("სახელი: ", x["fname"].value);
  console.log("გვარი: ", x["lname"].value);
  console.log("ასაკი: ", x["age"].value);
  console.log("დასაქმების სტატუსი: ", x["option"].value);
  console.log("პაროლი: ", x["password"].value);
  console.log("მეილი: ", x["email"].value);
});
