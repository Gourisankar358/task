import React, { Component } from 'react'
import Register1 from './Register1'
import Register2 from './Register2'
import Register3 from './Register3'
import { connect } from 'react-redux';
import { checkAuth } from '../../utils/auth';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: ''
        }

    }
    UNSAFE_componentWillMount() {
        if (checkAuth.isAuthenticated)
            this.props.history.push('/')
    }


    render() {
        return (
            <div style={{ marginTop: "5%" }}>
                <div className="container">
                    <ul className="progressbar" style={{ paddingLeft: "10%" }}>
                        {this.props.registerData.step === 1 ?
                            <>
                                <li className="active">Step 1</li>
                                <li >Step 2</li>
                                <li>Step 3</li>
                            </>
                            : this.props.registerData.step === 2 ?
                                <>
                                    <li className="active">Step 1</li>
                                    <li className="active">Step 2</li>
                                    <li>Step 3</li>
                                </>
                                : this.props.registerData.step === 3 ?
                                    <>
                                        <li className="active">Step 1</li>
                                        <li className="active" >Step 2</li>
                                        <li className="active">Step 3</li>
                                    </>
                                    : null
                        }
                    </ul>
                </div>
                {this.props.registerData.step === 1 ?
                    <Register1 {...this.props} />
                    : this.props.registerData.step === 2 ?
                        <Register2 {...this.props} />
                        : this.props.registerData.step === 3 ?
                            <Register3 {...this.props} />
                            : null
                }

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

//   const mapDispatchToProps=(dispatch)=>{
//     return{
//         showCart:()=>{ dispatch(showCart())},
//     }
// }


export default connect(mapStateToProps, null)(Register);
