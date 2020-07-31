import React from "react";
import styles from './Formcontrols.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error
    const errorClass = hasError ? styles.error : ''
    return (
        <div className={`${styles.formControl} ${errorClass}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text='') => {
    return (
        <div>
            <Field validate={validators} placeholder={placeholder} name={name}
                   component={component} {...props}/>
            {text}
        </div>
    )
}