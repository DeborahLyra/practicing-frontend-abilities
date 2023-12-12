"use client";
import { useState, useEffect } from "react" 
import { api } from "../../services/api";

interface Livros { //aqui cira uma interface que vai servir de base para armazenar a lista
  id: number,
  titulo: string
}

export default function Home() {
  const [load, setLoad] = useState(false)
  const [textInput, setTextInput] = useState("")
  const [items, setItems] = useState<Livros[]>([])

 

  async function addItemLista(){ //essa função adiciona um item na lista
    const data = {titulo: textInput}

    try{
      const response = await api.post("/livros", data)
      console.log(response)
      loadLista()
    } catch(e){
      console.log("erro")
    }
  }

  async function loadLista(){  //essa função é a responsável por carregar a página, é ela que 
                              //faz com que a medida que os itens forem adicionados, vão aparecer simultaneamente
    setLoad(true)
    try {
      const response = await api.get("/livros")
    setItems(response.data)
    console.log(items)
    console.log(response.data)
    } catch (error) {
      console.log("erro")
    } finally{
      setLoad(false)
    }
  }

  useEffect(()=> {  //aqui usa o useEffect para a lista aparecer assim que carrega a página
    loadLista()
  }, [])

 async function deleteItem(id: number){ //essa a função responsável por deletar o item da lista
    await api.delete(`/livros/${id}`) 
    loadLista()
  }

  return (
    //logo abaixo é o input, nele chama a funcão setTextInput quando há mudanças nele, que armazena o valor escrito nele
    //depois tem o botão que chama a função addItemLista no onClick
    //depois vem a lisa, onde usa o map para adicionar diversos itens em cada li
    <>
    
    <h1>Lista de livros</h1>
      <input onChange={(e) => setTextInput(e.target.value)} type="text" placeholder="digite um título aqui"/> <br/><br/>
      
      <button onClick={addItemLista}>clique para adicionar</button>
      <span>{load && "carregando"}</span>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.titulo}
            <button onClick={()=>{deleteItem(item.id)}}>deletar</button>
            </li>
          
        ))}
      </ul>

    </>
  )
}
