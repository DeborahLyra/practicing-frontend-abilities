'use client';
const handleClick = () => {
    console.log("Clicou");
  };

function Botao() {
 
  return (
    <>
      <button onClick={handleClick}>Clique aqui</button>
    </>
  );
}

export default Botao;
