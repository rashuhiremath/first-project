import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";
const Registration = ({Location ,form,setForm}) => {
    {/*  const [nameChar,setNameChar]=useState('')
    const [surnameChar,setSurnameChar]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('') 
*/}
 
   

    const handleSubmit = (e)=>{
    e.preventDefault()


        
    }

   { /* useEffect(()=>{
        const isFormComplete = () => {
            if(
               nameChar.length > 2 && 
               surnameChar.length > 3 && 
               password.length >2 &&
               confirmPassword > 2
            )
           }  

    },[]) */}
     

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form onSubmit>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name"  value={form.name} onChange={e => setForm(e.target.value)} placeholder="Enter name" required />
                
              </Form.Group>
              <Form.Group controlId="formBasicSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="surname"  value={form.surname} onChange={e => setForm(e.target.value)} placeholder="Enter surname" required />
                
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={form.email} onChange={e => setForm(e.target.value)} placeholder="Enter email" required />
                
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"  value={form.password} onChange={e => setForm(e.target.value)} placeholder="Password" required />
              </Form.Group>
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="confirmPassword" value={form.confirmPassword} onChange={e => setForm(e.target.value)} placeholder="confirm Password" required/>
              </Form.Group>
              
              {/* disabled={!isFormComplete()} */}

              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default withRouter(Registration);
