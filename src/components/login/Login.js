import React, { useState } from "react"

const LogarUsuario = () => {
    const [pessoa, setPessoa] = useState([])
    const [nome_usuario, setNome_usuario] = useState('')
    const [senha, setSenha] = useState('')

    const handleNome_usuarioChange = nome_usuario => setNome_usuario(nome_usuario)
    const handleSenhaChange = senha => setSenha(senha)
    const getPessoa = async () => {
        if (nome_usuario && senha !== "") {
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    nome_usuario: nome_usuario,
                    senha: senha
                })
            }
            const response = await fetch('https://jovens-db.herokuapp.com/login/pessoa', requestOptions)
            if(response.status === 400){
            alert("Erro!","Usuário não encontrado");
            }else{
                const data = await response.json()
                setPessoa(data)
                //navigation.navigate("HomeNavigation")
                }
        }catch(error){
            console.log(error)
                }
   }
    }
}

export default LogarUsuario