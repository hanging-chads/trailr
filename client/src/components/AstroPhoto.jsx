import React, { useState } from 'react';
import { Form } from 'bootstrap';
import axios from 'axios';
import { uploadPhoto } from '../helpers'; 



const AstroPhoto = ({ user }) => {
  const [bg, setBg] = useState(true);
  const [image, setimage] = useState(null);

  const fileSelectedHandler = e => {
    setimage(e.target.files);
  };

  const handleUpload = () => {

    // uploadPhoto(image)
    //   .then(data => {
    //     console.log(data.data);
    //     setimage(null);
    //   })
  };

  const handleChange = () => {
    setBg(!bg);
    console.log(bg)
  };
   




  return (
    <>
      <button onClick={handleChange} />
      <input type='file' onChange={fileSelectedHandler} />
      <button onClick={handleUpload}>submit</button>
      <img />
    </>
  );
  
};

// <Form>
//         <Form.Switch 
//           onChange={handleChange}
//           type='switch'
//           id={console.log(Form)}
//           label='nightmode'
//           checked={bg}
//         />
//       </Form>

// <Button variant="success" onClick={toggleModal}>Add Picture</Button>
//       <Modal show={modelShow} onHide={toggleModal} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Picture</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <input type='file' onChange={fileSelectedHandler} />
//           <button onClick={handleUpload}>submit</button>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="danger" onClick={toggleModal}>Close</Button>
//           {/* <Button variant="success" onClick={submitHandler}>Submit Images</Button> */}
//         </Modal.Footer>
//       </Modal> 


export default AstroPhoto;