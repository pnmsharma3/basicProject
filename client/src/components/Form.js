import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form ,Container} from 'semantic-ui-react';

let ProductForm =(props)=> {
    const [name, setName] = useState('');
    const [des, setDes] = useState('');
    return(
        <Container>
            <h1>Add product</h1>
        <Form>
        <Form.Field>
          <label>product name</label>
          <input placeholder='Name' value={name} onChange={(event)=>setName(event.target.value)}  />
        </Form.Field>
        <Form.Field>
          <label>product Description</label>
          <input placeholder='Des' value={des} onChange={(event)=>setDes(event.target.value)}  />
        </Form.Field>
       
        <Button type='submit'onClick={()=>props.submited({name:name,description:des})}>Submit</Button>
      </Form>
      </Container>
    )
   


}
export default ProductForm;