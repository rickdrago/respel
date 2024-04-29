import React from 'react';

interface SubComponentProps {
    cuenta: string;
    monto: string;
    accion?: number;
}

const SubComponent: React.FC<SubComponentProps> = ({ cuenta, monto, accion }) => {
    let accionText = '';
    let colorClass = '';

    if (accion !== undefined && (accion === 1 || accion === 2)) {
        switch (accion) {
            case 1:
                accionText = 'Pagar Cuenta';
                colorClass = 'text-main_green';
                break;
            case 2:
                accionText = 'Consultar Cuenta';
                colorClass = 'text-main_red';
                break;
        }
    }

    return (
        <div className={`bg-white rounded rounded-2xl px-4 pt-4 pb-1 shadow-[0px 3px 11px 0px #0000002E;
        ] ${colorClass}`}>
            <p className="text-font_gray">Cuenta {cuenta}</p>
            <p className="text-font_gray text-sm">Incluye saldos no vencidos</p>
            <p className="text-font_gray text-center text-lg font-bold">${monto}</p>
            {accionText && <p className={`${colorClass} text-right`}>{accionText}</p>}
        </div>
    );
};

export default SubComponent;


