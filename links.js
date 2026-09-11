function showMsg(message, time) {
    // Ensure CSS is injected once
    if (!document.getElementById('notificationContainer')) {
        // injectNotificationCSS();
        const container = document.createElement('div');
        container.id = 'notificationContainer';
        container.classList.add('notification-container');
        document.body.appendChild(container);
    }


    const container = document.getElementById('notificationContainer');
    
    // Create the notification element
    const notification = document.createElement('div');
    notification.classList.add('notification');
    
    // Add close button and message content
    notification.innerHTML = `
        <span class="notification-close" onclick="this.parentElement.style.display='none';">&times;</span>
        <textarea>${message}</textarea>
    `;


    // Add to container and show it
    container.appendChild(notification);
    
    // Use a small timeout to allow CSS transition to work
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);


    // Automatically hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        // Remove from DOM after transition finishes (0.5s)
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500); 
    }, time*1000);
}
var nav = document.getElementById('nav')
var links = ['/index.html', '/page_files/index.html', '/page_files/gaussian_jordan_elimination.html', '/page_files/unit1/ex/unit1_exercise.html', "/page_files/unit1/project/unit1_project.html", '/page_files/unit2/project/index.html', '/page_files/unit2/project/page1.html', '/page_files/unit2/project/page2.html', '/page_files/unit2/project/page3.html', '/page_files/unit2/project/combined_code.txt']
var directory = {}


var final_array = []
// var final_array = {}
var dir = {}
var dir_key = {}
var elementDir = {}
links.forEach((link, i)=>{
        var t = link.replace('/', '').split('/')
        dir[`a${i}`] = t
        // showMsg()
    })
var unique_counter = 0
var item_array = []
var id = 0


for(var i = Object.values(dir).length - 1; i >= 0; i--){
    var ref = Object.values(dir)[i]
    for(var i2 = ref.length - 1; i2 >= 0; i2--){
        id ++
    }
}


for(var i = Object.values(dir).length - 1; i >= 0; i--){
    var ref = Object.values(dir)[i]
    var array = []
    
    for(var i2 = ref.length - 1; i2 >= 0; i2--){
        var innerRef = ref[i2]
        array.unshift([innerRef, id])
        id --
    }
    item_array.unshift(array)
}


for(var i = 0 ; i < item_array.length-1; i++){
    var ref = item_array[i]
    
    var array = []
    
    for(var i2 = 0; i2 < item_array[i].length - 1; i2++){
        // showMsg(`${item_array[i][i2]}:${i2}`, 100)
        //item_array[i][i2] : [page_files, 0]
        
        if(item_array[i-1][i2]){
            
            if(item_array[i][i2][0] == item_array[i-1][i2][0]){//if they are the same name.
                // second.textContent += `${item_array[i][i2][0]}:${item_array[i-1][i2][0]}\n`
                if(item_array[i][i2-1] && item_array[i-1][i2 - 1]){
                    
                    // second.textContent += `${item_array[i][i2][0]}:${item_array[i-1][i2][0]}\n`
                    if(item_array[i][i2-1][0] == item_array[i-1][i2-1][0]){//for those like project who might be the same and whatever
                        //if they are the same with the same parent
                        
                        item_array[i][i2][1] = item_array[i-1][i2][1]
                        
                    } else {
                        // showMsg(`${item_array[i][i2-1]}:${item_array[i-1][i2-1]}\n${item_array[i][i2]}:${item_array[i-1][i2]}`, 100)
                    }
                } else {//it is the page files thing
                    item_array[i][i2][1] = item_array[i-1][i2][1]
                    
                }
                
            }
        }
        // second.textContent += `${item_array[i][i2]}\n`
    }
    // item_array.unshift(array)
}
    showMsg('eee', 11)
    var max = 0
    item_array.forEach(array=>{
        if(array.length > max){
            max = array.length
        }
    })
    
for(var col = 0; col < max-1; col++){
    for(var row = item_array.length-1; row > 0; row--){
        if(item_array[row-1] && item_array[row][col] && item_array[row-1][col]){
            // showMsg(item_array[row+1][col][1], 100)
            
            if(item_array[row-1][col][1] == item_array[row][col][1]){
                //shove the stuff under this into the stuff under the other one
                var a = true
                var count = 0
                while(a == true){
                    if(item_array[row-1][col+count+1][1] == item_array[row][col+count+1][1]){
                        a = true
                       
                    } else {
                        a = false
                        break
                    }
                    count++
                    if(count > 1000){
                        break
                    }
                }
                var new_array = []//has the items to be added 
                new_array = item_array[row].slice(col+count+1, item_array[row].length)
                new_array.forEach((item,i)=>{
                    for(var t = 0; t < item_array[row-1].length-1; t++){
                        if(item[1]==item_array[row-1][t][1]){
                            new_array.splice(i, 1)
                        }
                    }
                    
                })
                // showMsg(new_array, 100)
                item_array[row-1].splice(col+1, 0, new_array)
                item_array[row].splice(col, item_array[row].length - col)
                if(item_array[row].length < 1){
                    item_array.splice(row, 1)
                }
            } 
            
        }
        
    }
}
var item = null
for(var col = 0; col < max-1; col++){
    for(var row = item_array.length-1; row > 0; row--){
        var lvl = 0
        
        var e = 0
        var r = 0
        while(true){
            if(item){
                if(item[0]){//if the possible array under array
                    // item = item_array[row][col][0]
                    if(typeof(item[0])=='object'){
                        item = item[0]
                        console.log(item)
                    } else {
                        r++
                        item = item[r]
                        console.log('broke')
                        // break
                    }
                    
                } else {
                    break
                }
                
            } else {
                item = item_array[row][col]
            }
            e ++
            if(e > 1000){
                break
            }
        }
        
        
        
    }
}

