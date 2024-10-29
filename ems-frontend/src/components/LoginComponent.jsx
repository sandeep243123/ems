import React from 'react'
import style from './styles/LoginStyle.module.css'

function LoginComponent() {
  return (
    <>
      <section className={`vh-100 ${style.gradientCustom}`}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                  <div className="card-body p-5 text-center" style={{height:"75vh"}}>
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">Please enter your login and password!</p>
                      <div data-mdb-input-init className="form-outline form-white mb-4" style={{textAlign:'left'}}>
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                        <input type="email" id="typeEmailX" className="form-control form-control-lg bg-dark text-white" placeholder='Email'/>
                      </div>
                      <div data-mdb-input-init className="form-outline form-white mb-4" style={{textAlign:'left'}}>
                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                        <input type="password" id="typePasswordX" className="form-control form-control-lg bg-dark text-white" placeholder='Password'/>
                      </div>
                      <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                      <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                      <p className="mb-0" style={{marginLeft:"-40px"}}>Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                      </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default LoginComponent
