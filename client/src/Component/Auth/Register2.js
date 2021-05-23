import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import { step2, FirstBack, SecondNext } from '../../services/Actions/actions.js';

class Register2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            state: this.props.registerData.state,
            city: this.props.registerData.city,
            zip_code: this.props.registerData.zip_code,
        }
        this.validator = new SimpleReactValidator({
            messages: {

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
                state: this.state.state,
                city: this.state.city,
                zip_code: this.state.zip_code,
                SecondNext: true,
            }
            this.props.step2(data);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    nextSubmit = e => {
        e.preventDefault();
        const data = {
            step: 3,
        }
        this.props.SecondNext(data);
    }

    firstBack = e => {
        e.preventDefault();
        const data = {
            step: 1,
        }
        this.props.FirstBack(data)
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
                                    <h5 className="card-title">Step 2</h5>
                                    <form>
                                        <div className="form-group">
                                            <label for="first_name">State </label>
                                            <input type="text" className="form-control" id="state" name="state" placeholder="Enter State" onChange={this.handleChange} value={this.state.state} />
                                            {this.validator.message('state', this.state.state, 'required', { className: 'text-danger' })}

                                        </div>
                                        <div className="form-group">
                                            <label for="last_name">City</label>
                                            <input type="text" className="form-control" id="city" name="city" placeholder="Enter City" onChange={this.handleChange} value={this.state.city} />
                                            {this.validator.message('city', this.state.city, 'required', { className: 'text-danger' })}

                                        </div>
                                        <div className="form-group">
                                            <label for="zip_code">Zip Code</label>
                                            <input type="number" className="form-control" id="zip_code" name="zip_code" placeholder="Enter zip" onChange={this.handleChange} value={this.state.zip_code} />
                                            {this.validator.message('zip_code', this.state.zip_code, 'required', { className: 'text-danger' })}

                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <button type="submit" className="btn btn-primary" onClick={this.firstBack}>Back</button>
                                            </div>
                                            <div className="col-md-4">
                                                <center><button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save</button></center>
                                            </div>
                                            <div className="col-md-4">
                                                <button type="submit" className="btn btn-primary float-right" onClick={this.nextSubmit} disabled={this.props.registerData.SecondNext ? false : true}>Next</button>
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
        step2: (data) => { dispatch(step2(data)) },
        FirstBack: (data) => { dispatch(FirstBack(data)) },
        SecondNext: (data) => { dispatch(SecondNext(data)) },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register2);
