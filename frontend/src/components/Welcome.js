import React from 'react'
import { Button } from 'react-bootstrap'

const Welcome = () => (
  <div style={{ maxWidth: '80%', margin: 'auto' }} className="bg-light p-2">
    <h1 className="text-align-center mb-3">Images Gallery</h1>
    <p className="mb-4">
      This application retreives photos from Unsplash API. Enter any words in
      the input.
    </p>
    <Button variant="primary" href="https://unsplash.com" target="_blank">
      Learn More
    </Button>
  </div>
)

export default Welcome
