import axios from 'axios';
import React, {useState} from 'react';
import { Button, Card ,CardBody,Form,Label,Input} from 'reactstrap';
import { useHistory } from 'react-router-dom';

const CourseForm = (props) => {

  const [title, setTitle]=useState('');
  const [startingDate, setStartingDate]=useState({});
  const [endDate, setEndDate]=useState({});
  const [description, setDescription]=useState('');
  const [coursePrice, setCoursePrice]=useState('');
  const [imageUrl, setImageUrl]=useState('');

  const history=useHistory();

  const onCreateCourse=e=>{
    e.preventDefault ();
    axios.post('http://localhost:8000/api/course', {title: title, startingDate: startingDate,
    endDate: endDate, description: description, coursePrice: coursePrice,instructor:props.loggedInUser, imageUrl: imageUrl})
    .then(history.replace("/success"))
    .catch(err=>console.error(err));
  }

  return (
    <div >
      <Card className='center' style={{backgroundColor:'#333',padding:50,margin:100,width:500}} inverse>
        <h1>Create Course</h1>
        <CardBody>
          <Form onSubmit={onCreateCourse}>
            <Label for="title">Title</Label>
            <Input id="title" name="title" type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            <Label for="startdate">Starting Date</Label>
            <Input id="startdate" name="startdate" type="date" onChange={(e)=>setStartingDate(e.target.value)}/>
            <Label for="enddate">End Date</Label>
            <Input id="enddate" name="enddate" type="date" onChange={(e)=>setEndDate(e.target.value)}/>
            <Label for="description">Description</Label>
            <Input id="description" name="description" type="text" onChange={(e)=>setDescription(e.target.value)}/>
            <Label for="coursePrice">Course Price</Label>
            <Input id="coursePrice" name="coursePrice" type="number" onChange={(e)=>setCoursePrice(e.target.value)}/>
            <Label for="imageUrl">Image Url</Label>
            <Input id="imageUrl" name="imageUrl" type="text" onChange={(e)=>setImageUrl(e.target.value)}/>
            <br/>
            <Button color="success">Create</Button>
          </Form>
        </CardBody>
      </Card>
      <br/>
        </div>
  )
}

export default CourseForm