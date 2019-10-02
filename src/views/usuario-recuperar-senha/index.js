import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './usuario-recuperar-senha.css';

import Navbar from '../../components/navbar';

import firebase from '../../config/firebase';
import 'firebase/auth';

function RecuperarSenha() {

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function RecuperarSenha(){
        firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(resultado => {
            setMsg("Enviamos um link para você redefinir sua senha!");
        })
        .catch(error => {
            setMsg("Verifique se o email está correto!");
        });
    }

    return (
        <>
            <Navbar />

            <form className="text-center form-login mx-auto mt-5">
                <h3 className="mb-3 font-weight-bold">Recuperar a Senha</h3>
                <input 
                    onChange={e => setEmail(e.target.value)}
                    type="email" 
                    className="form-control my-2" 
                    placeholder="E-mail" />

                <div className="msg my-4 text-center">
                    <span>{msg}</span>
                </div>

                <button 
                    onClick={RecuperarSenha}
                    type="button" 
                    className="btn btn-lg btn-block btn-enviar">Recuperar Senha</button>
            </form>
        </>
    );
}

export default RecuperarSenha;
