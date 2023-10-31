import React from 'react'
import NavBar from '../components/NavBar'
import { Container } from 'react-bootstrap'

function Home() {
  return (
    <>
      {/* ============ Section 1 Start ============ */}
    <div className="sec1-main 100vh">
        <NavBar/>

    <Container>
      <div className="sec1-contect">
        <div className="sec1-txt">
          <h1 className='text-white'>Hi! It's me Shahzaib Khan</h1>
          <h3 className='text-white'>and I am a Full Stack Developer</h3>
        </div>
      </div>
      </Container>

    </div>
      {/* ============ Section 1 End ============ */}
    </>
  )
}

export default Home
