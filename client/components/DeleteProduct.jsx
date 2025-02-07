import { useState, useEffect } from 'react';
import axios from 'axios';
import './DeleteStyle.css'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function DeleteProduct(props) {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => {
    setShow1(false);
    window.location.reload();
  };
  const handleShow1 = () => setShow1(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/${props.id}`)
      .then((response) => {
        setFormData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Unable to get product data:', error);
        setLoading(false);
      });
  }, []);

  function handleOnSubmit(e) {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/api/product/${props.id}`, formData)
      .then((data) => {
        if (data.data.status === 'ok') {
          setMessage(data.data.msg);
        }
      })
      .then(() => {
        // navigate('/');
      })
      .catch((error) => {
        console.error('Updating product failed:', error);
      });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!formData) {
    return <p>Error: product data not found.</p>;
  }

  if (message) {
    handleShow1();
    setMessage('');
  }
  return (
    <>
      <Button className="ms-2 pe-3 ps-3 DeleteStyle-btn" variant="danger" onClick={handleShow}>
        Delete
      </Button>


      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className='modalStyle'>
          <Modal.Title  >Message</Modal.Title>          
        </Modal.Header>
        <div className="textStyle" role="alert">
         Are you sure you want to delete this Movie
        </div>
        <form className='textStyle1' onSubmit={handleOnSubmit}>
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
              </form>
      </Modal>   
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header className='modalStyle'>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <div className=" textStyle2" role="alert">
        Product deleted successfully
        </div>
      </Modal>
    </>
  );
}
