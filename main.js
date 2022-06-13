// // 1:
// // function alertmsg(){
// //     alert("welcom");
// // }
// // 2:
// // function timefunc(){
// //     var time= new Date();
// //     console.log(time);
// // }
// // 3:
// // function colorchng(){
// //     var mytag= document.getElementById("myh3");
// //     mytag.style.color = "red";
// // 4:
// // function widthchng(){
// //     var mine= document.getElementById("mybutton");
// //     mine.style.width= "500px";

// // }
// // 5:
// // function chng(){
// //     var othertext= document.getElementById("mytext");
// //     othertext.textContent = "this new text";
// // }
// // 6:

// // function getname(){
// //     var username= prompt("enter your name");
// //     document.write(username);
// // }
// // function print(){
// //     var whenpreesed= document.getElementById("click");
// //     getname();
    
// // }
// // 7:
// //     var myobje= document.getElementById("mydate");
// //     var currenttime= new Date().getHours();
// // window.onload= function windcolor(){
// //     if (currenttime < 17){
// //         myobje.style.backgroundColor = "yellow";

// //     }
// //     else{
// //         myobje.style.backgroundColor = "blue";
// // }
// // windgreeding();
// // }

// ///////////////////////////////////////////////////////////////
// // function windgreeding(){
// //     var greed= document.getElementById("mydate");
// //     if (currenttime < 12){
// //         greed.innerHTML = "good day";
// //         document.write(greed);

// //     }
// //     else{
// //         greed.innerHTML =" good evening";
// //         document.write(greed);
// //     }

// // }
// // 8:///////////////////////////////////////////////////////////////////////////////////////
// // var userage= +prompt("enter your age");

// // function startage(){
// //     document.write("welcom");
// // }
// // msgred= document.getElementById("mydiv").addEventListener("load",getage);

// //  function getage(){
// //     if(userage>18){
// //         msgred=document.getElementById("mydiv");
// //         msgred.style.color = "red";
// //     }
// //     else{  
// //         msgred.style.color = "green";
// //     }
    
// // }

// // msgred= document.getElementById("mydiv").addEventListener("mouseover",chgcolor);
// // function chgcolor(){
   
// //     msgred.style.color = "green";
// // }

// // 9://////////////////////////////////////////////////////////////////////////////

// // function myinput(){
// //     if(){
// //     var usersinput = document.getElementById("myInput");
// //     document.write(usersinput.value);
// //     }

// // }

// function rannum(){
//     var mynum=[];
//     for(var i= 0; i<5; i++){
//        mynum= Math.floor(Math.random() * 57);
//        document.getElementById("myh1").innerText+= mynum;
//     }
    
// }

// // function mylotu(){
// //     myinput();
// //     rannum();
// //     if(mynum[i]==usersinput[i]){
// //         document.write("sucsess"); 
// //     }
// //     else{
// //         document.write("fail");
// //     }
// // }

// // mylotu();


// 2.6.22: 

    
// function recivenameandbday(){
//     var uName= document.getElementById("usersname").value;
//     var bDay= document.getElementById("usersbday").value;
//     var usersdate= new Date(bDay);
//     var nowdate= new Date();
//     var myelm= document.getElementById("mydiv");
//     var sara= nowdate - usersdate;

//     if (nowdate.getFullYear()-usersdate.getFullYear() > 18){
//         myelm.innerHTML= "welcom";
//         myelm.style.color= "blue"; 
//     }
//     else{
//         myelm.innerHTML= "no entre";
//         myelm.style.color= "red";
//         myelm.innerHTML= "<img src='mypic.jpg'>";
//     }
// }

// recivenameandbday();


// function changtogreen(){
//     // document.getElementById("h1_id").innerHTML = "hey you";
//     document.getElementById("h1_id").style.color= "green";

// }

//     var myBtn= document.getElementById("clickbtn");  
//     myBtn.onclick= function namesfunction(){ 
//     document.getElementById("mylist").innerHTML+="<li>"+ inputvalue+ "</li>";
        
// }
    // var arrayvalue= [];
    // var myvalue= document.getElementById("mynamesinput").value;
    // function saveval(){

    //     for(var i=0; i<4; i++){
    //         arrayvalue+= myvalue;
    //     }
        
    // }
    
    // function namesfunction(){ 
    //     document.getElementById("mylist").innerHTML+="<li>"+ arrayvalue +"</li>";
    // }

    // var myBtn= document.getElementById("clickbtn"); 
    // myBtn.addEventListener("click",namesfunction);
    