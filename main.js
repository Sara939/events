// 1:
// function alertmsg(){
//     alert("welcom");
// }
// 2:
// function timefunc(){
//     var time= new Date();
//     console.log(time);
// }
// 3:
// function colorchng(){
//     var mytag= document.getElementById("myh3");
//     mytag.style.color = "red";
// 4:
// function widthchng(){
//     var mine= document.getElementById("mybutton");
//     mine.style.width= "500px";

// }
// 5:
// function chng(){
//     var othertext= document.getElementById("mytext");
//     othertext.textContent = "this new text";
// }
// 6:

// function getname(){
//     var username= prompt("enter your name");
//     document.write(username);
// }
// function print(){
//     var whenpreesed= document.getElementById("click");
//     getname();
    
// }
// 7:
//     var myobje= document.getElementById("mydate");
//     var currenttime= new Date().getHours();
// window.onload= function windcolor(){
//     if (currenttime < 17){
//         myobje.style.backgroundColor = "yellow";

//     }
//     else{
//         myobje.style.backgroundColor = "blue";
// }
// windgreeding();
// }

///////////////////////////////////////////////////////////////
// function windgreeding(){
//     var greed= document.getElementById("mydate");
//     if (currenttime < 12){
//         greed.innerHTML = "good day";
//         document.write(greed);

//     }
//     else{
//         greed.innerHTML =" good evening";
//         document.write(greed);
//     }

// }
// 8:
var userage= +prompt("enter your age");

window.onload= function startage(){
    document.write("welcom");
}
msgred= document.getElementById("mydiv").addEventListener("load",getage);

 function getage(){
    if(userage>18){
        msgred=document.getElementById("mydiv");
        msgred.style.color = "red";
    }
    else{  
        msgred.style.color = "green";
    }
    
}

msgred= document.getElementById("mydiv").addEventListener("mouseover",chgcolor);
function chgcolor(){
   
    msgred.style.color = "green";
}
