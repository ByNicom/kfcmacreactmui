import React, { useState } from 'react'

function Pedidosprovider(children) {
    const [pedidos, setPedidos] = useState([]);
    
    //TODO: Implementar la lógica para manejar los pedidos y actualizar el estado según sea necesario
    //en esta variable se guardara el estado global de los pedidos y la función para actualizarlo
    const globalState = {pedidos, setPedidos};

  return (
    <PedidosContext.Provider value={{ pedidos, setPedidos }}>
        {children}
    </PedidosContext.Provider>
  )
}

export default Pedidosprovider
