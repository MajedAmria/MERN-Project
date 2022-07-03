import React, {useState,useEffect} from 'react'
import { Button, Card ,CardBody,Form,Label,Input} from 'reactstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors,setErrors] = useState('')
  const history = useHistory();
  const [canNavigate, setCanNavigate] = useState(false)

  useEffect(()=>{if(canNavigate){
    history.push("/success");
  }}, [canNavigate])

  const onLogin= async(e)=>{
    e.preventDefault();
    try{
    const {data} = await axios.post('/api/login', {email: email, password: password});
    props.updateLoggedInUser(data.user)
    console.log(data)
    setCanNavigate(true)
    
    // history.push("/success");
  } 
  catch(err){
    const errorResponse = err.response.data.errors; // Get the errors from err.response.data
    // const errorArr = []; // Define a temp error array to push the messages in
    // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
    //     errorArr.push(errorResponse[key].message)
    // }
    // Set Errors
    console.log(errorResponse)
    setErrors(errorResponse);
}
  }



  return (
    <div>
        <Card style={{backgroundColor:'#333',padding:50,margin:100,width:500}} inverse>
          <h1>Login</h1>
          <CardBody>
            <Form onSubmit={onLogin}>
              <Label for="exampleEmail">Email</Label>
              <Input id="exampleEmail" name="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
              <p>{errors}</p>
              <Label for="examplePassword">Password</Label>
              <Input id="examplePassword" name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
              <br/>
              <Button color="success">success</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
  )
}

export default Login