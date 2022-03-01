import React, { useState } from 'react'
import { connect } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import LeftPane from '../../components/left-pane/LeftPane'
import { loginUser } from "../../redux/auth/auth.actions"
import "../Signup/Signup.css"

const Login = ({ loginUser, isAuthenticated }) => {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { email, password } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        loginUser(email, password)
    }

    if (isAuthenticated) {
        navigate("/dashboard")
    }

    return (
        <section className="signup-container">
            <div>
                <LeftPane>Welcome back! It's not just about ideas it's about making ideas happen...</LeftPane>
            </div>
            <div className="signup-main">
                <div>
                    <h2 className="signup-heading">LogIn</h2>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="signup-content">
                        <label>Email</label>
                        <input type="email" required placeholder="sample@sample.com" name="email" value={email} onChange={onChange} />
                        <span><i className="fas fa-envelope text-muted"></i></span>
                    </div>
                    <div className="signup-content">
                        <label>Password</label>
                        <input type="password" required placeholder="Enter password" name="password" value={password} onChange={onChange} />
                        <span><i className="fas fa-lock text-muted"></i></span>
                    </div>
                    <p className="signup-content-btn">
                        <button type="submit">
                            Submit
                        </button>
                    </p>
                </form>

                <p>
                    Don't have an account yet? <Link to="/signup">Sign up</Link>
                </p>
                <p style={{ alignItems: "baseline" }}>
                    Demo Credentials: &nbsp;
                    <small ><i class="fa-solid fa-envelope"></i></small> demo@gmail.com &nbsp;
                    <small ><i class="fa-solid fa-lock-open"></i> </small>password
                </p>
            </div>


        </section>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { loginUser })(Login)