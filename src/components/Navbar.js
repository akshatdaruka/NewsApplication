import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" style={{color:"white"}} href="/"><b>NEWS INDIA</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" style={{color:"white"}} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:"white"}} href="/business">Business</a></li>
              <li className="nav-item">
                <a className="nav-link" style={{color:"white"}} href="/entertainment">Entertainment</a></li>
              <li className="nav-item">
                <a className="nav-link" style={{color:"white"}} href="/general">General</a></li>
              <li className="nav-item">
                <a className="nav-link" style={{color:"white"}} href="/health">Health</a></li>
              <li className="nav-item">
                <a className="nav-link" style={{color:"white"}} href="/science">Science</a></li>
              <li className="nav-item">
                <a className="nav-link" style={{color:"white"}} href="/sports">Sports</a></li>
              <li className="nav-item">
                <a className="nav-link" style={{color:"white"}} href="/technology">Technology</a></li>
            </ul>
          </div>
        </div>
      </nav>
      </>
    )
  }
}

export default Navbar