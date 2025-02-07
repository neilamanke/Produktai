import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import './Registration.css';

export function Registration() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState('');
  const [firstNameErr, setFirstNameErr] = useState('');
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastName, setLastName] = useState('');
  const [lastNameErr, setLastNameErr] = useState('');
  const [lastNameValid, setLastNameValid] = useState(false);
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [username, setUsername] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [usernameValid, setUsernameValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [repass, setRepass] = useState('');
  const [repassErr, setRepassErr] = useState('');
  const [repassValid, setRepassValid] = useState(false);

  const [formErr, setFormErr] = useState('');
  const [formValid, setFormValid] = useState('');

  function updateFirstName(e) {
    setFirstName(e.target.value);
  }
  function updateLastName(e) {
    setLastName(e.target.value);
  }
  function updateEmail(e) {
    setEmail(e.target.value);
  }
  function updateUsername(e) {
    setUsername(e.target.value);
  }
  function updatePassword(e) {
    setPassword(e.target.value);
  }
  function updateRepass(e) {
    setRepass(e.target.value);
  }

  const symbList = '`~!@#$%^&*()_+-=[]{}|":;?/>.<,\'0123456789';
  const symbList3 = '`~!@#$%^&*()+=[]{}|-":;?/><,\'';
  const symbList4 = '`~!#$%^&*()_+=[]{}|-":;?/><,\'';

  const pwdFilter = /^((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)\w.{5,20}\w)/;
  const emailFilter = /^\S+@\S+\.\S+$/;

  function handleSubmit(e) {
    e.preventDefault();

    //validacijos pradzia

    if (!firstName) {
      setFirstNameErr(`field can't be empty`);
      setFirstNameValid(false);
      return;
    } else {
      setFirstNameErr(false);
      setFirstNameValid(true);
    }

    for (const i of symbList) {
      for (const j of firstName) {
        if (i === j) {
          return setFirstNameErr(`can't use symbols and numbers`);
        }
      }
    }

    if (!lastName) {
      setLastNameErr(`field can't be empty`);
      setLastNameValid(false);
      return;
    } else {
      setLastNameErr(false);
      setLastNameValid(true);
    }

    for (const i of symbList) {
      for (const j of lastName) {
        if (i === j) {
          return setLastNameErr(`can't use symbols and numbers`);
        }
      }
    }

    if (!email || !emailFilter.test(email)) {
      setEmailErr(`field can't be empty`);
      setEmailValid(false);
      return;
    } else {
      setEmailErr(false);
      setEmailValid(true);
    }

    for (const i of symbList4) {
      for (const j of email) {
        if (i === j) {
          return setEmailErr(`can't use symbols`);
        }
      }
    }

    if (!username || username.length < 5 || username.length > 20) {
      setUsernameErr(`field can't be empty, min 5 max 20 symbols`);
      setUsernameValid(false);
      return;
    } else {
      setUsernameErr(false);
      setUsernameValid(true);
    }

    for (const i of symbList3) {
      for (const j of username) {
        if (i === j) {
          return setUsernameErr(`can't use symbols, available numbers and symbols _ . `);
        }
      }
    }

    if (!password || password.length < 8 || !pwdFilter.test(password)) {
      setPasswordErr(
        `The password must consist of one lowercase letter, one uppercase letter, one symbol and one number.`,
      );
      setPasswordValid(false);
      return;
    } else {
      setPasswordErr(false);
      setPasswordValid(true);
    }

    if (!repass || repass != password) {
      setRepassErr(`the passwords must be the same`);
      setRepassValid(false);
      return;
    } else {
      setRepassErr(false);
      setRepassValid(true);
    }

    //validacijos pabaiga

    axios
      .post('http://localhost:3000/api/users/register', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
        repass: repass,
        roleid: 1,
      })
      .then((data) => {
        if (data.data.status === 'ok') {
          setFormValid(data.data.msg);
          setFormErr('');
          handleShow();
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
    <div className="container">
      <Container className="">
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="registration-form">
            <h2 className="formCenter">Registration</h2>

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
              <Form.Group className="mb-2 registration-group">
                <Form.Label className="fs-4 " id="">
                  First Name:
                </Form.Label>
                <Form.Control
                  onChange={updateFirstName}
                  type="text"
                  className={`form-control ${firstNameValid ? 'is-valid' : ''} ${firstNameErr ? 'is-invalid' : ''} `}
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <div className="invalid-feedback">{firstNameErr}</div>
              </Form.Group>
              <Form.Group className="mb-2 registration-group">
                <Form.Label className="fs-4" id="inputGroup-sizing-default">
                  Last Name:
                </Form.Label>
                <Form.Control
                  onChange={updateLastName}
                  type="text"
                  className={`form-control ${lastNameValid ? 'is-valid' : ''} ${lastNameErr ? 'is-invalid' : ''}  `}
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <div className="invalid-feedback">{lastNameErr}</div>
              </Form.Group>
              <Form.Group className="mb-2 registration-group">
                <Form.Label className="fs-4" id="inputGroup-sizing-default">
                  Email:
                </Form.Label>
                <Form.Control
                  onChange={updateEmail}
                  type="email"
                  className={`form-control ${emailValid ? 'is-valid' : ''} ${emailErr ? 'is-invalid' : ''}  `}
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <div className="invalid-feedback">{emailErr}</div>
              </Form.Group>
              <Form.Group className="mb-2 registration-group">
                <Form.Label className="fs-4" id="inputGroup-sizing-default">
                  Username:
                </Form.Label>
                <Form.Control
                  onChange={updateUsername}
                  type="text"
                  className={`form-control ${usernameValid ? 'is-valid' : ''} ${usernameErr ? 'is-invalid' : ''}  `}
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <div className="invalid-feedback">{usernameErr}</div>
              </Form.Group>
              <Form.Group className="mb-2 registration-group">
                <Form.Label className="fs-4" id="inputGroup-sizing-default">
                  Password:{' '}
                </Form.Label>
                <Form.Control
                  onChange={updatePassword}
                  type="password"
                  className={`form-control ${passwordValid ? 'is-valid' : ''} ${passwordErr ? 'is-invalid' : ''}  `}
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <div className="invalid-feedback">{passwordErr}</div>
              </Form.Group>
              <Form.Group className="mb-2 registration-group">
                <Form.Label className="fs-4" id="inputGroup-sizing-default">
                  Password Confirm:
                </Form.Label>
                <input
                  onChange={updateRepass}
                  type="password"
                  className={`form-control ${repassValid ? 'is-valid' : ''} ${repassErr ? 'is-invalid' : ''}  `}
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <div className="invalid-feedback">{repassErr}</div>
              </Form.Group>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-danger registration-btn " type="submit">
                  Register
                </button>
              </div>
              <p className="registration-link">
                Already have an account? <a href="/Login">Login </a>
              </p>
            </form>
          </Col>
        </Row>

        <>        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalStyle'>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <div className="textStyle" role="alert">
        User registered successfully
        </div>
       <Modal.Footer className="textStyle2" >
         <Link to="/login" type="button" className="btn btn-danger update-btn ms-3">
           Login
         </Link>
         <Link to="/" type="button" className="btn btn-danger update-btn ms-3">
           Home page
         </Link>
       </Modal.Footer>
      </Modal>
      </>
      </Container>
    </div>
  );
}
