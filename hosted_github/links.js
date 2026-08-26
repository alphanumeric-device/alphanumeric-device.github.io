var nav = document.getElementById('nav')
var links = ['./page_files/page1.html']

window.onload = ()=>{
    links.forEach((link,i)=>{
        var li = document.createElement('li')
        var a = document.createElement('a')
        a.href = link
        a.textcontent = link.replace('./page_files/', '')
        li.appendChild(a)
        nav.appendChild(li)
    })
}