import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';

import { CategorySelect } from './CategorySelect';
import { Link } from 'react-router-dom';
import './CreateCardProduct.css';

export function CreateCardProduct() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState('');
  const [titleErr, setTitleErr] = useState('');
  const [titleValid, setTitleValid] = useState(false);
  const [description, setDescription] = useState('');
  const [descriptionErr, setDescriptionErr] = useState('');
  const [descriptionValid, setDescriptionValid] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [imgUrlErr, setImgUrlErr] = useState('');
  const [imgUrlValid, setImgUrlValid] = useState(false);
  const [category, setCategory] = useState('Select category');
  const [categoryErr, setCategoryErr] = useState(false);
  const [categoryValid, setCategoryValid] = useState(false);
  const [price, setPrice] = useState('');
  const [priceErr, setPriceErr] = useState('');
  const [priceValid, setPriceValid] = useState(false);

  const [formErr, setFormErr] = useState('');
  const [formValid, setFormValid] = useState('');

  const [CategoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/category/')
      .then((response) => {
        setCategoryList(response.data.data);
      })
      .catch((error) => console.error('Fetching product list failed:', error));
  }, []);

  function updateTitle(e) {
    setTitle(e.target.value);
  }
  function updateDescription(e) {
    setDescription(e.target.value);
  }
  function updateImgUrl(e) {
    setImgUrl(e.target.value);
  }
  function updateCategory(e) {
    setCategory(e.target.value);
  }
  function updateRating(e) {
    setRating(e.target.value);
  }

  const symbList = '`~!@#$%^&*()_+-=[]{}|":;?/>.<,\'';
  const symbList2 =
    '`~!@#$%^&*()_+-=[]{}|":;?/>.<,\'qwertyuioplkjhgfdsazxcvbnmąčęėįšųūQWERTYUIOPLKJHGFDSAZXCVBNMĄČĘĖĮŠŲŪ';

  function handleSubmit(e) {
    e.preventDefault();

    //validacijos pradzia

    if (!title) {
      setTitleErr(`field can't be empty`);
      setTitleValid(false);
      return;
    } else {
      setTitleErr(false);
      setTitleValid(true);
    }

    if (!description) {
      setDescriptionErr(`field can't be empty`);
      setDescriptionValid(false);
      return;
    } else {
      setDescriptionErr(false);
      setDescriptionValid(true);
    }

    if (!imgUrl) {
      setImgUrlErr(`field can't be empty`);
      setImgUrlValid(false);
      return;
    } else {
      setImgUrlErr(false);
      setImgUrlValid(true);
    }

    for (const i of symbList2) {
      for (const j of year) {
        if (i === j) {
          return setYearErr(`can't use symbols and letters`);
        }
      }
    }

    if (category === 'Select category') {
      setCategoryErr(true);
      setCategoryValid(false);
      return;
    } else {
      setCategoryErr(false);
      setCategoryValid(true);
    }

    if (!price || price < 1) {
      setRatingErr(`field can't be empty`);
      setRatingValid(false);
      return;
    } else {
      setRatingErr(false);
      setRatingValid(true);
    }

    for (const i of symbList2) {
      for (const j of rating) {
        if (i === j) {
          return setRatingErr(`can't use symbols and letters`);
        }
      }
    }

    //validacijos pabaiga

    axios
      .post('http://localhost:3000/api/product', {
        title,
        description,
        img_url: imgUrl,
        genreid: genre,
        price,
      })
      .then((data) => {
        console.log(data.data);

        if (data.data.status === 'ok') {
          setFormValid(data.data.msg);
          setFormErr('');
          handleShow();
        }
        if (data.data.status === 'err') {
          setFormErr(data.data.msg);
          setFormValid('');
        }
      })
      // .then(() => {naviagate('/')})
      .catch((error) => console.error(error));
  }

  function handleCreateNew() {
    window.location.reload();
  }
  return (
    <div className="container">
      <Container className="">
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="CreateCardMovie-form">
            <h2 className="formCenter">Product</h2>

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
              <Form.Group className="mb-2 CreateCardMovie-group">
                <Form.Label className="fs-4 " id="">
                  Title:
                </Form.Label>
                <Form.Control
                  onChange={updateTitle}
                  type="text"
                  className={`form-control ${titleValid ? 'is-valid' : ''} ${titleErr ? 'is-invalid' : ''} `}
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <div className="invalid-feedback">{titleErr}</div>
              </Form.Group>
              <Form.Group className="mb-2 CreateCardMovie-group">
                <Form.Label className="fs-4" id="inputGroup-sizing-default">
                  Description:
                </Form.Label>
                <Form.Control
                  onChange={updateDescription}
                  type="text"
                  className={`form-control ${descriptionValid ? 'is-valid' : ''} ${
                    descriptionErr ? 'is-invalid' : ''
                  }  `}
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <div className="invalid-feedback">{descriptionErr}</div>
              </Form.Group>
              <Form.Group className="mb-2 CreateCardMovie-group">
                <Form.Label className="fs-4" id="inputGroup-sizing-default">
                  Img url:
                </Form.Label>
                <Form.Control
                  onChange={updateImgUrl}
                  type="text"
                  className={`form-control ${imgUrlValid ? 'is-valid' : ''} ${imgUrlErr ? 'is-invalid' : ''}  `}
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <div className="invalid-feedback">{imgUrlErr}</div>
              </Form.Group>
              <Form.Group className="mb-2 CreateCardMovie-group">
                <Form.Label className="fs-4" id="inputGroup-sizing-default">
                  Price:{' '}
                </Form.Label>
                <Form.Control
                  onChange={updateYear}
                  type="text"
                  className={`form-control ${yearValid ? 'is-valid' : ''} ${yearErr ? 'is-invalid' : ''}  `}
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <div className="invalid-feedback">{yearErr}</div>
              </Form.Group>
              <Form.Group className="mb-2 CreateCardMovie-group">
                <Form.Label className="fs-4" id="inputGroup-sizing-default">
                  Category:
                </Form.Label>
                <select
                  onChange={updateGenre}
                  className={`CreateCardMovie-select ${genreValid ? 'is-valid' : ''} ${
                    genreErr ? 'is-invalid' : ''
                  } form-select-sm  `}
                  aria-label=".form-select-sm example"
                  required
                >
                  <option select="">Select category </option>
                  {genreList.map((Category) => (
                    <CategorySelect key={category.id} id={category.id} categoryType={category.category_type} />
                  ))}
                </select>
                <div className="invalid-feedback">{categoryErr}</div>
              </Form.Group>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-danger CreateCardMovie-btn" type="submit">
                  Create
                </button>
              </div>
            </form>
          </Col>
        </Row>

        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="modalStyle">
              <Modal.Title>Message</Modal.Title>
            </Modal.Header>
            <div className="textStyle" role="alert">
              Product created successfully
            </div>
            <div className="textStyle2">
              <Button
                variant="danger"
                onClick={handleCreateNew}
                className=" buttonSize ms-2 me-2
           mb-2 btn btn-lg rounded-3 btn-danger CreateCardSerial-btn"
              >
                Create Product
              </Button>
              <Link
                to="/"
                type="button"
                className="btn buttonSize ms-2 me-2 
           mb-2 btn btn-lg rounded-3 btn-danger  CreateCardSerial-btn"
              >
                Go to home page
              </Link>
            </div>
          </Modal>
        </>
      </Container>
    </div>
  );
}
