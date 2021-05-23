import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { checkAuth } from '../../utils/auth';
import { post } from '../../utils/service'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { cancel, reset, SecondBack } from '../../services/Actions/actions.js';
import Loader from '../Loader';
toast.configure();
class Register3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        const rData = {
            firstName: this.props.registerData.firstName,
            lastName: this.props.registerData.lastName,
            email: this.props.registerData.email,
            phone: this.props.registerData.phone,
            password: this.props.registerData.password,
            state: this.props.registerData.state,
            city: this.props.registerData.city,
            zip_code: this.props.registerData.zip_code,
        }
        this.setState({
            loading: true,
        })

        post('/taxkgs-e0146/us-central1/user/register', rData)
            .then((data) => {
                if (data.data.success === true) {
                    toast.dark('Registation Successful',
                        { position: toast.POSITION.BOTTOM_CENTER, autoClose: 3000 })
                    this.cancel()
                    this.setState({ loading: false });

                } else {
                    this.setState({ loading: false });
                }

            }).catch((error) => {
                console.log(error);
                this.setState({ loading: false });
            })
    }


    secondBack = e => {
        e.preventDefault();
        const data = {
            step: 2,
        }
        this.props.SecondBack(data)
    }
    reset = e => {
        e.preventDefault();
        const data = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            c_password: '',
            state: '',
            city: '',
            zip_code: '',
            step: 1,
            firstNext: false,
            SecondNext: false,
        }
        this.props.reset(data)
    }
    cancel = () => {
        const data = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            c_password: '',
            state: '',
            city: '',
            zip_code: '',
            step: 1,
            firstNext: false,
            SecondNext: false,
        }
        this.props.cancel(data)
        this.props.history.push('/login')

    }
    render() {

        return (
            <div>
                {
                    this.state.loading ?
                        <Loader />
                        : null
                }

                <div className="container">
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-6" style={{ marginLeft: "8%" }}>
                            <div className="card" style={{ "width": "25rem", "margin-top": "5%", marginBottom: "20%" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Step 3</h5>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <button type="submit" className="btn btn-primary" onClick={this.secondBack}>Back</button>
                                        </div>
                                        <div className="col-md-3">
                                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Subnit</button>
                                        </div>
                                        <div className="col-md-3">
                                            <button type="submit" className="btn btn-primary" onClick={this.reset}>Reset</button>
                                        </div>
                                        <div className="col-md-3">
                                            <button type="submit" className="btn btn-primary" onClick={this.cancel}>Cancel</button>
                                        </div>
                                    </div>
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
        cancel: (data) => { dispatch(cancel(data)) },
        SecondBack: (data) => { dispatch(SecondBack(data)) },
        reset: (data) => { dispatch(reset(data)) },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register3);
