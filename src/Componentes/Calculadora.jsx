import React from 'react';
import './Calculadora.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

export default function Calculadora(){
    return(
    <div>
    <Box m={10}/>
    <Container maxWidth="xs">
        <div className="wrapper">
            <h1 className="resultado">0.75</h1>
            <button className="acmaior">AC</button>
            <button className="orange">/</button>
            <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="orange">*</button>
            </div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="orange">-</button>
            <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="orange">+</button>
            </div>
            <button className="zeromaior">0</button>
            <button>.</button>
            <button className="orange">=</button>
           
        </div>
    </Container>
    </div>
    )
}