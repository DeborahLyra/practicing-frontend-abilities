import Quadrado from "../components/quadrado/Quadrado";
import Titulo from "../components/titulo/Titulo";
import Botao from "../components/botao/Botao";
import ListaItens from "../components/listaItens/ListaItens";
import Imagem from "../components/imagem/Imagem";
import Paragrafo from "../components/paragrafo/Paragrafo";
import { Header } from "@/components/cabecalho/Cabecalho";
import Rodape from "@/components/rodape/Rodape";

export default function Home() {
  return (
    <>
      <Quadrado />
      <Titulo>Título do texto</Titulo>
      <Botao />
      <ListaItens />
      <Paragrafo>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quae
        fugiat suscipit et non saepe consectetur? Illo ea quibusdam et
        praesentium omnis earum fugit incidunt. In, cumque dolor? Labore,
        cumque!
      </Paragrafo>
      <Header></Header>
      <Rodape>
        rodapé texto
      </Rodape>
      <Imagem />
    </>
  );
}
