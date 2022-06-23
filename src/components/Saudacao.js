function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, blz?`
    }
    return(
        <>
        {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
        )
}
export default Saudacao