import React, { useState } from 'react'
import LeftPane from "../../components/left-pane/LeftPane"
import { connect } from "react-redux"
import { signupUser } from "../../redux/auth/auth.actions"
import { setAlert } from "../../redux/alert/alert.actions"
import { Link, useNavigate } from "react-router-dom"

const Signup = ({ setAlert, signupUser, isAuthenticated, isLoading }) => {
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
        <section>
            <div>
                <LeftPane>SignUp and start to show your works!</LeftPane>
            </div>
            <div>
                <div>
                    <h2>Sign up</h2>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>Name</label>
                            <input type="text" required placeholder="Enter name" name="name" value={name} onChange={onChange} />
                            <span><i className="fas fa-user"></i></span>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" required placeholder="sample@sample.com" name="email" value={email} onChange={onChange} />
                            <span><i className="fas fa-envelope"></i></span>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" required placeholder="Enter password" name="password" value={password} onChange={onChange} />
                            <span><i className="fas fa-lock"></i></span>
                        </div>
                        <div>
                            <label>Confirm Password</label>
                            <input type="password" required placeholder="Confirm password" name="confirmPassword" value={confirmPassword} onChange={onChange} />
                            <span><i className="fas fa-lock"></i></span>
                        </div>
                        <div>
                            <button type="submit">
                                {isLoading ? (
                                    <><span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                        Loading...</>) :
                                    ("Submit")}
                            </button>
                        </div>

                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.loading
})

export default connect(mapStateToProps, { setAlert, signupUser })(Signup)