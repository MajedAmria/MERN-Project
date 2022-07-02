import React, {useState} from 'react'
import { Button, Card ,CardBody,Form,Label,Input} from 'reactstrap'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Registration = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [errors,setErrors] = useState([])
  const history=useHistory();

  const onRegistration=async(e)=>{
    e.preventDefault();
    // await axios.post('http://localhost:8000/api/register', {firstName: firstName, lastName: lastName,
    // email: email, password: password, confirmPassword: confirmPassword, phoneNumber: phoneNumber})
    try{
    props.updateLoggedInUser(await axios.post('http://localhost:8000/api/register', {firstName: firstName, lastName: lastName,
    email: email, password: password, confirmPassword: confirmPassword, phoneNumber: phoneNumber}))
    history.push("/success");
  }
  catch(err){
    const errorResponse = err.response.data.errors; // Get the errors from err.response.data
    const errorArr = []; // Define a temp error array to push the messages in
    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
        errorArr.push(errorResponse[key].message)
    }
    // Set Errors
    setErrors(errorArr);
}
  }

  return (
    <div>
        <Card style={{backgroundColor:'#333',padding:50,margin:100,width:500}} inverse>
          <h1>Register</h1>
          <CardBody>
            <Form onSubmit={onRegistration}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
              <Label  for="Fisrt">First Name </Label>
              <Input id="Fisrt" name="email" type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
              <Label for="Last">Last Name</Label>
              <Input id="Last" name="email" type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
              <Label for="phone">Phone Number</Label>
              <Input id="phone" name="email" type="number" onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber}/>
              <Label for="exampleEmail">Email</Label>
              <Input id="exampleEmail" name="email" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
              <Label for="examplePassword">Password</Label>
              <Input id="examplePassword" name="password" type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
              <Label for="examplePassword">Confirm Password</Label>
              <Input id="examplePassword" name="password" type="password" onChange={(e)=>setConfPassword(e.target.value)} value={confirmPassword}/>
              <br/>
              <Button color="success">success</Button>
            </Form>
          </CardBody>
        </Card>
    </div>
  )
}

export default Registration