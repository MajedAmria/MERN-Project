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
import { CardImg } from 'reactstrap';


const CourseDetails = (props) => {
  const [thisCourse, setThisCourse]=useState({});
  const {id}=useParams();
  const history =useHistory();

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/courses/${id}`)
    .then(response=>setThisCourse(response.data))
    .catch(err=>console.error(err))
  },[id]);

  return (
    <div style={{marginLeft:'30%' ,justifyContent:'center'}}>
      <Container sx={{ py: 8 }} maxWidth="xlg">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  style={{backgroundColor:"#c1c1c1",width:'100%',height:'100%' }}
                  // sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  sx={{ maxWidth: 400 }}
                >
                  <CardMedia 
                    alt={thisCourse.imageUrl} 
                    src={thisCourse.imageUrl} 
                    component="img"
                    height = "400px"
                    width = "400px"
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
                    <Button size="small">Edit</Button>
                    <Button size="small" onClick={()=>history.push("/success")}>Back</Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
        <br/>
    </div>
  )
}

export default CourseDetails