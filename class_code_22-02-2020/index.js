
        // DOM Chapter 58 to 68


        var p = document.childNodes[0].childNodes[1].childNodes[0]
        // console.log(p.nodeType)

        // var content = p.innerHTML
        // console.log(content)

        var content = p.childNodes[0]
        // console.log(content.nodeType)

        // var para = document.getElementById('p1')
        // console.log("nodeType = ", para.nodeType)
        // console.log("nodeName = ", para.nodeName)

        // var typeOne = para.childNodes[0];
        // var typeTwo = para.firstChild
        // console.log("nodeValue = ", typeOne.nodeValue)

        var para = document.getElementById('p1')

        // console.log("hasAttribute", para.hasAttribute())
        // para.setAttribute('class', 'special classOne')
        // console.log("getAttribute", para.getAttribute('class'))

        // var img = document.getElementById('myImg')

        // console.log('attributes', img.attributes)


        var myDiv = document.getElementById('div2')
        var nodeToAdd = document.createElement("p");
        nodeToAdd.setAttribute("class", "regular");
        var newTxt = document.createTextNode("Hello!");
        nodeToAdd.appendChild(newTxt);

        var paraOne = myDiv.firstChild
        myDiv.insertBefore(nodeToAdd, paraOne)

        console.log(myDiv.childNodes)
        // myDiv.removeChild(myDiv.lastChild)

