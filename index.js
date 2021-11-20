
function validate(){
    var user=document.getElementById("name").value;
    var pho=document.getElementById("num").value;
    var reg=document.getElementById("regd").value;
    var br=document.getElementById("branch").value;
    var dom =document.getElementById("domain").value;
    var em=document.getElementById("mail").value;
    var bod=document.getElementById("dob").value;


    var u=/^([a-zA-Z]+)$/;
    var p=/[7-9]\d{9}/;
    var r=/\d{10}/;
    var b=/^([a-zA-Z]+)$/;
    var d=/^([a-zA-Z]+)$/;
    var e=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,20})(.[a-z]{2,20})?$/;
    
    if(user=='' || pho=='' || reg=='' || be=='' || dom=='' || em==''){
        alert("Enter each details correctly");
        
    }
    else if(!u.test(user)){
        alert("Username is incorrect must contain alphabets only!");
        
    }
    else if(!p.test(pho)){
        alert("Phone number is incorrect must contain only digits of length 10 only!");
        
    }
    else if(!r.test(reg)){
        alert("Registration number is incorrect must contain only digits of length 10 only!");
        
    }
    else if(!b.test(br)){
        alert("Branch name is incorrect must contain alphabets only!");
        
    }
    else if(!d.test(dom)){
        alert("Domain name is incorrect must contain alphabets only!");
        
    }
    else if(!e.test(em)){
        alert("Please enter valid email ID!");
    }
    else if(bod=='')alert("Please enter valid dob!");
    else {
        alert("Submitted Successfully!!");
        
    }
}
