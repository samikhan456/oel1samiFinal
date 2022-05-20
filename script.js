function validate() {
    if (document.myForm.email.value == "") {
        alert("Please provide your name!");
        document.myForm.email.focus();
        return false;
    }
    if (document.myForm.password.value.length<= 8) {
        alert("Password is weak!");
        document.myForm.password.focus();
        return false;
    }
    if (document.myForm.address1.value == "") {
        alert("Address 1 is empty!");
        document.myForm.password.focus();
        return false;
    }
    if (document.myForm.address2.value == "") {
        alert("Address 2 is empty!");
        document.myForm.password.focus();
        return false;
    }
    if (document.myForm.city.value == "") {
        alert("City is empty!");
        document.myForm.password.focus();
        return false;
    }
}
function eventSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }