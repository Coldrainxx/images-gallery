import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Search = ({ handleSubmit, word, setWord }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col lg={10} xs={8} md={8}>
                <Form.Control
                  placeholder="Search for image"
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
              </Col>
              <Col>
                <Button type="submit" variant="primary" className=''>
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Search
