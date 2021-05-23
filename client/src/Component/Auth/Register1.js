import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import { step1, FirstNext } from '../../services/Actions/actions.js';
class Register1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: this.props.registerData.firstName,
            lastName: this.props.registerData.lastName,
            email: this.props.registerData.email,
            phone: this.props.registerData.phone,
            password: this.props.registerData.password,
            c_password: this.props.registerData.c_password,

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
        e.preventDefault();

        if (this.validator.allValid()) {
            const data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password,
                c_password: this.state.c_password,
                firstNext: true,
            }
            this.props.step1(data);

        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    nextSubmit = e => {
        e.preventDefault();
        const data = {
            step: 2,
        }
        this.props.FirstNext(data)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-6" style={{ marginLeft: "8%" }}>
                            <div className="card" style={{ "width": "25rem", "margin-top": "5%", marginBottom: "20%" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Step 1</h5>
                                    <form>
                                        <div className="form-group">
                                            <label for="firstName">First Name</label>
                                            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter First Name" onChange={this.handleChange} value={this.state.firstName} />
                                            {this.validator.message('firstName', this.state.firstName, 'required', { className: 'text-danger' })}
                                        </div>
                                        <div className="form-group">
                                            <label for="lastName">Last Name</label>
                                            <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Enter Last Name" onChange={this.handleChange} value={this.state.lastName} />
                                            {this.validator.message('lastName', this.state.lastName, 'required', { className: 'text-danger' })}
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.email} />
                                            {this.validator.message('email', this.state.email, 'required|email', { className: 'text-danger' })}
                                        </div>
                                        <div className="form-group">
                                            <label for="phone">Phone Number</label>
                                            <input type="number" className="form-control" id="phone" name="phone" placeholder="Enter Phone Number" onChange={this.handleChange} value={this.state.phone} />
                                            {this.validator.message('phone', this.state.phone, 'required|min:10|max:10', { className: 'text-danger' })}

                                        </div>
                                        <div className="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
                                            {this.validator.message('password', this.state.password, 'required|min:8', { className: 'text-danger' })}

                                        </div>
                                        <div className="form-group">
                                            <label for="c_password">Confirm Password</label>
                                            <input type="password" className="form-control" name="c_password" id="c_password" placeholder="Password" onChange={this.handleChange} value={this.state.c_password} />
                                            {this.validator.message('c_password', this.state.c_password, `required|in:${this.state.password}`, { className: 'text-danger' }, { messages: { in: 'Passwords need to match!' } })}
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                                            </div>
                                            <div className="col-md-6" >
                                                <button type="submit" className="btn btn-primary float-right" onClick={this.nextSubmit} disabled={this.props.registerData.firstNext ? false : true}>Next</button>

                                            </div>

                                        </div>

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

const mapStateToProps = (state) => {
    console.log(state);
    return {
        registerData: state.register,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        step1: (data) => { dispatch(step1(data)) },
        FirstNext: (data) => { dispatch(FirstNext(data)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register1);
