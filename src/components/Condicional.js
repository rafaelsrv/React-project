import { useState } from "react";

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail,setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(email)
        
    }
    function limparEmail(){
       
        setUserEmail('')
        console.log(email)
        
    }
    return(
        <div>
            <h2>Cadastre seu E-mail:</h2>
            <form>
                <input type="email" placeholder="Digite seu email" onChange={(e)=>setEmail(e.target.value)}></input>
                <button type="submit" onClick={enviarEmail}>
                Enviar-email</button>
                {userEmail && (
                    <div>
                        <p>O  email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
               
            </form>
        </div>
    )

}
export default Condicional