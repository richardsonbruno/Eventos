import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './navbar.css';
import { Link } from 'react-router-dom';

let verify = "";
if(localStorage.getItem("logado") !== null){
    verify = JSON.parse(localStorage.getItem("logado")).usuarioLogado
}

function Navbar () {

    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem("logado") === null) {
            const logado = {
                usuarioEmail: null,
                usuarioLogado: 0
            };
            localStorage.setItem("logado", JSON.stringify(logado));
        }

        const logado = JSON.parse(localStorage.getItem("logado"));
        if(logado.usuarioEmail !== null) {
            dispatch({ type: "LOG_IN", usuarioEmail: logado.usuarioEmail });
        }
    }, [dispatch]);

    return (
        <nav className="navbar navbar-expand-lg">
            <span className="far fa-smile-wink text-white fa-2x"></span>

            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation">

                <i className="fas fa-bars text-white"></i>
                
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item"><Link className="nav-link ml-2" to="/">Home</Link></li>

                    {
                        useSelector(state => state.userReducer.usuarioLogado) > 0 ||
                        verify > 0

                        ?

                        <>
                            <li className="nav-item"><Link className="nav-link" to="cadastro-eventos">Publicar Evento</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="">Meus Eventos</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link" to="" 
                                    onClick={ () => {
                                        dispatch({ type: "LOG_OUT" });
                                        const logado = {
                                            usuarioEmail: null,
                                            usuarioLogado: 0
                                        };
                                        localStorage.setItem("logado", JSON.stringify(logado));
                                    } }>
                                    Sair
                                </Link>
                            </li>
                        </>

                        :

                        <>
                            <li className="nav-item"><Link className="nav-link" to="novousuario">Cadastrar</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="login">Login</Link></li>
                        </>

                    }

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
