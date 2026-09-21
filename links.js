var style = document.createElement('style')
style.textContent = `notification-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 300px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .notification {
            background-color: #333;
            color: white;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transform: translateX(100%);
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
            position: relative;
        }

        .notification.show {
            opacity: 1;
            transform: translateX(0);
        }

        .notification-close {
            position: absolute;
            top: 5px;
            right: 10px;
            color: #aaa;
            cursor: pointer;
            font-size: 20px;
        }

        .notification-close:hover {
            color: white;
        }
        #second{
            white-space: pre-line;
        }
`
document.head.appendChild(style)

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
var links = ['/index.html', '/page_files/index.html', '/page_files/gaussian_jordan_elimination.html', '/page_files/unit1/ex/unit1_exercise.html', "/page_files/unit1/project/unit1_project.html", '/page_files/unit2/project/index.html', '/page_files/unit2/project/page1.html', '/page_files/unit2/project/page2.html', '/page_files/unit2/project/page3.html', '/page_files/unit2/project/combined_code.txt', '/page_files/codepen_challenge/index.html', '/page_files/unit3/unit3_exercises/exercise1.html', '/page_files/unit3/unit3_exercises/exercise2.html', '/page_files/unit3/unit3_exercises/exercise3.html', '/page_files/unit3/unit3_exercises/unit3_exercises.zip', '/page_files/unit3/unit3_project/index.html', '/page_files/unit4/exercise/unit4_ex.zip', '/page_files/unit4/exercise/unit4_ex5.css', '/page_files/unit4/exercise/unit4_ex5.html', '/page_files/unit4/exercise/unit4_ex6.css', '/page_files/unit4/exercise/unit4_ex6.html', '/page_files/unit4/exercise/unit4_exercise1.css', '/page_files/unit4/exercise/unit4_exercise1.html', '/page_files/unit4/exercise/unit4_exercise2.css', '/page_files/unit4/exercise/unit4_exercise2.html', '/page_files/unit4/exercise/unit4_exercise3.css', '/page_files/unit4/exercise/unit4_exercise3.html', '/page_files/unit4/exercise/unit4_exercise4.css', '/page_files/unit4/exercise/unit4_exercise4.html', '/page_files/unit4/project/unit4_project.html']
var directory = {}


var final_array = []
// var final_array = {}
var dir = {}
var dir_key = {}
var official_dir = {}
var elementDir = {}
links.forEach((link, i)=>{
        var t = link.replace('/', '').split('/')
        dir[`a${i}`] = [t, link]
        // showMsg()
    })
var unique_counter = 0
var item_array = []
var id = 0


for(var i = Object.values(dir).length - 1; i >= 0; i--){
    var ref = Object.values(dir)[i][0]
    for(var i2 = ref.length - 1; i2 >= 0; i2--){
        id ++
    }
}

for(var i = Object.values(dir).length - 1; i >= 0; i--){
    var ref = Object.values(dir)[i][0]
    var array = []
    
    for(var i2 = ref.length - 1; i2 >= 0; i2--){
        var innerRef = ref[i2]
        array.unshift([innerRef, id, Object.values(dir)[i][1]])
        id --
    }
    item_array.unshift(array)
}


