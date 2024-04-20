import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Followers from "./Followers";
import Navbar from "./NavBar.jsx";


const SearchUser = () => {
  const [filtered, setFiltered] = useState('')
  // console.log(person);

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setFiltered(inputValue)

  }

  return (
    <div>
      <Navbar />
      <Form inline>
        <Row className="w-50 m-auto p-3">
          <Col xs="auto">
            <Form.Control
            onChange={handleChange}
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      <Followers filtered={filtered}/>
    </div>
    
  );
  
};

export default SearchUser;
