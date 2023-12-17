"use client";
import { useState, useEffect } from "react"
import { api } from "../../services/api";


interface Livros { //aqui cira uma interface que vai servir de base para armazenar a lista
  id: number,
  titulo: string
  isEditing: boolean,
}

export default function Home() {
  const [load, setLoad] = useState(false)
  const [textInput, setTextInput] = useState("")
  const [items, setItems] = useState<Livros[]>([])



  async function addItemLista() { //essa função adiciona um item na lista
    const data = { titulo: textInput }

    try {
      const response = await api.post("/livros", data)
      console.log(response)
      loadLista()
    } catch (e) {
      console.log("erro")
    }
  }

  useEffect(() => {  //aqui usa o useEffect para a lista aparecer assim que carrega a página
    loadLista()
  }, [])

  async function loadLista() {  //essa função é a responsável por carregar a página, é ela que 
    //faz com que a medida que os itens forem adicionados, vão aparecer simultaneamente
    setLoad(true)
    try {
      const response = await api.get("/livros")
      setItems(response.data)
      console.log(response.data)
    } catch (error) {
      console.log("erro")
    } finally {
      setLoad(false)
    }
  }


  async function HandleDeleteItem(id: number) { //essa a função responsável por deletar o item da lista
    try {
      await api.delete(`/livros/${id}`)
      const filteredItems = items.filter((item) => item.id !== id)
      setItems(filteredItems)
    } catch (error) {
      console.log("erro")
    }

  }

  async function handleEditItem(id: number) {
    const changedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isEditing: true };
      }
      return item;
    });

    setItems(changedItems);
  }

  function handleUpdateItem(id: number) {

    const changedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isEditing: false };
      }
      return item;
    });

    setItems(changedItems);
  }

  function handleChangeItem(id: number, textValue: string) {
    const changedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, nome: textValue };
      }
      return item;
    });

    setItems(changedItems);
  }


  return (
    //logo abaixo é o input, nele chama a funcão setTextInput quando há mudanças nele, que armazena o valor escrito nele
    //depois tem o botão que chama a função addItemLista no onClick
    //depois vem a lisa, onde usa o map para adicionar diversos itens em cada li
    <>
      <h1>Lista de livros</h1>
      <div style={{ marginBottom: 10 }}>
        <input
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Digite o seu texto aqui..."
        />
        <button onClick={addItemLista}>Enviar</button>
      </div>

      <span>{load && "Carregando..."}</span>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.isEditing ? (
              <input
                onChange={(e) => handleChangeItem(item.id, e.target.value)}
                value={item.titulo}
              />
            ) : (
              item.titulo
            )}

            {item.isEditing ? (
              <button onClick={() => handleUpdateItem(item.id)}>Save</button>
            ) : (
              <button onClick={() => handleEditItem(item.id)}>Edit</button>
            )}

            <button onClick={() => HandleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

    </>
  )
}
