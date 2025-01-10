const InsumosTable = () => {
    const insumos = [
      {
        status: "A",
        suministro: "Aceite vegetal galón",
        presentacion: "Galón",
        existenciaFisica: 4,
        promedioMensual: 2,
        mesesExistencia: 2.0,
        precioUnitario: "Q83.00",
        programa: "",
      },
      {
        aasdasd
        status: "I",
        suministro: "Achiote",
        presentacion: "Bolsa 1 lb",
        existenciaFisica: 0,
        promedioMensual: 1,
        mesesExistencia: 0.0,
        precioUnitario: "Q12.50",
        programa: "",
      },
      // Agrega más datos según sea necesario
    ];
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-green-300 bg-white">
          <thead>
            <tr className="bg-green-200 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left border">Activo/Inactivo</th>
              <th className="py-3 px-6 text-left border">Código Insumo</th>
              <th className="py-3 px-6 text-left border">Insumo</th>
              <th className="py-3 px-6 text-left border">Presentación</th>
              <th className="py-3 px-6 text-center border">Existencia Cocina</th>
              <th className="py-3 px-6 text-center border">Existencia Bodega</th>
              <th className="py-3 px-6 text-center border">Promedio Mensual</th>
              <th className="py-3 px-6 text-center border">Meses de Existencia Disponible</th>
            
            </tr>
          </thead>
          <tbody>
            {insumos.map((insumo, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className=" "><input type="text" /></td>
                <td className="py-3 px-6 text-left border">{insumo.suministro}</td>
                <td className="py-3 px-6 text-left border">{insumo.presentacion}</td>
                <td className="py-3 px-6 text-center border">{insumo.existenciaFisica}</td>
                <td className="py-3 px-6 text-center border">{insumo.promedioMensual}</td>
                <td className="py-3 px-6 text-center border">{insumo.mesesExistencia.toFixed(2)}</td>
                <td className="py-3 px-6 text-center border">{insumo.precioUnitario}</td>
                <td className="py-3 px-6 text-center border">{insumo.programa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default InsumosTable;
  