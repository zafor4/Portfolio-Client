import {Formik } from 'formik'
import React, { useState } from 'react'
import Layout from '../Layout'
import { auth } from '../../redux/AuthActionCreaters'
import { connect } from 'react-redux'


const mapDispatchToProps=dispatch=>{
    return {
        auth:(name,email,password,mode)=>dispatch(auth(name,email,password,mode))
    }
}

const Login = (props) => {
    const [mode, setMode] = useState('signup')

    return (
        <div>
            <Formik 
                initialValues={{
                    name:'',
                    email: '',
                    password: '',
                    passwordConfirm: ''
                }}
                onSubmit={(values) => {
                   props.auth(values.name,values.email,values.password,mode)
                    
                }}
                validate={(values) => {
                    const errors = {};
                
                    // Email validation
                    if (!values.email) {
                        errors.email = 'Email is required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                
                    // Password validation
                    if (!values.password) {
                        errors.password = 'Password is required';
                    } else if (values.password.length < 5) {
                        errors.password = 'Password must be at least 8 characters';
                    }
                
                    // Password confirmation validation (only when signing up)
                    if (mode === 'signup' && !values.passwordConfirm) {
                        errors.passwordConfirm = 'Please confirm your password';
                    } else if (mode === 'signup' && values.password !== values.passwordConfirm) {
                        errors.passwordConfirm = 'Passwords do not match';
                    }
                
                    return errors;
                }}
                
            >
                {({ values, handleSubmit, handleChange, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <Layout className='container mx-auto px-4 md:px-20'>
                            <div className='w-auto flex flex-col mt-4'>
                                <h1 className='font-bold text-xl mb-2'>Authenticate here</h1>
                                
                                {mode === 'signup' && (
                                    <>
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder='Enter name'
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                       
                                    </>
                                )}

                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Enter your email'
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className='text-red-500'>{errors.email}</span>}

                                <input
                                    type='password'
                                    name='password'
                                    placeholder='Enter your password'
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <span className='text-red-500'>{errors.password}</span>}

                                {mode === 'signup' && (
                                    <>
                                        <input
                                            type='password'
                                            name='passwordConfirm'
                                            placeholder='Confirm password'
                                            value={values.passwordConfirm}
                                            onChange={handleChange}
                                        />
                                        {errors.passwordConfirm && <span className='text-red-500'>{errors.passwordConfirm}</span>}
                                    </>
                                )}

                                <button className='bg-black text-white cursor-pointer' type='submit'>
                                    Submit
                                </button>

                                <p>
                                    {mode === 'signup' ? 'Already have an account? ' : 'Do not have an account? '}
                                    <button
                                        type="button"
                                        onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
                                    >
                                        {mode === 'signup' ? 'Log in' : 'Sign up'}
                                    </button>
                                </p>
                            </div>
                        </Layout>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default connect(null,mapDispatchToProps)(Login)
