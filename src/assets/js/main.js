// Add event listener for the Reverse button
document.getElementById("btnSubmit").addEventListener("click", getValue);

// Get string from the input field
// Controller function
function getValue() {
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("userString").value;

  // Pass the userString to the reverseString helper function
  let revString = reverseString(userString);

  // Pass the revString to the displayString helper function
  displayString(revString);
}

// Revers the string
// Logic function
function reverseString(userString) {
  let revString = [];
  let resultObj = {};

  // Set the entered string to lower case and remove spaces and special characters
  userString = userString.toLowerCase();
  const regex = /[^a-z0-9]/gi;
  userString = userString.replace(regex, "");

  // check if less than 2 letters
  if (userString.length < 2) {
    alert("Please enter at least 2 characters");
  } else {
    //  A for loop to iterate through the string from back to front
    //      and concatenate them into the revString variable
    for (let i = userString.length - 1; i >= 0; i--) {
      revString += userString[i];
    }
  }
  // Compare the two strings to see if it is a palindrome
  if(revString === userString){
    resultObj.msg = `"<b>${userString}</b>" is a palindrome`;
  }else {
    resultObj.msg = `"<b>${userString}</b>" is not a palindrome`;
  }
  resultObj.rev = revString;
  return resultObj;
}

// Display the reversed string on the page
// View function
function displayString(resultObj) {
  document.getElementById("msgHeader").innerHTML = resultObj.msg;
  document.getElementById("msg").innerHTML = `Your phrase reversed is "<b>${resultObj.rev}</b>"`;
  document.getElementById("alert").classList.remove("invisible");

  let codeLink = document.getElementById("codeLink");
  codeLink.innerHTML = '<a href="code.html">See The Code</a>'
}
