import React from "react"
import Botao from "../Button"

class Formulario extends React.Component{
    render(){
        return(
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Tarefa
                    </label>
                    <input type="text" name="tarefa" id="tarefa"
                    placeholder="Escreva a tarefa"
                    required
                    >
                    </input>
                </div>
                <div>
                <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input type="time" name="tempo" id="tempo" step="1"
                    min="00:00:00" max="02:00:00"
                    required
                    >
                    </input>
                </div>
                <div>
                <Botao/>
                </div>
            </form>
        )
    }
}
export default Formulario;