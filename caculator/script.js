const btns = document.querySelectorAll('.btn')
const input = document.querySelector('input')
const result = document.querySelector('#result')
const clean = document.querySelector('#clean')
const del = document.querySelector('#delete')


let operation = ''

btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        if(btn.value !== '=' && btn.value !== 'ac' && btn.value !== 'delete' ){
            operation += btn.value
            input.value = operation
        }       
    })
})

result.addEventListener('click', ()=>{
    if (operation){
        const valueResult = eval(operation)
        input.value = valueResult
        operation = valueResult
   } else{
       input.value = operation
   }
})

clean.addEventListener('click', ()=>{
    operation = ''
    input.value = ''
})

del.addEventListener('click', () =>{
    if(input.value.length > 0){
        operation = operation.slice(0, -1);
        input.value = operation;
    }
   
})