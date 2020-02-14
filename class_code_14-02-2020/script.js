
// function checkEmail(elemId) {
//     var val = document.getElementById(elemId).value
//     if (val === "") {
//         alert("Empty Email field!")
//     }
//     else {
//         alert("Thank you!")
//     }
// }

// function fillCity() {
//     var cityName;
//     var zipEntered = document.getElementById("zip").value;
//     switch (zipEntered) {
//         case "60608":
//             cityName = "Chicago";
//             break;
//         case "68114":
//             cityName = "Omaha";
//             break;
//         case "53212":
//             cityName = "Milwaukee";
//             break;
//         default:
//             cityName =" zip is not valid!"    
//     }
//     document.getElementById("city").value = cityName;
// }

// var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which"+
// "make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of"+
// "distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several"+
// "adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time."+
// "Slow lorises have a toxic bite, a rare trait among mammals.<a href='javascript:void(0);' onClick='lessLoris();'><em>"+
// "Click for less.</em></a>"

// var lessText ="Slow lorises are a group of several species of trepsirrhine primates which"+
// "make up the genus Nycticebus.<a href='javascript:void(0);' onClick='expandLoris();'><em>"+
// "Click for more.</em></a>"

// function  expandLoris(){
//     document.getElementById("slowLoris").innerHTML = expandedParagraph
// }

// function  lessLoris(){
//     document.getElementById("slowLoris").innerHTML = lessText
// }

// var myImages = ['images/01.png', 'images/02.png', 'images/06.png']

// var i = 0;

// function swapImages(swap){
//     if(swap === '+'){
//         if(i === myImages.length -1) {
//             i = 0
//         }
//         else {
//             i++
//         }
//         document.getElementById('imag').src = myImages[i]
//     }
//     else {
//         if(i === 0){
//             i = myImages.length -1
//         }
//         else {
//             i--
//         }
//         document.getElementById('imag').src = myImages[i]
//     }
// }