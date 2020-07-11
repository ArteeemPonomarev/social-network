import React from "react";
import styles from './Formcontrols.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    const errorClass = hasError ? styles.error : ''
    return (
        <div className={`${styles.formControl} ${errorClass}`}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span>}
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

// export const Textarea = ({input, meta, ...props}) => {
//
//     const hasError = meta.touched && meta.error
//     const errorClass = hasError ? styles.error : ''
//     return (
//         <div className={`${styles.formControl} ${errorClass}`}>
//             <div>
//                 <textarea {...input} {...props}/>
//             </div>
//             { hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

// export const Input = ({input, meta, ...props}) => {
//
//     const hasError = meta.touched && meta.error
//     const errorClass = hasError ? styles.error : ''
//     return (
//         <div className={`${styles.formControl} ${errorClass}`}>
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             { hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }