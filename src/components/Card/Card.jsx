import { InputText } from "../inputText";
import { Inputbutton } from "../inputbutton";
import logo from '../../../image/pikachu.png';
import styles from './Card.module.css';

export function Card(props){
    return (
        <div className={styles.Card}>
            <img id={styles.logo}src={ logo }/>
            <div>
                <h1 id="name">
                <InputText
                    id={styles.id}
                    type="text"
                    value={props.value}
                    min="0"
                    readOnly
                />
                </h1>
                <div id={styles.typeDiv}>
                    
                <Inputbutton id={styles.Normal} className={styles.type} content="Normal" />
                <Inputbutton id={styles.Eletric} className={styles.type} content="Eletric" />
                </div>
                
            </div>
        </div>
    )
}