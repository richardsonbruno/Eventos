import React, { useState } from 'react';
import './cadastro-eventos.css';
import { useSelector } from 'react-redux';

import firebase from '../../config/firebase';

import Navbar from '../../components/navbar'

function CadastroEventos (){

    const [carregando, setCarregando] = useState();
    const [msgTipo, setMsgTipo] = useState('error');

    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [foto, setFoto] = useState();
    const usuarioEmail = useSelector(state => state.userReducer.usuarioEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();

    function Cadastrar() {
        setCarregando(1)
        setMsgTipo(null);

        storage.ref(`imagens/${foto.name}`)
            .put(foto)
            .then(() => {
                db.collection('eventos').add({
                    titulo: titulo,
                    tipo: tipo,
                    detalhes: detalhes,
                    data: data,
                    hora: hora,
                    usuario: usuarioEmail,
                    visualizacoes: 0,
                    foto: foto.name,
                    publico: 1,
                    criacao: new Date()
                });
            })
            .then(() => {
                setMsgTipo('sucesso');
                setCarregando(0);
            })
            .catch(error => {
                setCarregando(0);
                setMsgTipo('error');
            });
    }

    return (
        <>  
            <Navbar /> 
            <div className="col-12">
                <div className="row mt-5">
                    <h3 className="mx-auto font-weight-bold">
                        Cadastro de Eventos
                    </h3>
                </div>

                <form>
                    <div className="form-group">
                        <label>Título</label>
                        <input type="text" className="form-control" onChange={e => setTitulo(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Título</label>
                        <select onChange={e => setTipo(e.target.value)} className="form-control">
                            <option disabled selected>--Selecione um Tipo--</option>
                            <option value="festa">Festa</option>
                            <option value="Teatro">Teatro</option>
                            <option value="Show">Show</option>
                            <option value="Evento">Evento</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Descrição do Evento</label>
                        <textarea onChange={e => setDetalhes(e.target.value)} className="form-control" rows="3"></textarea>
                    </div>

                    <div className="form-group row">
                        <div className="col-6">
                            <label>Data</label>
                            <input onChange={e => setData(e.target.value)} type="date" className="form-control" />
                        </div>

                        <div className="col-6">
                            <label>Data</label>
                            <input onChange={e => setHora(e.target.value)} type="time" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Foto</label>
                        <input onChange={e => setFoto(e.target.files[0])} type="file" className="form-control" />
                    </div>

                    {
                        carregando > 0
                        ? 
                        <div className="spinner-border text-danger" role="status"> <span className="sr-only">Loading...</span> </div>
                        : 
                        <button 
                            onClick={Cadastrar}
                            type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">
                            Publicar Eventos
                        </button>
                    }

                    
                </form>

                <div className="msg-login text-center my-5">
                    {msgTipo === 'sucesso' ? <span><strong>WoW!</strong> Cadastrado com Sucesso! &#128526; </span> : ''}
                    {msgTipo === 'error' ? <span><strong>Ops!</strong> Não foi possível publicar o evento! &#128546; </span> : '' }
                </div>
            </div>
        </>
    )
}

export default CadastroEventos;
