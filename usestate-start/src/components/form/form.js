import { useState } from "react";

const Form = (props)=>{

    const [input, setInput] = useState({
        image: ''
    })

    const handleInputChange = (event) => {
            setInput({
                image: event.target.value
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
            <input type="submit"/>
        </form>
        </>
    )
}

export default Form