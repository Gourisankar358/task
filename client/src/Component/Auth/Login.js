import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator';
import Loader from '../Loader';
import { post } from '../../utils/service'
import { checkAuth } from '../../utils/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loading: false,
        }
        this.validator = new SimpleReactValidator({
            messages: {
                in: 'Passwords need to match!'
            }
        })
    }
    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = e => {
        this.setState({
            loading: true
        })
        e.preventDefault();
        if (this.validator.allValid()) {
            const lData = {
                email: this.state.email,
                password: this.state.password,
            }
            post('/taxkgs-e0146/us-central1/user/login', lData)
                .then((data) => {
                    console.log(data)
                    if (data.data.success === true) {
                        this.setState({ loading: false });
                        toast.dark("Login Successfully",
                            { position: toast.POSITION.BOTTOM_CENTER, autoClose: 3000 })
                        checkAuth.authenticate();
                        localStorage.setItem('uToken', data.data.users[0].id);
                        localStorage.setItem('uName', `${data.data.users[0].firstName} ${data.data.users[0].lastName}`);
                        localStorage.setItem('u_id', data.data.users[0].id);
                        localStorage.setItem('uEmail', data.data.users[0].email);
                        this.props.history.push('/');
                        window.location.reload();
                    } else {
                        toast.dark("Credential Did Not Match!",
                            { position: toast.POSITION.BOTTOM_CENTER, autoClose: 3000 })
                        this.setState({ loading: false });
                    }

                }).catch((error) => {
                    console.log(error);
                    this.setState({ loading: false });
                })

        } else {
            this.validator.showMessages();
            this.forceUpdate();
            this.setState({
                loading: false
            })
        }
    }
    UNSAFE_componentWillMount() {
        if (checkAuth.isAuthenticated)
            this.props.history.push('/')
    }

    render() {
        return (
            <div>
                {this.state.loading ?
                    <Loader /> : null
                }
                <div className="container">
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-6" style={{ marginLeft: "8%" }}>
                            <div className="card" style={{ "width": "25rem", "margin-top": "10%" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Sign In to your Account</h5>
                                    <form>
                                        <div className="form-group">
                                            <label for="email">Email address</label>
                                            <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.email} />
                                            {this.validator.message('email', this.state.email, 'required|email', { className: 'text-danger' })}
                                        </div>
                                        <div className="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
                                            {this.validator.message('password', this.state.password, 'required', { className: 'text-danger' })}
                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Login</button><br />
                                        Don't have account? <Link to="/register">Signup</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
