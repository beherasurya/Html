// console.log('Hello World');

// var images=document.getElementsByTagName('img');
// console.log(images);

// var anchors=document.getElementsByTagName('a');
// console.log(anchors);

// var paragraphs=document.getElementsByTagName('p');
// console.log(paragraphs);

// var heading=document.getElementById('heading');
// console.log(heading);
// console.log(heading.innerHTML);
// console.log(heading.nodeType);

// var main_content=document.getElementById('main-content');
// main_content.setAttribute('align','right');

// var heading=document.getElementById('heading');
// heading.innerHTML="Welcome to GWSST";

// var main_content=document.getElementById('main-content');

// var new_heading=document.createElement('h2');
// var new_phrase=document.createElement('p');

// new_heading.innerHTML='Welcome to GWSST';
// new_phrase.innerHTML='This is a simple phrase just to show a demo';

// main_content.appendChild(new_heading);
// main_content.appendChild(new_phrase);

// var btn=document.getElementById('myBtn');
// btn.onclick=function()
// {
//     alert('Hello World!');
//     alert('Bye World');
// };

// function runMe()
// {
//     alert('Simple Message');
// }
// setTimeout(runMe,3000);

// function runMe()
// {
//     console.log('Hello');
// }
// setInterval(runMe,1000);

// var u_name=document.myForm.u_name;
// var u_pass=document.myForm.u_pass;

// var username="virat";
// var password="123";

// function runMe()
// {
//     if(u_name.value == username && u_pass.value ==password)
//     {
//         console.log('Login Success');
//     }
//     else
//     {
//         console.log('Login Error');
//     }
// }


// var u_name=document.myForm.u_name,message=document.getElementById("message");function runMe(){u_name.value.length<3?(message.innerHTML="need more characters",message.style.color="red",u_name.style.backgroundColor="red",u_name.style.color="white"):5==u_name.value.length?(message.innerHTML="Nice,OK",message.style.color="green",u_name.style.backgroundColor="green",u_name.style.color="white"):u_name.value.length>=8&&(message.innerHTML="Limit Excedeed",message.style.color="orange",u_name.style.backgroundColor="orange",u_name.style.color="white")}
var u_name=document.myForm.u_name;
var message=document.getElementById('message');

function runMe()
{
    if(u_name.value.length <3)
    {
        message.innerHTML="need more characters";
        message.style.color="red";
        u_name.style.backgroundColor="red";
        u_name.style.color="white";
    }
    else
    if(u_name.value.length ==5)
    {
        message.innerHTML="Nice,OK";
        message.style.color="green";
        u_name.style.backgroundColor="green";
        u_name.style.color="white";
    }
    else 
    if(u_name.value.length >=8)
    {
        message.innerHTML="Limit Excedeed";
        message.style.color="orange";
        u_name.style.backgroundColor="orange";
        u_name.style.color="white";
    }
}
