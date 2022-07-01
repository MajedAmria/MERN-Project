import React from 'react'
import { Button, Card ,CardBody,Form,Label,Input} from 'reactstrap'
const Registration = () => {
  return (
    <div>
        <Card style={{backgroundColor:'#333',padding:50,margin:100,width:500}} inverse>
          <h1>Register</h1>
          <CardBody>
            <Form>
              <Label  for="Fisrt">First Name </Label>
              <Input id="Fisrt" name="email" type="text"/>
              <Label for="Last">Last Name</Label>
              <Input id="Last" name="email" type="text"/>
              <Label for="phone">Phone Number</Label>
              <Input id="phone" name="email" type="number"/>
              <Label for="exampleEmail">Email</Label>
              <Input id="exampleEmail" name="email" type="email"/>
              <Label for="examplePassword">Password</Label>
              <Input id="examplePassword" name="password" type="password"/>
              <Label for="examplePassword">Confirm Password</Label>
              <Input id="examplePassword" name="password" type="password"/>
              <br/>
              <Button color="success">success</Button>
            </Form>
          </CardBody>
        </Card>
    </div>
  )
}

export default Registration