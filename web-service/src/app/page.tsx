"use client";
import { useState, useEffect } from "react"
import { api } from "../../services/api";

const inicialList = [
  { id: 0, titulo: "Emma"}
]

export default function Home() {
  const [load, setLoad] = useState([])
  const [items, setItems] = useState(inicialList)

  interface listaOriginal {
    titulo: "",
    autor: ""
  }

  async function getLista() {
    const response = await api.get("/livros")
    setItems(response.data)
    console.log(items)
    console.log(response.data)
  }


  return (
    <>
      <input type="text" placeholder="digite um título aqui"/> <br/><br/>
      
      <button onClick={() => getLista()}>clique para adicionar mais </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.titulo}</li>
        ))}
      </ul>

    </>
  )
}
