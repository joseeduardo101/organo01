import './lista.css'

const index = (props) => {

    const aoDigitado = (evento) => { 
        props.aoAlterado(evento.target.value)
        console.log(evento.target.value)
    }

    return (
        <div className='lista-suspensa'>
        <label>{props.label}</label>
            <select required={props.obrigatorio} onChange={aoDigitado}>
                {props.itens.map(item =><option key={item}>{item}</option>)}
            </select>
    </div>
    )
}

export default index