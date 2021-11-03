import './style.css'

const Pesquisa = ( { valorPesquisado } ) => {

    return (
        <div className='titlePesquisa'>
            <p>Resultados para: <span>{valorPesquisado}</span></p>
        </div>
    )
}

export default Pesquisa