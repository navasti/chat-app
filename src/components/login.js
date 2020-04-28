import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase';
import {
    FormControl,
    InputLabel,
    Button,
    Input,
    Paper,
    Typography
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './styles';

const Login = ({ history }) => {
    // styles
    const classes = useStyles();
    // state
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [loginError, setLoginError] = useState('');
    // handlers
    const handleSubmit = e => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/dashboard')
            })
            .catch(err => {
                console.log(err)
                setLoginError('Incorrect login/password')
            })
    }
    const handleInputChange =(type, e) => {
        switch (type){
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    }
    return (
        <main className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Typography component='h1' variant='h5'>Log in</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='login-email-input'>Enter your email</InputLabel>
                        <Input autoComplete='email' onChange={e => handleInputChange("email", e)} autoFocus id='login-email-imput'/>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='login-password-input'>Enter your password</InputLabel>
                        <Input type='password' id='login-password-imput' onChange={e => handleInputChange("password", e)}/>
                    </FormControl>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        Log in
                    </Button>
                </form>
                {
                    loginError ? 
                    <Typography component='h5' variant='h6' className={classes.errorText}>
                        {loginError}
                    </Typography> :
                    null
                }
                <Typography component='h5' variant='h6' className={classes.noAccountHeader}>
                    Don't have an account?
                </Typography>
                <Link to='/sign-up' className={classes.signUpLink}>Sign up</Link>
            </Paper>
        </main>
    )
}

export default Login
