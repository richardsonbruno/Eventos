import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './login.css';

import firebase from '../../config/firebase'; // Configuração
import 'firebase/auth'; // Autenticação

import { useSelector, useDispatch } from 'react-redux';

function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    function logar(){
        firebase.auth()
        .signInWithEmailAndPassword(email, senha)
        .then(resultado => {
            setMsgTipo('sucesso');
            setTimeout(() => {
                dispatch({ type: 'LOG_IN', usuarioEmail: email });
                const logado = {
                    usuarioEmail: email,
                    usuarioLogado: 1
                };
                localStorage.setItem('logado', JSON.stringify(logado))
            }, 2000);
        }).catch(error => {
            setMsgTipo('error');
        });
    }

    return (
        <div className="login-content d-flex align-items-center">

            {
                useSelector(state => state.userReducer.usuarioLogado) > 0 ? <Redirect to="/" /> : null
            }

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <span className="far fa-smile-wink text-white fa-5x"></span>
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input 
                    onChange={e => setEmail(e.target.value)}
                    type="email" 
                    id="inputEmail" 
                    className="form-control my-2" 
                    placeholder="Email" 
                    required 
                    />

                <input
                    onChange={e => setSenha(e.target.value)} 
                    type="password" 
                    id="inputPassword" 
                    className="form-control my-2" 
                    placeholder="Senha" 
                    required 
                    />

                <button 
                    onClick={logar}
                    className="btn btn-lg btn-block btn-login font-weight-bold" 
                    type="button">
                    LOGAR
                </button>

                <div className="msg-login text-white text-center my-5">
                    {msgTipo === 'sucesso' ? <span><strong>WoW!</strong> Você está conectado! <i class="far fa-smile-beam"></i> </span> : ''}
                    {msgTipo === 'error' ? <span><strong>Ops!</strong> Verifique seu e-mail e senha! <i class="far fa-grin-beam-sweat"></i> </span> : '' }
                </div>

                <div className="opcoes-login mt-5">
                    <Link to="recuperar-senha" className="mx-2">Recuperar Senha</Link>
                    <span className="text-white">&#9733;</span>
                    <Link to="novousuario" className="mx-2">Cadastrar</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;