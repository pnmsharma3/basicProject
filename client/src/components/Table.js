import React, { useState, useEffect } from "react";
import { Container} from 'semantic-ui-react';
let Table =(props)=> {
    // const [products, setproducts] = useState(props.products);
   
    return(
        <Container>
            {props.products.map(prod => 
            <div>
                <h5>{prod.name?prod.name + ' : ':''} 
                {prod.description?prod.description:''}</h5>
            </div>
                
            ) 
       
        }
        
        </Container>
    )


}
export default Table