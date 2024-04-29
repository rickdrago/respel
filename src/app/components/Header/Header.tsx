
//import React, { useState } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import SvgComponent from '@/app/components/Logo'
import DropdownUsuario from '@/app/components/Header/Dropdown_usuario'


interface HeaderProps {
    user: string;
}

const Header: React.FC<HeaderProps> = ({ user }) => {

    return (
        <header>
            <div className="flex justify-between">
                <a href="#" className='ml-16'><SvgComponent /></a>
                <div className="relative top-1 inline-flex items-center">




                    <button className='mr-6'><span className="icon-co2 text-4xl text-main_green"></span></button>
                    <div className="inline-flex">
                        <DropdownUsuario />
                        <button className="bg-trasparent_back text-font_gray hover:text-main_blue font-bold py-2 px-4 border-font_gray inline-flex items-center h-[51px] border-r-[2px] border-disabled_gray">
                            <span className="icon-cart text-[28px]"></span>
                        </button>
                        <button className="bg-trasparent_back text-font_gray hover:text-main_blue font-bold py-2 px-4 rounded-r-2xl inline-flex items-center h-[51px]">
                            <span className="icon-cog text-[28px]"></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;


