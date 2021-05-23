import { Step1, Step2, Reset, Cancel, firstNext, secondNext, firstBack, secondBack } from '../constants'
export const step1 = (data) => {
    return {
        type: Step1,
        data: data
    }
}
export const step2 = (data) => {
    return {
        type: Step2,
        data: data
    }
}
export const FirstNext = (data) => {
    return {
        type: firstNext,
        data: data
    }
}
export const SecondNext = (data) => {
    return {
        type: secondNext,
        data: data
    }
}
export const FirstBack = (data) => {
    return {
        type: firstBack,
        data: data
    }
}
export const SecondBack = (data) => {
    return {
        type: secondBack,
        data: data
    }
}
export const reset = (data) => {
    return {
        type: Reset,
        data: data
    }
}

export const cancel = (data) => {
    return {
        type: Cancel,
        data: data
    }
}
