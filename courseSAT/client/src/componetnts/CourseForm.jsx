import React from 'react'
import { Button, Card ,CardBody,Form,Label,Input} from 'reactstrap'
const CourseForm = () => {
  return (
    <div >
      <Card className='center' style={{backgroundColor:'#333',padding:50,margin:100,width:500}} inverse>
        <h1>Create Course</h1>
        <CardBody>
          <Form>
            <Label for="title">Title</Label>
            <Input id="title" name="title" type="text"/>
            <Label for="startdate">Starting Date</Label>
            <Input id="startdate" name="startdate" type="date"/>
            <Label for="enddate">End Date</Label>
            <Input id="enddate" name="enddate" type="date"/>
            <Label for="description">Description</Label>
            <Input id="description" name="description" type="text"/>
            <Label for="coursePrice">Course Price</Label>
            <Input id="coursePrice" name="coursePrice" type="text"/>
            <Label for="imageUrl">Image Url</Label>
            <Input id="imageUrl" name="imageUrl" type="text"/>
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