import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './home.css';

import Navbar from '../../components/navbar'

function Home(){

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
        <>
            { useSelector(state => console.log(state)) } 
            <Navbar />
        </>
    )
}

export default Home;
