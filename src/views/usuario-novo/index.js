import React, { useState } from 'react';
import './usuario.css';

import firebase from '../../config/firebase';
import 'firebase/auth';

import Navbar from '../../components/navbar';

function NovoUsuario(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar() {
        setCarregando(1);

        setMsgTipo(null);

        if(!email || !senha) {
            setMsgTipo('error');
            setMsg('Você precisa digitar email e senha para fazer o cadastro');
            return;
        }

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(resultado => {
            setMsgTipo('sucesso');
            setCarregando(0);
        })
        .catch(error => {
            setCarregando(0);
            console.log(error);
        })
    }

    return ( 
        <>
            <Navbar />

            <div className="form-cadastro">
                <form className="text-center form-login mx-auto mt-5">
                    <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>

                    <input type="email" onChange={e => setEmail(e.target.value)} className="form-control my-2" placeholder="E-Mail" />
                    <input type="password" onChange={e => setSenha(e.target.value)} className="form-control my-2" placeholder="Senha" />

                    {
                        carregando 
                        ? 
                        <div className="spinner-border text-danger" role="status"> <span className="sr-only">Loading...</span> </div>
                        : 
                        <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>
                    }

                    <div className="msg-login text-black text-center my-5">
                        {msgTipo === 'sucesso' ? <span><strong>WoW!</strong> Usuário cadastrado com sucesso! <i class="far fa-smile-beam"></i> </span> : ''}
                        {msgTipo === 'error' ? msgTipo === 'error' ? <span><strong>Ops!</strong> {msg} &#128546; </span> : '' : ''}
                    </div>
                </form>
            </div>
        </>
     );
}

export default NovoUsuario;
