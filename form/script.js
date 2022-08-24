// submit button
function info(){
alert("Your document submited!");
}
let y=document.getElementById('sub');
y.addEventListener('click',info);

// password matching
function conpass(){
    let pass=document.getElementById('password').value;
    let cpass=document.getElementById('cpassword').value;

    if(pass==cpass){
        document.getElementById('status').innerHTML="Password Matching"
    }
    else{
        document.getElementById('status').innerHTML="Password doesn't Matching"
    }
}
