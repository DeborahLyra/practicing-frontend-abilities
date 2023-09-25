const btns = document.querySelectorAll('.btn')
const input = document.querySelector('input')
const result = document.querySelector('.result')
const clean = document.querySelector('#clean')


let operation = ''

btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        if(btn.innerHTML !== '=' && btn.innerHTML !== 'ac' ){
            operation += btn.innerHTML
            input.value = operation
        }       
    })
})

result.addEventListener('click', ()=>{
    if (operation){
        const valueResult = eval(operation)
        input.value = valueResult
   } else{
       input.value = operation
   }
})

clean.addEventListener('click', ()=>{
    operation = ''
    input.value = ''
})