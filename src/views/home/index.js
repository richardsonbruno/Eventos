import React from 'react';
import { useSelector } from 'react-redux';
import './home.css';

import Navbar from '../../components/navbar'

function Home(){

    return (
        <>
            { useSelector(state => console.log(state)) } 
            <Navbar />
        </>
    )
}

export default Home;
