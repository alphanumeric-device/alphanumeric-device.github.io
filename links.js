var nav = document.getElementById('nav')
var links = ['./index.html', './page_files/index.html']

window.onload = ()=>{
    
    links.forEach((link,i)=>{
        if(window.location.href.includes('link')){
            console.log('Skipping file')
        } else {
            var li = document.createElement('li')
            var a = document.createElement('a')
            a.href = link
            a.textContent = link.replace('./page_files/', '')
            li.appendChild(a)
            nav.appendChild(li)
        }
    })
}