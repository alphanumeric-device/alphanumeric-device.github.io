var nav = document.getElementById('nav')
var links = ['/index.html', '/page_files/index.html', '/page_files/gaussian_jordan_elimination.html']

window.onload = ()=>{
    
    links.forEach((link, i)=>{
        var href = window.location.href
        // var mod_href = link.includes('/')?link.replace('../', ''):link.replace('./', '')
        var mod_href = href
        for(var i = 0; i < 2; i++){
            mod_href = mod_href.replace('/', '')
        }
        console.log(mod_href)
        mod_href = mod_href.slice(mod_href.indexOf('/'))
        console.log(mod_href)
        if(mod_href==link){//needs to ignore linking the page if it is the page itself
            console.log('Skipping file')
            var li = document.createElement('li')
            var span = document.createElement('span')
            span.href = link
            span.disabled
            span.style.color = 'red'

            var s = link.replace('/', '')
            //use at to change the path to a relative path from the file so that it works on local and on github
            span.textContent = s //s.replace('page_files/', '')
            li.appendChild(span)
            nav.appendChild(li)
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