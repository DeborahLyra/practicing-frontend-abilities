import { useState } from "react";

const Form = (props)=>{

    const [input, setInput] = useState({
        image: '',
        name: '',
        suit: '',
    })

    const handleInputChange = (event) => {
       const { target } = event // desestruturação para pegar o target do evento
       const  { name } = target
       const  { value } = target
       
            setInput({
                ...input,    //adicionar o valor ao estado, não sobrescrever 
               [name]: value,
                
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addCard(input)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                {/* for é uma palavra reservada, precisa ser o htmlFor */}
                <label htmlFor="image">Cole o link da nova carta:</label> <br/> 
                <input type="text" id="image" name="image" onChange={handleInputChange} value= {input.image}/>
            </div>

            <div>
                {/* for é uma palavra reservada, precisa ser o htmlFor */}
                <label htmlFor="name">Nome da carta</label> <br/> 
                <input type="text" id="name" name="name" onChange={handleInputChange} value= {input.name}/>
            </div>

            <div>
                {/* for é uma palavra reservada, precisa ser o htmlFor */}
                <label htmlFor="suit">Coisa que não sei:</label> <br/> 
                <input type="text" id="suit" name="suit" onChange={handleInputChange} value= {input.suit}/>
            </div>
            <input type="submit"/>
        </form>
        </>
    )
}

export default Form