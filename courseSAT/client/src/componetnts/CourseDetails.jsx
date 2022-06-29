import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useHistory } from 'react-router-dom';
const CourseDetails = () => {
  const history =useHistory();
  return (
    <div style={{marginLeft:'30%' ,justifyContent:'center'}}>
      <Container sx={{ py: 8 }} maxWidth="xlg"   >
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item  xs={12} sm={6} md={4}>
                <Card
                  style={{backgroundColor:"#c1c1c1",width:'150%' }}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
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