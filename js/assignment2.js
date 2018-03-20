function clearForm() {
  document.getElementById('my-form').reset();
  updateProgressBar();
}

function submitDummy() {
  alert("Thank you!! =)");
}

function updateProgressBar() {
    var count = 0;

    if (Modernizr.progressbar) {

      // Get value from input fields
      var emailFieldValue   = document.getElementById('email').value;
      var urlFieldValue     = document.getElementById('url').value;
      var yearFieldValue    = document.getElementById('year').value;
      var commentFieldValue = document.getElementById('comment').value;

      // Get value from gender radio group
      var gender = document.querySelector('input[name="gender"]:checked');

      if (gender != null) {
        var value = gender.value;
      }

      // Check values
      if (emailFieldValue != null && emailFieldValue != "") {
        count++;
      }

      if (urlFieldValue != null && urlFieldValue != "") {
        count++;
      }

      if (yearFieldValue != null && yearFieldValue != "") {
        count++;
      }

      if (commentFieldValue != null && commentFieldValue != "") {
        count++;
      }

      if (value != null && value != "") {
        count++;
      }

      // Update progress background
      document.getElementById('progress-bar').value = count;

  }
  else {
    // not-supported
    document.getElementById('progress-bar').value = 0;
  }
}
