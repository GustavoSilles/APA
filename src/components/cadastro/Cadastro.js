import React, { useState } from "react"

const CadastroUsuario = () =>{
    const [nome_completo, setNome_completo] = useState('')
    const [nome_usuario, setNome_usuario] = useState('')
    const [foto, setFoto] = useState('')
    const [email, setEmail] = useState('')
    const [senha, SetSenha] = useState('')

    const handleNome_completoChange = nome_completo => setNome_completo(nome_completo)
    const handleNome_usuarioChange = nome_usuario => setNome_usuario(nome_usuario)
    const handleFotoChange = foto => setFoto(foto)
    const handleEmailChange = email => setEmail(email)
    const handleSenhaChange = senha => SetSenha(senha)


const postUser = async () => {  

    if (nome_completo && nome_usuario && foto && email && senha !== "") {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    nome_completo: nome_completo,
                    nome_usuario: nome_usuario,
                    foto: foto,
                    email: email,
                    senha: senha
                })
            }
            await fetch('https://jovens-db.herokuapp.com/pessoa', requestOptions)
            //navigation.navigate('Logins')
           
        }catch( error){
            console.log(error)
            setNome_completo('')
            setNome_usuario('')
            setFoto('')
            setEmail('')
            SetSenha('')
        }
    }else{
        alert("Erro!","Não foi possivel efetuar o cadastro!");

        }
    }
}


export default CadastroUsuario