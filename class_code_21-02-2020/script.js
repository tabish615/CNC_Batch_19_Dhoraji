

// Q3 Asignment 49 to 52

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
                <td class="show" id="editId${i}"><button onClick='edt(${i})'>Edit</button></td>
                <td class="hide" id="inputId${i}"><input type="text" id="inputField${i}" /></td>
                <td class="hide" id="sbtId${i}"><button onClick='sbt(${i})'>Submit</button></td>

            </tr>`
    }
}

tableGenerate();

function del(delID){
    myNames.splice(delID,1);
    myClass.splice(delID,1);
    ref.innerHTML = null;
    tableGenerate();
}

function edt (edtID) {
    document.getElementById('inputId'+edtID).className = 'show';
    document.getElementById('sbtId'+edtID).className = 'show';
    document.getElementById('editId'+edtID).className = 'hide';

    var currentName = myNames[edtID];
    document.getElementById('inputField'+edtID).value = currentName;
}

function sbt (trID) {
    myNames[trID] = document.getElementById('inputField'+trID).value
    ref.innerHTML = null;
    tableGenerate();
}