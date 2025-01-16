export function InputText(props) {
    return (
        <input type={props.type} 
        id={props.id} 
        name={props.name} 
        // className={styles.inputext} 
        placeholder = {props.placeholder} 
        readOnly={props.readOnly} 
        disabled={props.disabled} 
        required={props.required}
        value={props.value}
        >
        {props.content}
        </input>
    )
}