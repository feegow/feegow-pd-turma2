const arr = [1,2,3]

const varrerArr = function(item, index){
    console.log(item, index)
} 

arr.forEach(varrerArr)

arr.forEach((item, index) =>{
    console.log(item, index)
})

console.log(arr.map(item => ({item : item})))

for(let i=0;i<= arr.length;i++)
{

}