var nav = document.getElementById('nav')
var links = ['../index.html', './page_files/index.html']

window.onload = ()=>{
    
    links.forEach((link,i)=>{
        var href = window.location.href
        var mod_href = link.includes('../')?link.replace('../', ''):link.replace('./', '')
        if(mod_href.includes(link)){
            console.log('Skipping file')
        } else {
            var li = document.createElement('li')
            var a = document.createElement('a')
            a.href = link
            var s = link.replace('./', '')
           
            a.textContent = s//s.replace('page_files/', '')
            li.appendChild(a)
            nav.appendChild(li)
        }
    })
}