import {useState, useEffect} from "react";

import './App.css';

function App() {

  const [producto, setProducto]=useState([])


  const GetProductos = async () => {
    
    const request = await fetch('https://dummyjson.com/products');
    const response = request.ok ? await request.json() : await request.text();
    console.log(response);
    
    setProducto(response.products);

  
}

useEffect(() => {
  GetProductos()
}, [])

  return (
    <div className="App">
      <header className="App-header">
        
        
          
        <ul>
            {
                producto.map(function (item, id) {
                    return (
                        <li key={id}>{item.title}</li>
                        
                    )
                })
            }
        </ul>
         
        
        
      </header>
    </div>
  );
}

export default App;
