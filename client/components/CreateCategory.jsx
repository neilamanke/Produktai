import { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Modal } from 'react-bootstrap';
import "./CreateCategory.css"



export function CreateCategory() {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => {
    setShow1(false);
    window.location.reload();
  };
  const handleShow1 = () => setShow1(true);

  const [category, setCategory] = useState('');
  const [categoryErr, setCategoryErr] = useState('');
  const [categoryValid, setCategoryValid] = useState(false);

  const [formErr, setFormErr] = useState('');
  const [formValid, setFormValid] = useState('');

  function updateCategory(e) {
    setCategory(e.target.value);
  }

  const symbList = '`~!@#$%^&*()_+-=[]{}|":;?/>.<,\'0123456789';

  function handleSubmit(e) {
    e.preventDefault();

    //validacijos pradzia

    if (!genre) {
      setCategoryErr(`field can't be empty`);
      setCategoryValid(false);
      return;
    } else {
      setCategoryErr(false);
      setCategoryValid(true);
    }

    for (const i of symbList) {
      for (const j of genre) {
        if (i === j) {
          return setCategoryErr(`can't use symbols`);
        }
      }
    }

    //validacijos pabaiga

    axios
      .post('http://localhost:3000/api/category', {
        category: category,
      })
      .then((data) => {
        if (data.data.status === 'ok') {
          setFormValid(data.data.msg);
          setFormErr('');
          handleShow1()
        }
      })
      // .then(() => {navigate('/')})
      .catch((error) => {
        console.error(error);

        if (error.response.data.status === 'err') {
          setFormErr(error.response.data.msg);
          setFormValid('');
        }
      });
  }

  return (
    <Container className="">
      <Row className="CreateCategory-back">
        <Col md={{ span: 6, offset: 3 }} className="CreateCategory-back">
          <h2 className="formCenter">Create Category</h2>


          {formValid && (
            <div className="ms-5 me-5 alert alert-success " role="alert">
              <h4 className="alert-heading">Well done!</h4>
              <p className="mb-0">{formValid}</p>
            </div>
          )}

          {formErr && (
            <div className="ms-5 me-5 alert alert-danger " role="alert">
              <h4 className="alert-heading">Error message</h4>
              <p className="mb-0">{formErr}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} action="">
            <Form.Group className="mb-2 CreateGenre-back">
              <Form.Label className="fs-4" id="inputGroup-sizing-default">
                New category name:
              </Form.Label>
              <Form.Control
                onChange={updateGenre}
                type="text"
                className={`form-control ${categoryValid ? 'is-valid' : ''} ${categoryErr ? 'is-invalid' : ''} CreateCategory-group `}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
              <div className="invalid-feedback ">{categoryErr}</div>
            </Form.Group>

            <div className="d-grid gap-2">
              <button className="btn btn-outline-danger CreateGenre-btn" type="submit">
                Create
              </button>
            </div>
          </form>
        </Col>
      </Row>
              
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header className='modalStyle'>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <div className=" textStyle2" role="alert">
        Category created successfully
        </div>
      </Modal>
        </Container>
        
    )
}

