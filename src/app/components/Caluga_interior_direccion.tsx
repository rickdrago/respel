import React from 'react';

interface SubComponentProps {
    direccion: string;
    sucursal: string;
    fecha: Date;
}

const SubComponent: React.FC<SubComponentProps> = ({ direccion, sucursal, fecha }) => {    

    return (
        <div className={`bg-white rounded rounded-2xl p-4 shadow-lg`}>
            <p className="text-font_gray font-semibold">{direccion}</p>
            <p className="text-font_gray">{sucursal}</p>
            <p className="text-font_gray text-center text-lg font-bold">{fecha.toString()}</p>
        </div>
    );
};

export default SubComponent;


