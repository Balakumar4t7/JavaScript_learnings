function validation(){
    var uname=document.getElementById("username").value;
    var pass=document.getElementById("password").value;

    if(uname=="" ){
        alert("UserName is required");
        document.getElementById("unamelbl").style.visibility="visible";
        return false;
    }
    else if(pass==""){
             alert("Password is required");
        document.getElementById("unamelbl").style.visibility="hidden";
        document.getElementById("passlbl").style.visibility="visible";
        return false;
    }
    else{
        return true;
    }
   
}