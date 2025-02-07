import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './UpdateStyle.css';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { CategorySelect } from './CategorySelect';

export default function UpdateProductForm() {
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  const [titleErr, setTitleErr] = useState('');
  const [titleValid, setTitleValid] = useState(false);

  const [descriptionErr, setDescriptionErr] = useState('');
  const [descriptionValid, setDescriptionValid] = useState(false);

  const [imgUrlErr, setImgUrlErr] = useState('');
  const [imgUrlValid, setImgUrlValid] = useState(false);


  const [categoryErr, setCategoryErr] = useState(false);
  const [categoryValid, setCategoryValid] = useState(false);

  const [priceErr, setPriceErr] = useState('');
  const [priceValid, setPriceValid] = useState(false);

  //genre select from DB
  const [CategoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/category/')
      .then((response) => {
        setCategoryList(response.data.data);
      })
      .catch((error) => console.error('Fetching product list failed:', error));
  }, []);

  //end genre select from DB

  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log('cia form data...', formData);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/${id}`)
      .then((response) => {
        setFormData(response.data.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Unable to get product data:', error);
        setLoading(true);
      });
  }, [id]);

  const numFilter = /^\d+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title) {
      setTitleErr(`field can't be empty`);
      setTitleValid(false);
      return;
    } else {
      setTitleErr(false);
      setTitleValid(true);
    }

    if (!formData.description) {
      setDescriptionErr(`field can't be empty`);
      setDescriptionValid(false);
      return;
    } else {
      setDescriptionErr(false);
      setDescriptionValid(true);
    }

    if (!formData.img_url) {
      setImgUrlErr(`field can't be empty`);
      setImgUrlValid(false);
      return;
    } else {
      setImgUrlErr(false);
      setImgUrlValid(true);
    }


    if (formData.categoryid === 'Select category') {
      setCategoryErr(true);
      setCategoryValid(false);
      return;
    } else {
      setCategoryErr(false);
      setCategoryValid(true);
    }

    if (!formData.price || formData.price < 1  || !numFilter.test(formData.price)) {
      setPriceErr(`field can't be empty`);
      setPriceValid(false);
      return;
    } else {
      setPriceErr(false);
      setPriceValid(true);
    }

    axios
      .put(`http://localhost:3000/api/product/${id}`, formData)
      .then((data) => console.log(data))
      .then(() => {
        handleShow();
      })
      .catch((error) => {
        console.error('Updating product failed:', error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!formData) {
    return <p>Error: product data not found.</p>;
  }

  return (
    <Container className="update-container">
      <Row>
        <Col className="update-form" md={{ span: 6, offset: 3 }}>
          <h2 className="formCenter "> Update product</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2 update-group">
              <Form.Label className="fs-4">Title:</Form.Label>
              <Form.Control
                className={`form-control ${titleValid ? 'is-valid' : ''} ${titleErr ? 'is-invalid' : ''} `}
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <div className="invalid-feedback">{titleErr}</div>
            </Form.Group>

            <Form.Group className="mb-2 update-group">
              <Form.Label className="fs-4">Description:</Form.Label>
              <Form.Control
                className={`form-control ${descriptionValid ? 'is-valid' : ''} ${descriptionErr ? 'is-invalid' : ''} `}
                type="textarea"
                name="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <div className="invalid-feedback">{descriptionErr}</div>
            </Form.Group>

            <Form.Group className="mb-2 update-group">
              <Form.Label className="fs-4">Img URL:</Form.Label>
              <Form.Control
                className={`form-control ${imgUrlValid ? 'is-valid' : ''} ${imgUrlErr ? 'is-invalid' : ''} `}
                type="text"
                name="img_url"
                value={formData.img_url}
                onChange={(e) => setFormData({ ...formData, img_url: e.target.value })}
              />
              <div className="invalid-feedback">{imgUrlErr}</div>
            </Form.Group>


            <Form.Group className="mb-2 update-group">
              <Form.Label className="fs-4" id="inputGroup-sizing-default">
              Category:
              </Form.Label>
              <select
                name="genre_type"
                value={formData.genre_type}
                onChange={(e) => setFormData({ ...formData, categoryid: e.target.value, category_type: e.target.value })}
                className={` update-select  ${categoryValid ? 'is-valid' : ''} ${
                  categoryErr ? 'is-invalid' : ''
                } form-select-sm  `}
                aria-label=".form-select-sm example"
              >
                <option className="update-select" select="">
                  Select category
                </option>
                {genreList.map((category) => (
                  <CategorySelect key={category.id} id={category.id} categoryType={category.category_type} />
                ))}
              </select>
              <div className="invalid-feedback">{categoryErr}</div>
            </Form.Group>

            <Form.Group className="mb-2 update-group">
              <Form.Label className="fs-4">Price:</Form.Label>
              <Form.Control
                className={`form-control ${ratingValid ? 'is-valid' : ''} ${ratingErr ? 'is-invalid' : ''}  `}
                type="text"
                name="Price"
                value={formData.Price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
              <div className="invalid-feedback">{ratingErr}</div>
            </Form.Group>

            <Button variant="secondary" type="submit" className="w-100 fs-5 update-btn btn-danger">
              Update
            </Button>
          </Form>
        </Col>
      </Row>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="modalStyle">
            <Modal.Title>Message</Modal.Title>
          </Modal.Header>
          <div className="textStyle" role="alert">
          Product updated successfully
          </div>
          <Modal.Footer className="textStyle2">
            <Link to="/" type="button" className="btn btn-danger update-btn ms-3">
              Go to home page
            </Link>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
}
