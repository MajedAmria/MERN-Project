import React from 'react'
import { Button, Card ,CardBody,Form,Label,Input} from 'reactstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <Card style={{backgroundColor:'#333',padding:50,margin:100,width:500}} inverse>
          <h1>Login</h1>
          <CardBody>
            <Form>
              <Label for="exampleEmail">Email</Label>
              <Input id="exampleEmail" name="email" type="email"/>
              <Label for="examplePassword">Password</Label>
              <Input id="examplePassword" name="password" type="password"/>
              <br/>
              <Button color="success">success</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
  )
}

export default Login