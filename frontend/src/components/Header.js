import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { ReactComponent as Logo } from '../images/ImagesGallery.svg'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Logo style={{maxWidth: '14rem', maxHeight: '3rem'}} />
        </Container>
      </Navbar>
    </>
  )
}

export default Header
