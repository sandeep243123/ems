import React from 'react'
import style from './styles/LoginStyle.module.css'
function SignUpComponent() {
  return (
    <>
      <section className={`vh-100 ${style.gradientCustom}`}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                  <div className="card-body p-5 text-center" style={{height:"85vh"}}>
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                      <p className="text-white-50 mb-5">Please fill all fields!</p>
                      <div data-mdb-input-init className="form-outline form-white mb-4" style={{textAlign:'left'}}>
                        <label className="form-label" htmlFor="typeEmailX">Full Name</label>
                        <input type="email" id="typeEmailX" className="form-control form-control-lg bg-dark text-white" placeholder='Email'/>
                      </div>
                      <div data-mdb-input-init className="form-outline form-white mb-4" style={{textAlign:'left'}}>
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                        <input type="email" id="typeEmailX" className="form-control form-control-lg bg-dark text-white" placeholder='Email'/>
                      </div>
                      <div data-mdb-input-init className="form-outline form-white mb-4" style={{textAlign:'left'}}>
                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                        <input type="password" id="typePasswordX" className="form-control form-control-lg bg-dark text-white" placeholder='Password'/>
                      </div>
                      <div data-mdb-input-init className="form-outline form-white mb-4" style={{textAlign:'left'}}>
                        <label className="form-label" htmlFor="typePasswordX">Confirm Password</label>
                        <input type="password" id="typePasswordX" className="form-control form-control-lg bg-dark text-white" placeholder='Password'/>
                      </div>
                      <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>
                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                     
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

export default SignUpComponent
