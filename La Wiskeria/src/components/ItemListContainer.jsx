export default function Saludo(props) {
    return(
        <h1 style={{ color: props.color}}>
        {props.texto}
        </h1>
    )
}

