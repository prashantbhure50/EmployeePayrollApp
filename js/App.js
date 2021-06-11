window.addEventListener('DOMContentLoaded',(event) =>
{
    const text=document.querySelector('#text');
const textError=document.querySelector('.text-error');
text.addEventListener('input',function()
        {
            let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
            if(nameRegex.test(text.value))
            textError.textContent="";
            else 
            textError.textContent="Name is incorrect";
        });
    
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() 
{
    output.textContent = salary.value; 
});

const date=document.querySelector("#date");
const dateError = document.querySelector(".date-error");
dateError.textContent="";
date.addEventListener('input',function(){
    let now = new Date();
    if (startDate > now) 
    dateError.textContent= "Start Date is a Future Date!";
    var diff = Math.abs(now.getTime() - startDate.getTime());
    if (diff / (1000 * 60 * 60 * 24) > 30) 
     dateError.textContent= "Start Date is beyond 30 Days!";
});