import { Step1, Step2, Reset, Cancel,firstNext,secondNext,firstBack,secondBack } from '../constants'
const initialData = {
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

export function register(state = initialData, action) {
    switch (action.type) {
        case Step1:
            return {
                ...state,
                ...action.data,
            }
        case Step2:
            return {
                ...state,
                ...action.data,
            }
        case firstNext:
            return {
                ...state,
                ...action.data,
            }
        case secondNext:
            return {
                ...state,
                ...action.data,
            }
        case firstBack:
            return {
                ...state,
                ...action.data,
            }
        case secondBack:
            return {
                ...state,
                ...action.data,
            }
        case Reset:
            return {
                ...state,
                ...action.data,
            }
        case Cancel:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }

}

