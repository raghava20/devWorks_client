import React, { useState } from 'react'
import LeftPane from "../../components/left-pane/LeftPane"
import { connect } from "react-redux"
import { signupUser } from "../../redux/auth/auth.actions"
import { setAlert } from "../../redux/alert/alert.actions"
import { Link, useNavigate } from "react-router-dom"
import "./Signup.css"

const Signup = ({ setAlert, signupUser, isAuthenticated }) => {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const { name, email, password, confirmPassword } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setAlert("Password do not match", "is-danger")
        }
        else if (password.length < 6) {
            setAlert("Password must be at least 6 characters", "is-danger")
        }
        else {
            signupUser({ name, email, password })
        }
    }
    if (isAuthenticated) {
        navigate("/dashboard")
    }

    return (
        <section className="signup-container">
            <div>
                <LeftPane>SignUp and start to show your works!</LeftPane>
            </div>
            <div className="signup-main">
                <div >
                    <h2 className="signup-heading">Sign up</h2>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="signup-content">
                        <label>Name</label>
                        <input type="text" required placeholder="Enter name" name="name" value={name} onChange={onChange} />
                        <span><i className="fas fa-user text-muted"></i></span>
                    </div>
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
                    <div className="signup-content">
                        <label>Confirm Password</label>
                        <input type="password" required placeholder="Confirm password" name="confirmPassword" value={confirmPassword} onChange={onChange} />
                        <span><i className="fas fa-lock text-muted"></i></span>
                    </div>
                    <div className="signup-content-btn">
                        <button type="submit">Submit</button>
                    </div>

                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>

            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, signupUser })(Signup)