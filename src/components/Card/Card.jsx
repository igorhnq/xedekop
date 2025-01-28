import { InputText } from "../inputText";
import { Inputbutton } from "../inputbutton";
import styles from './Card.module.css';

export function Card({ id, nome, types, sprite, onTypeClick }) {

    return (
        <div className={styles.Card}>
            <img 
                id={styles.sprite} 
                src={sprite} 
                alt={`${nome} sprite`} 
            />
            <div>
                <h1 id="name">
                    <InputText
                        id={styles.id}
                        type="text"
                        value={nome}
                        readOnly
                    />
                </h1>
                <div id={styles.typeDiv}>
                    {types.map((type, index) => (
                        <Inputbutton 
                            key={index} 
                            className={`${styles.type} ${styles[type] || ""}`} 
                            content={type}
                            onClick={() => onTypeClick(type)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
