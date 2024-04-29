'use client'
import React, { useState } from "react";
import list from "@/app/data/data_emails.json";

function DropdownUsuario() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button className="bg-trasparent_back text-font_gray hover:text-main_blue py-2 px-4 rounded-l-2xl inline-flex items-center h-[51px] border-r-[2px] border-disabled_gray" onClick={toggleDropdown}>
                <span className="icon-user-circle text-[28px] mr-4"></span>Procesos Sanitarios S.A
            </button>
            {isOpen && (
                <>
                    <div className="bg-gray-900 bg-opacity-30 fixed top-0 left-0 right-0 bottom-0 z-10" onClick={closeDropdown}></div>
                    <div className="bg-white absolute top-[68px] flex flex-col w-[280px] pb-4 z-20 rounded-b-2xl">
                        <ul className="p-6">
                            {list.map((item, i) => (
                                <li className="text-black flex items-center my-2" key={i}><span className="icon-email text-font_gray mr-5 text-2xl"></span>{item.email}</li>
                            ))}
                        </ul>
                        <div className="text-center w-100"><button className="btn btn-blue text-xs">ACTUALIZAR DATOS PERSONALES</button></div>
                    </div>
                </>
            )}
        </div>
    );
}

export default DropdownUsuario;