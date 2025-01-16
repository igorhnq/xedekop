import { InputText } from "../inputText";
import { Inputbutton } from "../inputbutton";
import logo from '../../../image/pikachu.png';
import styles from './Card.module.css';

export function Card(){
    return (
        <div className={styles.Card}>
            <img id={styles.logo}src={ logo }/>
            <div>
                <h1 id="name">
                <InputText
                    id={styles.id}
                    type="text"
                    name="Tax"
                    value="Pikachu"
                    placeholder="Tax"
                    min="0"
                    readOnly
                />
                </h1>
                <div id={styles.typeDiv}>
                <Inputbutton className={styles.type} content="Eletric" />
                <Inputbutton className={styles.type} content="Normal" />
                </div>
                
            </div>
        </div>
    )
}