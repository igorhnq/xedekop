import { InputText } from "./inputText";
import { Inputbutton } from "./inputbutton";

export function Card(){
    
    
    return (
        <div className="card">
            <img id="imagem"></img>
            <div>
                <h1 id="name">
                <InputText
                    type="text"
                    name="Tax"
                    value="Pikachu"
                    placeholder="Tax"
                    min="0"
                    readOnly
                />
                </h1>
                <Inputbutton>
                </Inputbutton>
            </div>
        </div>
    )
}