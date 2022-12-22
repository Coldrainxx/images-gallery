import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Search = ({ searchSubmit, word, setWord }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={searchSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  placeholder="Search for image"
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
              </Col>
              <Col>
                <Button type="submit" variant="primary">
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