import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ListCourse = (props) => {
  const history =useHistory();
  const [courses, setCourses]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/courses')
    .then(res=>{setCourses(res.data)})
  },[])

  return (
    <div >
      <div className='all'>
      <h5 className='para'>HELLO STUDENTS</h5> 
      <h2 className='para'>Welcome To COURSE@ </h2>
      <br/><br/><br/><br/>
      <h1 style={{color:"white"}}> Our Courses</h1>
      <hr style={{color:"white"}}/>
      <Container sx={{ py: 8 }} maxWidth="md" >
          {/* End hero unit */}
          <Grid container spacing={4}>
            {courses.map((course, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  style={{backgroundColor:"#c1c1c1"}}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={course.imageUrl}
                    alt={course.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {course.title}
                    </Typography>
                    <Typography>
                      {course.description}
                    </Typography>
                    <Typography>
                      {course.coursePrice}
                    </Typography>
                  </CardContent>
                  {props.loggedInUser==null?'':
                  <CardActions>
                    <Button size="small" onClick={()=>history.push(`/course/${course._id}`)}>View</Button>
                  </CardActions>}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default ListCourse