import React from 'react';

interface TituloProps {
    textoTitulo: string;
}

const Titulo: React.FC<TituloProps> = ({ textoTitulo }) => {

    return (
        <h2 className='font-bold text-4xl text-white drop-shadow-md'>
            {textoTitulo}
        </h2>
    );
};

export default Titulo;