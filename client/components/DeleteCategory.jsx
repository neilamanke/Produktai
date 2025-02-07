import { useState } from 'react';
import axios from 'axios';
import "./CreateCardForm.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function DeleteCategory(props) {

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => {
    setShow1(false);
    window.location.reload();
  };
  const handleShow1 = () => setShow1(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState('');


  function handleOnSubmit() {
    axios
      .delete(`http://localhost:3000/api/category/${props.id}`)
      .then((response) => {
        console.log(response.data.status)
        if (response.data.status === 'ok') {
          setMessage(response.data.msg);
        }
      })
      .catch((error) => console.error(error));
  }

  if (message) {
    handleShow1();
    setMessage('');
  }

  return (
    <>
      <Button className="ms-2 pe-3 ps-3 CreateCard-btn" variant="outline-danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className='modalStyle'>
          <Modal.Title  >Message</Modal.Title>          
        </Modal.Header>
        <div className="textStyle" role="alert">
         Are you sure you want to delete this Category
        </div>
          <div className='textStyle1' onClick={handleOnSubmit}>
                <Button
                  onClick={handleClose}                  
                  className="buttonSize ms-2 me-2 DeleteStyle-btn
           mb-2 btn btn-lg rounded-3 btn-danger"
                  type="submit"
                >
                  Yes
                </Button>
                <Button
                  className="buttonSize mb-2 btn btn-lg rounded-3 btn-danger DeleteStyle-btn"
                  variant="danger"
                  onClick={handleClose}
                >
                  No
                </Button>
          </div>
      </Modal>   
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header className='modalStyle'>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <div className=" textStyle2" role="alert">
        Category deleted successfully
        </div>
      </Modal>
    </>
  );
}
