var nav = document.getElementById('nav')
var links = ['/index.html', '/page_files/index.html', '/page_files/gaussian_jordan_elimination.html', '/page_files/unit1/ex/unit1_exercise.html', "/page_files/unit1/project/unit1_project.html", '/page_files/unit2/project/index.html', '/page_files/unit2/project/page1.html', '/page_files/unit2/project/page2.html', '/page_files/unit2/project/page3.html', '/page_files/unit2/project/combined_code.txt']


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
            span.style.position = 'relative'
            // span.href = link
            // span.disabled
            span.style.color = 'red'
            var s = link
            var count = 0
            for(var i = 0; i < link.length; i++){
                if(link[i] == '/'){
                    count++
                }
            }
            span.style.left = `${30*count}px`
            s = link.replace('/', '') 
            span.textContent = s
            //use at to change the path to a relative path from the file so that it works on local and on github
           //s.replace('page_files/', '')
            li.appendChild(span)
            nav.appendChild(li)
        } else {
            var li = document.createElement('li')
            var a = document.createElement('a')
            a.href = link
            a.style.position='relative'
            var count = 0
            for(var i = 0; i < link.length; i++){
                if(link[i] == '/'){
                    count++
                    
                }
            }
            a.style.left = `${30*count}px`

            var s = link.replace('/', '')
            //use at to change the path to a relative path from the file so that it works on local and on github
            a.textContent = s //s.replace('page_files/', '')
            li.appendChild(a)
            nav.appendChild(li)
        }
    })
}