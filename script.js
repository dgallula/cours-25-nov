//developper 1

const runCode = () => 
{
  let p = getRandomEventNumbersAfterDelay(1,20) 

p.then((data)=>

{
  console.log(data)
})

p.catch((err)=> 
{
  console.log(err)
})

console.log('end')

// developper 2 

const getRandomEventNumbersAfterDelay=(min,max)=> 
{
  return newPromise((resolve,reject) => 
  {

  setTimeout (()=> 
  {
     const num = Math.floor(Math.randon()*(max-min+1)) + min 
  
  console.log(num)
  
  if (num % 2 ===0 ) {
      resolve(num)
      } else if (num <100 ) {
        reject ("is out of range")
      } else {
        reject ("number is not even ")
      }
}, 300);  
 })
} 
