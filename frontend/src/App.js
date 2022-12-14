import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from './components/Header'
import ImageCard from './components/ImageCard'
import Search from './components/Search'
import Welcome from './components/Welcome'

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY

const App = () => {
  const [word, setWord] = useState('')
  const [images, setImages] = useState([])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images])
      })

      .catch((err) => console.log(err))
    setWord('')
  }

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id))
  }

  return (
    <div>
      <Header />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col className="pb-3" key={i}>
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  )
}

export default App
