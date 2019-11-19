import React, { useState, useEffect } from "react";

// SERVICES
import productService from './services/ProductService';
import 'semantic-ui-css/semantic.min.css'
import './style/index.scss'
import Table from './components/Table';
import Form from './components/Form';
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
function App() {
  const [products, setproducts] = useState(null);
  
  useEffect(() => {
    if(!products) {
      getProducts();
    }
  })

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log(res);
    setproducts(res);
  }
  let addProduct =async(pro)=>{
let res = await productService.addProduct(pro)
  }
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main >{products &&
<Table products={products.products} />

}
<Form submited={(data)=>addProduct(data)}/>

      </main>
    </div>
  );
}

export default App;
