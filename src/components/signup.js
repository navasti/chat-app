import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    FormControl,
    InputLabel,
    Button,
    Input,
    Paper,
    Typography
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './SignupStyles';

const handleSubmit = e => {
    console.log(e.target.value)
}

const handleInputChange = e => {
    console.log(e.target.value)
}

const Signup = () => {
    // styles
    const classes = useStyles();
    // state
    // const [password, setPassword] = useState(null);
    // const [email, setEmail] = useState(null);
    // const [passConfirmation, setPassConfirmation] = useState(null);
    // const [login, setLogin] = useState(null);
    const [signupError, setSignupError] = useState('');
    return (
        <main className={classes.main}>
            <CssBaseline></CssBaseline>
            <Paper className={classes.paper}>
                <Typography className='h1' variant="h5">Sign up</Typography>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-email-imput'>Enter your email</InputLabel>
                        <Input autoComplete='email' onChange={handleInputChange} autoFocus id='signup-email-imput'/>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-password-input'>Create a password</InputLabel>
                        <Input type='password' onChange={handleInputChange} id='signup-password-input'/>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-password-confirmation-input'>Confirm yor password</InputLabel>
                        <Input type='password' onChange={handleInputChange} id='signup-password-confirmation-input'/>
                    </FormControl>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
                </form>
                {
                    signupError ? 
                    <Typography component='h5' variant='h6' className={classes.errorText}>
                        {signupError}
                    </Typography> :
                    null
                }
                <Typography component='h5' variant='h6' className={classes.marginY}>
                    Already have an account?
                </Typography>
                <Link className={classes.signUpLink} to={'/login'}>Log in</Link>
            </Paper>
        </main>
    )
}

export default Signup