var canvas = document.getElementById('chart')
var ctx = canvas.getContext('2d')
var list = []
var list2 = []
var d1 = []
function getFactors(to_num){
    for(var num = 0; num < to_num; num++){
        list2.push(num)
        var num_list = []
        num_list.push(1)
        num_list.push(num)
        for(var second_num = 0; second_num < (num>20?Math.ceil(Math.sqrt(num)) + 1:num); second_num++){
            
            for(var third_num = 0; third_num < num; third_num ++){
                // console.log(second_num * third_num)
                if(second_num * third_num == num){
                    // console.log('e')
                    if(!num_list.includes(second_num) && !num_list.includes(third_num)){
                        num_list.push(second_num)
                        num_list.push(third_num)
                    }
                        
                }
            }
        }
        list.push(num_list)
    }
    list.forEach(item=>{
        d1.push(item.length)
    })
    set()
}

function set(){
    const chart = new Chart(ctx, {
    type: 'line',
    data:{
        labels: list2,
        datasets:[
            {
                label: 'D1',
                data: d1,
                borderColor: 'blue',
                borderWidth: 2,
                fill: false,
                pointBorderColor: (context)=>{
                    // const value = context.dataset.data[context.dataIndex];
                    const value = context.dataIndex
                    // console.log(context)
                    return value%12==0 ? 'red' : 'green';
                }
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
            callbacks: {
                label: (tooltipItem) => {
                    return `Value: ${tooltipItem.formattedValue}`;
                }
            }
            }
        }
    }
})
}
getFactors(500)
// 10 10 5 66ddff