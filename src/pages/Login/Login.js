import React, { useState } from 'react'
import { connect } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import LeftPane from '../../components/left-pane/LeftPane'
import { loginUser } from "../../redux/auth/auth.actions"

const Login = ({ loginUser, isAuthenticated, isLoading }) => {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { email, password } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        loginUser(email, password)
    }

    if (isAuthenticated) {
        navigate("/dashboard")
    }

    return (
        <section>
            <div>
                <LeftPane>Welcome back! It's not just about ideas it's about making ideas happen...</LeftPane>
            </div>
            <div>
                <div>
                    <h2>LogIn</h2>
                    <form onSubmit={onSubmit}>
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
                        <p>
                            <button type="submit">
                                {isLoading ? (
                                    <><span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                        Loading...</>) :
                                    ("Submit")}
                            </button>
                        </p>
                    </form>

                    <p>
                        Don't have an account yet? <Link to="/signup">Sign up</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.loading
})

export default connect(mapStateToProps, { loginUser })(Login)