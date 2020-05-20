function myFunction() {
    var x = document.getElementById("password");
    var y = document.getElementById("confirm");
    if (x.type === "password" ) {
      x.type = "text";
      
    } 
    else if (y.type ==="password"){
        y.type="text"
    }
        else {
      x.type = "password";
      y.type ="password";
    }
  }
  
 