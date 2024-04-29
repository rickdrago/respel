
import React from 'react';


interface MenuProps {
    user: string;
}


const Menu: React.FC<MenuProps> = ({ user }) => {

    return (
        
        <nav className='menu py-5 bg-white rounded-r-3xl w-78 mt-8'>





            <div className="text-right pr-4"><button><span className="icon-arrow_left text-font_gray"></span></button></div>
            <ul className='mb-10'>
                <li><a href="#" className='text-black hover:bg-back_gray flex text-lg pr-4 pl-6 py-1 font-bold flex items-center mb-2'><span className="icon-screen text-xl text-font_gray mr-6 w-10"></span>Escritorio</a></li>
                <li>
                    <a href="#" className='text-black hover:bg-back_gray block text-lg pr-4 pl-6 py-1 font-bold flex items-center mb-2'><span className="icon-truck text-xl text-font_gray mr-6 w-10"></span>Servicios</a>
                    <ul>
                        <li>
                            <a href="#" className='text-black hover:bg-back_gray block pr-4 py-1 pl-14'>Manifiestos</a>
                        </li>
                        <li>
                            <a href="#" className='text-black hover:bg-back_gray block pr-4 py-1 pl-14'>Generar Reporte</a>
                        </li>
                        <li>
                            <a href="#" className='text-black hover:bg-back_gray block pr-4 py-1 pl-14'>Contratos</a>
                        </li>
                        <li>
                            <a href="#" className='text-black hover:bg-back_gray block pr-4 py-1 pl-14'>Certificados</a>
                        </li>
                        <li>
                            <a href="#" className='text-black hover:bg-back_gray block pr-4 py-1 pl-14'>Mis Servicios</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" className='text-black hover:bg-back_gray flex text-lg pr-4 pl-6 py-1 font-bold flex items-center mb-2'><span className="icon-screen text-xl text-font_gray mr-6 w-10"></span>Facturación y pagos</a>
                    <ul>
                        <li>
                            <a href="#" className='text-black hover:bg-back_gray block pr-4 py-1 pl-14'>Cuenta Corriente</a>
                        </li>
                        <li>
                            <a href="#" className='text-black hover:bg-back_gray block pr-4 py-1 pl-14'>Pagar en Línea</a>
                        </li>
                        <li>
                            <a href="#" className='text-black hover:bg-back_gray block pr-4 py-1 pl-14'>Consulta de Pagos en Línea</a>
                        </li>
                    </ul>
                </li>
                <li><a href="#" className='text-black hover:bg-back_gray flex text-lg pr-4 pl-6 py-1 font-bold flex items-center mb-2'><span className="icon-cart-line text-2xl text-font_gray mr-6 w-10"></span>Insumos</a></li>
                <li><a href="#" className='text-black hover:bg-back_gray flex text-lg pr-4 pl-6 py-1 font-bold flex items-center mb-2'><span className="icon-technical text-3xl text-font_gray mr-6 w-10"></span>Información Técnica</a></li>
                <li><a href="#" className='text-black hover:bg-back_gray flex text-lg pr-4 pl-6 py-1 font-bold flex items-center mb-2'><span className="icon-training text-3xl text-font_gray mr-6 w-10"></span>Capacitaciones</a></li>
            </ul>
            <div className="text-center">
                <a href="#" className="icon-linkedin text-font_gray text-3xl mx-2"></a><a href="#" className="icon-social-x text-font_gray text-3xl mx-2"></a><a href="#" className="icon-youtube text-font_gray text-3xl mx-2"></a>
            </div>
        </nav>
    );
};

export default Menu;