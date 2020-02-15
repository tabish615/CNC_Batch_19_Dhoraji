// function makeitInvisble() {
//     document.getElementById('img1').className += " hidden"
// }

// function listStyle(){
//     var mystyle = document.getElementById('img1').style 
//     console.log(mystyle)
// }

// listStyle()

// function myFunc(ele){
//     console.log(ele)
// }

// function makeBig() {
//     document.getElementById("p1").style.fontSize = "2em";
//     var m = document.getElementById("p1").style.margin
//     console.log(m)
// }

// function myFunc2(){
//     var paras = document.getElementsByTagName("p");
//     // console.log(paras)
//     paras[1].innerHTML = "<img src="./images/01.png"/>"
// }

// myFunc2()

// function myFunc3() {
//     var div = document.getElementById('rules')
//     var paras = div.getElementsByTagName('p')
//     for (var i = 0; i < paras.length; i++) {
//         paras[i].style.backgroundColor = "blue";
//         paras[i].style.color = "white";
//     }
// }

// myFunc3()



// Q3 Asignment 43 to 48

var myIndexs = [0,1,2,3];
var myNames = ["Ali", "Rehan", "Aamir", "Taha"];
var myClass = [10,9,8,7] 

var ref = document.getElementById('myTableBody');

function tableGenerate(){
    for(var i = 0; i < myNames.length; i++){
        ref.innerHTML += `
            <tr id=${i}>
                <td>${myIndexs[i]}</td>
                <td>${myNames[i]}</td>
                <td>${myClass[i]}</td>
                <td><button onClick='del(${i})'>Delete</button></td>
            </tr>`
    }
}

tableGenerate()

function del(trID){
    myNames.splice(trID,1)
    myClass.splice(trID,1)
    ref.innerHTML = null
    tableGenerate()
}