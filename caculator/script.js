const btns = document.querySelectorAll('.btn')
const input = document.querySelector('input')
const result = document.querySelector('#result')
const clean = document.querySelector('#clean')
const del = document.querySelector('#delete')
const msg = document.querySelector('.msg')


let operation = ''

btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        if(btn.value !== '=' && btn.value !== 'ac' && btn.value !== 'delete' ){
            operation += btn.value
            input.value = operation
            msg.classList.add('errNotShow')
            msg.classList.remove('errShow')
        }       
    })
})

result.addEventListener('click', ()=>{
    try{
        if (operation){
            const valueResult = eval(operation)
            input.value = valueResult
            operation = valueResult
       }
    }catch{
        msg.classList.remove('errNotShow')
        msg.classList.add('errShow')
    }
})

clean.addEventListener('click', ()=>{
    operation = ''
    input.value = ''
    msg.classList.add('errNotShow')
    msg.classList.remove('errShow')
})

del.addEventListener('click', () =>{
    if(input.value.length > 0){
        msg.classList.add('errNotShow')
        msg.classList.remove('errShow')
        operation = operation.slice(0, -1);
        input.value = operation;
    }
   
})