for(var i = 0 ; i < item_array.length; i++){
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

for(var i = item_array.length - 1; i >= 0; i--){
            var ref = item_array[i]
            
            
            for(var i2 = 0; i2 < ref.length; i2++){
                var innerRef = ref[i2]
                    official_dir[innerRef[1]] = [innerRef[0], 0, 0, 0, '', false, innerRef[2]]
                    if(Object.values(dir_key).length > 0){
                        Object.entries(dir_key).forEach((item, i3)=>{
                            
                            //check that inner ref is equal to the thing we are looking at. then, check if the item before it exists, if so, then they will run the logic below, modified for this version
                            
                                if(item_array[i][i2 - 1]){
                                    dir_key[innerRef[1]] = item_array[i][i2-1][1]
                                    // dir_key[item_array[i][i2-1][1]][1] += 1
                                } else {
                                    dir_key[innerRef[1]] = 0
                                }
                            
                        
                        })
                        
                    } else {
                        dir_key[innerRef[1]] = 0
                    }
                    
                // id --
            }
            
}
function getPixels(){
    var folders = []
    Object.entries(dir_key).forEach(item=>{
        if(official_dir[item[1]]){
            official_dir[item[1]][2] += 1
        }
    })
    Object.entries(dir_key).forEach(item=>{
        if(official_dir[item[1]]){
            // if(official_dir[item[1]][2] > 0){
            official_dir[item[0]][4] = official_dir[item[1]][0]
            if(official_dir[item[0]][4].length > 0){
                if(official_dir[item[1]][3] == 0){
                    official_dir[item[0]][3] = 1
                }
                official_dir[item[0]][3] += official_dir[item[1]][3] + 1
            }
                
            // }
            
        }
    })
}
function get_type(num){
    official_dir[num[0]][5] = 1
    links.forEach(link=>{
            // if(official_dir[num[0]][5]==false){
                if(official_dir[num[0]][0] == link.slice(link.lastIndexOf('/')+1, link.length)){
                    official_dir[num[0]][5] = 0
                    return
                }
            // }
            
         })
}
//     showMsg('eee', 11)
//     var max = 0
//     item_array.forEach(array=>{
//         if(array.length > max){
//             max = array.length
//         }
//     })


// for(var big_array = 0; big_array < item_array.length - 1; big_array++){
//     for(var small_array = 0; small_array < item_array[big_array].length - 1; small_array++){//here, we grab the parent. what we want to look for in all other arrays
//         var ref = item_array[big_array][small_array]
//         console.log(ref)
//         if(ref){
//             for(var ba_2 = big_array+1; ba_2 < item_array.length - 1; ba_2++){//now we are looking through each big array for comparing
//                 for(var sa_2 = 0; sa_2 < item_array[ba_2].length-1; sa_2++){//looking at sa_2 ind items
//                     var target = item_array[ba_2][sa_2]
//                     if(target){
//                         console.log('s')
//                         //careful of items not existing at indexes as arrays vary in len
//                         if(ref[1]==target[1]){//if top item == target item
//                             //want to modify both the top and target
//                             //top should have items below target spliced into it (del count 0 to add with 3rd param)
//                             // second.textContent += JSON.stringify("ss")
//                             // if(){
//                             item_array[big_array].splice(sa_2, 0, item_array[ba_2].slice(sa_2 + 1, item_array[ba_2].length))//adds one item at a time
//                             item_array[ba_2].splice(sa_2, item_array[ba_2].length)
//                             // }
//                         }
                            
                            
                        
//                     }
                    
//                 }
//             }
//         }
//     }
    
// }
// var new_item_array = item_array.filter(e=>e.length > 0)

// new_item_array = new_item_array.map(array=>{
//     if(array.length > 1 && typeof(array[0][0])=='object'){
//         return array.flat(1)//flattens the last array into array with the names and ids put together. not what we want ['rrr', 404, 'tof', 747, ...]
//     } else {
//         return array
//     }
// })

    // second.textContent += JSON.stringify(item_array)
// var reach = 0
// for(var col = 0; col < max-1; col++){
//     for(var row = item_array.length-1; row > 0; row--){
//         if(item_array[row-1] && item_array[row][col+reach] && item_array[row-1][col+reach]){
//             // showMsg(item_array[row+1][col][1], 100)
            
//             if(item_array[row-1][col+reach][1] == item_array[row][col+reach][1]){
//                 //shove the stuff under this into the stuff under the other one
//                 var a = true
//                 var count = 0
//                 while(a == true){
//                     if(item_array[row-1][col+count+1+reach][1] == item_array[row][col+count+1+reach][1]){
//                         a = true
                       
//                     } else {
//                         a = false
//                         break
//                     }
//                     count++
//                     if(count > 1000){
//                         break
//                     }
//                 }
//                 var new_array = []//has the items to be added 
//                 new_array = item_array[row].slice(col+count+1+reach, item_array[row].length)
//                 new_array.forEach((item,i)=>{
//                     for(var t = 0; t < item_array[row-1].length-1; t++){
//                         if(item[1]==item_array[row-1][t][1]){
//                             new_array.splice(i, 1)
//                         }
//                     }
                    
//                 })
//                 // showMsg(new_array, 100)
//                 item_array[row-1].splice(col+1+reach, 0, new_array)
//                 item_array[row].splice(col+reach, item_array[row].length - col - reach)
//                 if(item_array[row].length < 1){
//                     item_array.splice(row, 1)
//                 }
//             } 
            
//         }
        
//     }
// }



// }

// var split = item_array.flat(1)
// var id1 = []
// var id2 = []
// for(var i = 0; i < split.length - 1; i++){
//     id1.push(split[i][0])
//     id2.push(split[i][1])
// }
// for(var i = 0; i < split.length; i++){//looking at the entire array
//     var looking_for = id2[i]
//     for(var ind = 0; ind < split.length - 1; ind++){
        
//             //would be numbers
//             split.splice(id2.indexOf(looking_for, i+1), 1)//kill the entry index corrosponding to that in split
        
        
//     }
    
// }

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
// var fullList
// Object.values(dir).forEach(item=>{

// })
window.onload = ()=>{
    getPixels()
    Object.entries(dir_key).forEach((num, i)=>{//[index, pathname, px]
       //gets the first entry (the key), and chooses the second item (the proper diplsay name). if 0, then path
    //    var directory_link = official_dir[num[0]]
        var li = document.createElement('li')
         var span = document.createElement('span')
         var a = document.createElement('a')
         get_type(num)
         if(official_dir[num[0]][5]==0){
             official_dir[num[0]][1] = a
                a.style.position = 'relative'
                a.style.color = 'red'
                a.style.textDecoration = 'none'
                //    span.style.left = `${official_dir[num[0]][3]*30}px` 
                for(var i = 0; i < official_dir[num[0]][3]*5; i++){
                    a.textContent += '-'
                }
                
                a.textContent += official_dir[num[0]][0]
                a.href = official_dir[num[0]][6]
                li.appendChild(a)
                
         } else {
            official_dir[num[0]][1] = span
            span.style.position = 'relative'
            span.style.color = 'black'
                
            //    span.style.left = `${official_dir[num[0]][3]*30}px` 
            for(var i = 0; i < official_dir[num[0]][3]*5; i++){
                span.textContent += '-'
            }
            
            span.textContent += official_dir[num[0]][0]
            
            li.appendChild(span)
         }
        
            
            
            nav.appendChild(li)
    })
    //  links.forEach((link, i)=>{
    
    //     var href = window.location.href
    //     // var mod_href = link.includes('/')?link.replace('../', ''):link.replace('./', '')
    //     var mod_href = href
    //     for(var i = 0; i < 2; i++){
    //         mod_href = mod_href.replace('/', '')
    //     }
        
    //     mod_href = mod_href.slice(mod_href.indexOf('/'))
        
    //     if(mod_href==link){//needs to ignore linking the page if it is the page itself
    //         console.log('Skipping file')
    //         var li = document.createElement('li')
    //         var span = document.createElement('span')
    //         span.style.position = 'relative'
    //         // span.href = link
    //         // span.disabled
    //         span.style.color = 'red'
    //         var s = ""
            
    //         var count = 0
    //         for(var i = 0; i < link.length; i++){
    //             if(link[i] == '/'){
    //                 count++
    //             }
    //         }
    //         // var linkPath = link.replace('/', '').split('/')
    //         span.style.left = `${30*count}px`
            
            


    //         s = link.replace('/', '') 
    //         span.textContent = s
    //         //use at to change the path to a relative path from the file so that it works on local and on github
    //        //s.replace('page_files/', '')
    //         li.appendChild(span)
    //         nav.appendChild(li)
    //     } else {
    //         var li = document.createElement('li')
    //         var a = document.createElement('a')
    //         a.href = link
    //         a.style.position='relative'
    //         var count = 0
    //         for(var i = 0; i < link.length; i++){
    //             if(link[i] == '/'){
    //                 count++
                    
    //             }
    //         }
    //         a.style.left = `${30*count}px`


    //         var s = link.replace('/', '')
    //         //use at to change the path to a relative path from the file so that it works on local and on github
    //         a.textContent = s //s.replace('page_files/', '')
    //         li.appendChild(a)
    //         nav.appendChild(li)
    //     }
        
    // var li = document.createElement('li')
    //         var a = document.createElement('a')
    //         a.href = link
    //         a.style.position='relative'
    //         Object.entries(dir).forEach(path=>{//entire path
    //             path[1].forEach((path2, i)=>{//specific file
    //                 if(path2 == path[1][path[1].length-1]){//ignore the last index
    //                     a.style.left = `${30}px`
    //                 }
    //             })
    //         })
    //         var s = link.replace('/', '')
    //         //use at to change the path to a relative path from the file so that it works on local and on github
    //         a.textContent = s //s.replace('page_files/', '')
    //         li.appendChild(a)
    //         Object.entries(elementDir).forEach(element=>{
    //             //['path name'] = [li element]
    //             var t = link.replace('/', '').split('/')
    //             for(var i = t.length - 1; i >= 0; i--){
    //                 if(t[t.length - i] == element[0]){
    //                     console.log('mm')
    //                     element[1].appendChild(li)
    //                 }
    //             }
                
    //         })
    // })
}




    // second.textContent = `dir: ${JSON.stringify(dir, null, 2)}\n
    // item_array: ${JSON.stringify(item_array, null)}\n
    // `


