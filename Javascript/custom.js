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

var main_content=document.getElementById('main-content');

var new_heading=document.createElement('h2');
var new_phrase=document.createElement('p');

new_heading.innerHTML='Welcome to GWSST';
new_phrase.innerHTML='This is a simple phrase just to show a demo';

main_content.appendChild(new_heading);
main_content.appendChild(new_phrase);