// for(var row = 0; row < item_array.length - 1; row++){
//     for(var col = 0; col < item_array[row].length-1; col++){
//         for(var ind = 0; ind < item_array[row][col].length - 1; ind++){
//             if(item_array[row][col][1] == item_array[row][col][ind])
//         }
       
//     }

    
// }    

// second.textContent += `${JSON.stringify(final_array)}\n`

//  second.textContent += `${JSON.stringify(item_array, null, 65)}\n` 

// for(var i = 0; i < item_array.length - 1; i++){
//     //move all similar paths underneath the first folder instance
//     //or create a new array that has only the unique instances.
//     //go through the list. first array to next array. following arrays should check through established array for items with the same number. if they have th esame number, put anything under that folder under the established folder.
//     //should be able to navigate the entire structure
//     /*
//     [
//     [["index.html",1]],[
//     ["page_files",2],["index.html",3]],
//     [["page_files",2],["gaussian_jordan_elimination.html",5]],
//     [["page_files",2],["unit1",7],["ex",8],["unit1_exercise.html",9]],
//     [["page_files",2],["unit1",7],["project",12],["unit1_project.html",13]],
//     [["page_files",2],["unit2",15],["project",16],["index.html",17]],
//     [["page_files",2],["unit2",15],["project",16],["page1.html",21]],
//     [["page_files",2],["unit2",15],["project",16],["page2.html",25]],
//     [["page_files",2],["unit2",15],["project",16],["page3.html",29]],
//     [["page_files",30],["unit2",31],["project",32],["combined_code.txt",33]]
//     ] 
// [[["index.html",1]],
// [["page_files",2],[["gaussian_jordan_elimination.html",5]],["index.html",3]],
// [["page_files",2],
    //      [["project",12],["unit1_project.html",13]],
    // ["unit1",7],["ex",8],["unit1_exercise.html",9]],
// [["page_files",2],
//          [["project",16],["page1.html",21]],
//      ["unit2",15],[["page2.html",25]],["project",16],["index.html",17]],
// [["page_files",2],
//      [["project",16],["page3.html",29]]],
// [["page_files",30],["unit2",31],["project",32],["combined_code.txt",33]]]
//     */
// }


window.onload = ()=>{
    Object.values(dir_key).forEach(obj=>{//[index, pathname, px]
       //gets the first entry (the key), and chooses the second item (the proper diplsay name). if 0, then path
       
        var li = document.createElement('li')
         var span = document.createElement('span')
            span.style.position = 'relative'
            span.style.color = 'red'
            span.style.left = `${30*obj[2]}px`
            obj[2] = 30*obj[2]
            span.textContent = obj[1]
            li.appendChild(span)
            elementDir[obj[1]] = li
            nav.appendChild(li)
    })
    links.forEach((link, i)=>{
    /*
        var href = window.location.href
        // var mod_href = link.includes('/')?link.replace('../', ''):link.replace('./', '')
        var mod_href = href
        for(var i = 0; i < 2; i++){
            mod_href = mod_href.replace('/', '')
        }
        
        mod_href = mod_href.slice(mod_href.indexOf('/'))
        
        if(mod_href==link){//needs to ignore linking the page if it is the page itself
            console.log('Skipping file')
            var li = document.createElement('li')
            var span = document.createElement('span')
            span.style.position = 'relative'
            // span.href = link
            // span.disabled
            span.style.color = 'red'
            var s = ""
            
            var count = 0
            for(var i = 0; i < link.length; i++){
                if(link[i] == '/'){
                    count++
                }
            }
            // var linkPath = link.replace('/', '').split('/')
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
        */
    var li = document.createElement('li')
            var a = document.createElement('a')
            a.href = link
            a.style.position='relative'
            Object.entries(dir).forEach(path=>{//entire path
                path[1].forEach((path2, i)=>{//specific file
                    if(path2 == path[1][path[1].length-1]){//ignore the last index
                        a.style.left = `${30}px`
                    }
                })
            })
            var s = link.replace('/', '')
            //use at to change the path to a relative path from the file so that it works on local and on github
            a.textContent = s //s.replace('page_files/', '')
            li.appendChild(a)
            Object.entries(elementDir).forEach(element=>{
                //['path name'] = [li element]
                var t = link.replace('/', '').split('/')
                for(var i = t.length - 1; i >= 0; i--){
                    if(t[t.length - i] == element[0]){
                        console.log('mm')
                        element[1].appendChild(li)
                    }
                }
                
            })
    })
}




    // second.textContent = `dir: ${JSON.stringify(dir, null, 2)}\n
    // item_array: ${JSON.stringify(item_array, null)}\n
    // `





