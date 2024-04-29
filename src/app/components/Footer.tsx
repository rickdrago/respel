import React from 'react';

interface FooterProps {
    texto: string;
}

const Footer: React.FC<FooterProps> = ({ texto }) => {

    return (
        <footer className='flex flex-0 justify-end gap-4'>
            <button className='footer__btn' data-tooltip="Compliance">
                <span className='icon-compliance text-5xl'></span>
            </button>
            <button className='footer__btn' data-tooltip="Compártenos tus comentarios">
                <span className='icon-chat text-5xl'></span>
            </button>
            <button className='footer__btn' data-tooltip="Servicio al Cliente">
                <span className='icon-call-center text-5xl'></span>
            </button>
        </footer>
    );
};

export default Footer;