var myElement = ""

function showInput(ele) {
        document.getElementById('mydiv').className = 'show'
        myElement = ele;
}

function createEle() {
        var userAsk = prompt("What color do you show?", "black")
        
        var parentDiv = document.getElementById('mydiv2')

        var textValue = document.getElementById('myInputField').value
        
        var newHeading = document.createElement(myElement);

        newHeading.setAttribute('style', `color: ${userAsk};`)

        var textNode = document.createTextNode(textValue)

        newHeading.appendChild(textNode);
        
        parentDiv.appendChild(newHeading)
}