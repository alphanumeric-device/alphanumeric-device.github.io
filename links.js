var nav = document.getElementById('nav')
var links = ['/index.html', '/page_files/index.html']

window.onload = ()=>{
    
    links.forEach((link, i)=>{
        var href = window.location.href
        // var mod_href = link.includes('/')?link.replace('../', ''):link.replace('./', '')
        var mod_href = href
        for(var i = 0; i < 2; i++){
            mod_href = mod_href.replace('/', '')
        }
        mod_href = mod_href.split('/', 2)[2]
        
        if(mod_href==link.replace('/', '')){//needs to ignore linking the page if it is the page itself
            console.log('Skipping file')
        } else {
            var li = document.createElement('li')
            var a = document.createElement('a')
            a.href = link
            var s = link.replace('/', '')
            //use at to change the path to a relative path from the file so that it works on local and on github
            a.textContent = s //s.replace('page_files/', '')
            li.appendChild(a)
            nav.appendChild(li)
        }
    })
}