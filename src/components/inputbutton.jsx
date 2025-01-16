export function Inputbutton (props){
    return (
        <button type={props.type} id={props.id} name={props.name} className={props.className} onClick={ props.onClick }>{props.content}</button>
    )
}