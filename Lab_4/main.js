let myFullName = "Alicia Afriyie" // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
document.querySelector(".header").innerHTML = myFullName + "\'s Lab 4\n";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
var paragraphone = document.createElement("paragraph1");
var paragraphtwo = document.createElement("paragraph2");
var paragraphonetext = document.createTextNode("paragraph1");
var paragraphtwotext = document.createTextNode("paragraph2");
paragraphone.appendChild(paragraphonetext);
paragraphtwo.appendChild(paragraphtwotext);
var newcontentparagraphs = document.querySelector(".content");
newcontentparagraphs.appendChild(paragraphone);
newcontentparagraphs.appendChild(paragraphtwo);
paragraphone.className = "content1"
paragraphtwo.className = "content2"

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).

var paragraph = "my name has " + myFullName.length + " characters.";
paragraphone.append(paragraph);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name

var three = " the third charater of my first name is  " + myFullName.charAt(2);
paragraphtwo.append(three);

// 6 Add a new line to your second paragraph

paragraphtwo.append("\n");

// 7 Return the final three characters of your last name to that new line

var final = ", the last three charaters of my last name is  " + myFullName.substring(myFullName.length - 3, myFullName.length);
paragraphtwo.append(final);


// 8 Substring your first and last name into two separate variables

var first = myFullName.substring (0,5)
var last = myFullName.substring(7,13)

// 9 Add the total length of your first and last names together

var total = first.length + last.length;

// 10 Display that total next to your name in your header
document.querySelector(".header").append("The length of my name is: " + total);
