import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './CreateCardForm.css';
import { Link } from 'react-router-dom';

export function UpdateCategory(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [category, setCategory] = useState('');
  const [categoryErr, setCategoryErr] = useState('');
  const [categoryValid, setCategoryValid] = useState(false);

  const [formErr, setFormErr] = useState('');
  const [formValid, setFormValid] = useState('');

  useEffect(()=>{
    axios
    .get(`http://localhost:3000/api/category/${props.id}`)
    .then((res)=>{ setCategory(res.data.data[0])
    })
    .catch((error)=> {
      console.error(error)
    })
  
  },[props.id])

  const symbList = '`~!@#$%^&*()_+-=[]{}|":;?/>.<,\'0123456789';

  function handleOnSubmit() {
    if (!category || category.length > 20) {
      setcategoryErr(`field can't be empty and more then 20 symbols`);
      setcategoryValid(false);
      return;
    } else {
      setCategoryErr(false);
      setCategoryValid(true);
    }

    for (const i of symbList) {
      for (const j of Category.Category_type) {
        if (i === j) {
          return setCategoryErr(`can't use symbols`);
        }
      }
    }

    axios
      .put(`http://localhost:3000/api/category/${props.id}`, category)
      .then((response) => {
       
        if (response.data.status === 'ok') {
          setFormValid(response.data.msg);
          setFormErr('');
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.response.data.status === 'err') {
          setFormErr(error.response.data.msg);
          setFormValid('');
        }
      });
  }
  return (
    <>
      <Button className="ms-2 mt-1 mb-1 pe-3 ps-3 me-3 CreateCard-btn" variant="outline-danger" onClick={handleShow}>
        Update
      </Button>
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalStyle'>
          <Modal.Title>Message</Modal.Title>   
        </Modal.Header>

        {formValid && (
      <div className="alertStyle1"  role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p className="mb-0">{formValid}</p>
      </div>
    )}
        {formErr && (
      <div className="alertStyle2"  role="alert">
        <h4 className="alert-heading">Error message</h4>
        <p className="mb-0">{formErr}</p>
      </div>
    )}

        <div className="textStyle" role="alert">
          Update category
        </div>

        <Form.Group className=" testStyle">
      <Form.Control 
        value={category.category_type}
        onChange={(e)=>setCategory({...category, category_type : e.target.value})}
        type="text"
        className={`textStyle3 form-control ${categoryValid ? 'is-valid' : ''} ${categoryErr ? 'is-invalid' : ''}  `}
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
      <div className="invalid-feedback ms-4">{categoryErr}</div>
    </Form.Group>

        <div className='textStyle2'>

            <Button onClick={handleOnSubmit} variant="danger"  className=" buttonSize ms-2 me-2
           mb-2 btn btn-lg rounded-3 btn-danger CreateCardSerial-btn" >
              Update
            </Button>
            <Link to="/" type="button" className="btn buttonSize ms-2 me-2 
           mb-2 btn btn-lg rounded-3 btn-danger  CreateCardSerial-btn">
              Home Page
            </Link>
        </div>
      </Modal>
      </>
     
    </>
  );
}


