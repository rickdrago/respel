import Panel from '../components/Panel'
import CajitaInteriorCuenta from '../components/Caluga_interior_cuenta'
import CajitaInteriorDireccion from '../components/Caluga_interior_direccion'
import cuenta from '@/app/data/data_cuenta.json'
import direcciones from '@/app/data/data_direcciones.json'

export default function Home() {
  return (

    <div className="grid grid-cols-3 gap-14 p-4">
      <Panel boxColor="red" title="Saldos Pendientes" description="texto1" btnText="Ver Cuentas" icon="icon-billing" iconSize="text-2xl" dataSource={cuenta}>
        {cuenta.map((data: any) => (
                    <CajitaInteriorCuenta key={data.id} cuenta={data.cuenta} monto={data.monto} accion={data.accion} />
        ))}
      </Panel>
      <Panel boxColor="green" title="Próximos Servicios" description="texto2" btnText="Ver Servicios" icon="icon-truck" iconSize="" dataSource={direcciones} >
        {direcciones.map((data: any) => (
                    <CajitaInteriorDireccion key={data.id} direccion={data.direccion} sucursal={data.sucursal} fecha={data.fecha} />
        ))}
      </Panel>
      <Panel boxColor="blue" title="Próximas Entregas" description="texto2" btnText="Insumos" icon="icon-cart-line" iconSize="text-2xl" dataSource={direcciones} >
        {direcciones.map((data: any) => (
                    <CajitaInteriorDireccion key={data.id} direccion={data.direccion} sucursal={data.sucursal} fecha={data.fecha} />
        ))}
      </Panel>
     </div>
  )
}
