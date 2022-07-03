import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import io from "socket.io-client";
import Chat from './Chat';

const socket = io.connect("http://localhost:3001");
const CourseDetails = (props) => {
  const [thisCourse, setThisCourse]=useState({});
  const [listOfStudents2,setListOfStudents] =useState([])
  const {id}=useParams();
  const history =useHistory();
  
  const joinRoom = () => {
    if (props.loggedInUser.firstName !== "" && thisCourse.title!=="" ) {
      socket.emit("join_room", thisCourse.title);
      
    }
  };
  useEffect(()=>{
    axios.get(`/api/courses/${id}`)
    .then(response=>{setThisCourse(response.data);console.log(response.data)})
    .then(joinRoom)
    .catch(err=>console.error(err))
  },[id]);

  const userToCourse =(e)=>{
    axios.put(`/api/${id}/${props.loggedInUser._id}`,thisCourse)
    .then(res=>setThisCourse(res.data))
    .then(history.push("/success"))
  }
  
  useEffect(()=>{
    axios.get(`/api/listcourses/${id}`)
    .then(res=>{setListOfStudents(res.data[0].listOfStudents)})
    
  })


  return (
    <div style={{ marginLeft: '30%', justifyContent: 'center' }} >
      <div>
        <Container sx={{ py: 8 }} maxWidth="xlg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={{ backgroundColor: "#c1c1c1", width: '100%', height: '100%' }}
                // sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                sx={{ maxWidth: 400 }}
              >
                <CardMedia
                  alt={thisCourse.imageUrl}
                  src={thisCourse.imageUrl}
                  component="img"
                  height="400px"
                  width="400px"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {thisCourse.title}
                  </Typography>
                  <Typography>
                    {thisCourse.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  {props.loggedInUser._id != thisCourse.instructor ? <Button size="small" onClick={userToCourse}>Register this course</Button> : listOfStudents2.map((student,index)=>
                  {return(<ol><li key={index}>{student.firstName} {student.lastName}</li></ol>
                  )})}
                  <Button size="small" onClick={() => history.push("/success")}>Back</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <br />
      </div>
      <div>
        <Chat socket={socket} username={props.loggedInUser.firstName} room={thisCourse.title} />
      </div>
    </div>
  )
}

export default CourseDetails