var textIn = document.getElementById('txt')
var outshow = document.getElementById('showtodo')
function addto(){

    var txtval = document.createTextNode(textIn.value)
    var ulval = document.createElement('li')
    ulval.className = "fon"
    ulval.appendChild(txtval)
    outshow.appendChild(ulval)

    var delbut = document.createElement('button')
    delbut.className = "bt"
    delbut.setAttribute('onclick', 'del(this)')
    var deltxt = document.createTextNode('delete')
    delbut.appendChild(deltxt)
    ulval.appendChild(delbut)


    var edit = document.createElement('button')
    edit.className = "bt"
    edit.setAttribute('onclick', 'edit(this)')
    var edittxt = document.createTextNode('Edit')
    edit.appendChild(edittxt)
    ulval.appendChild(edit)


    textIn.value = ''

}

function del(pera){
    var toto = pera.parentNode.remove()
}

function edit(per){
    per.parentNode.childNodes[0].nodeValue = prompt("edit")
    
}

function delall(){
    var delul = document.getElementById('showtodo')
    delul.innerHTML = ""
}