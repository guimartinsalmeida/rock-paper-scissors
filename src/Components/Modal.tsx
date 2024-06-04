import { useState } from "react";
import ReactModal from "react-modal";
export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: '50%',
      maxWidth: '500px',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <div>
      <button className="w-24 h-42 bg-cyan-600 rounded-lg text-white " onClick={openModal}>Rules 📖</button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}

        contentLabel="Example Modal"
      >
        <div className="text-left flex flex-col">
          <div className="flex justify-end">

          <button className="text-3xl" onClick={closeModal}>X</button>
          </div>
          <div className="flex h-full flex-col">
          <p>
            Os jogadores devem simultaneamente esticar a mão, na qual cada um
            formou um símbolo (que significa pedra, papel ou tesoura)
          </p>
          <p>
            Então, os jogadores comparam os símbolos para decidir quem ganhou,
            da seguinte forma:
          </p>
            <li>Pedra ganha da tesoura (amassando-a ou quebrando-a).</li>
            <li>Tesoura ganha do papel (cortando-o).</li>
            <li>Papel ganha da pedra (embrulhando-a).</li>
            <li>A pedra é simbolizada por um punho fechado 👊🏻;</li> 
              <li>a tesoura, por dois dedos esticados ✌🏼;</li> 
              <li>e o papel, pela mão aberta 🖐🏻.</li>
            <li>
              Caso dois jogadores façam o mesmo gesto, ocorre um empate, e
              geralmente se joga de novo até desempatar.
            </li>

            <div className="mt-20 text-center">
            <b>
             * Este jogo possui uma única regra: não é permitido mostrar pedra duas
            vezes seguidas.
          </b>
            </div>
         
          
          </div>
          
        </div>
      </ReactModal>
    </div>
  );
}

