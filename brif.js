
function joinus(){
    var username_login = document.getElementById("username-login");
    var first_password = document.getElementById('first-password');
    var second_password = document.getElementById('second-password');
    if(first_password.value != second_password.value ){



        alert("deffirent Passwords ")
    }else{
        localStorage.setItem("username",username_login.value );
        localStorage.setItem("password",second_password.value );
        window.location.href="br1imad.html"
    }






}

function con(){

  var usr=document.getElementById("usrname").value;
  var psw=document.getElementById("psw").value;
  if(usr==  localStorage.getItem("username") && localStorage.getItem("password" )){
    window.location.href="livecoding.html"
  }else{
      alert("password or username is incorrect")
  }


}