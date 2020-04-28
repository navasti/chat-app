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

const Signup = ({ history }) => {
    // styles
    const classes = useStyles();
    // state
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [passConfirmation, setPassConfirmation] = useState(null);
    const [signupError, setSignupError] = useState('');
    // validation
    const isFormValid = () => password === passConfirmation;
    // handlers
    const handleSubmit = e => {
        e.preventDefault();
        if(!isFormValid()){
            setSignupError('Passwords do not match!');
            return;
        }
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                const user = {
                    email: response.user.email,
                };
                firebase.firestore().collection('users').doc(email).set(user)
                .then(()=>{
                    history.push('/login')
                })
                .catch(dbError => {
                    console.log(dbError)
                    setSignupError('Failed to add user')
                })
            })
            .catch(authError => {
                console.log(authError)
                setSignupError('Failed to add user')
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
            case 'confirmation':
                setPassConfirmation(e.target.value);
                break;
            default:
                break;
        }
    }
    
    return (
        <main className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Typography className='h1' variant="h5">Sign up</Typography>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-email-imput'>Enter your email</InputLabel>
                        <Input autoComplete='email' onChange={e => handleInputChange("email", e)} autoFocus id='signup-email-imput'/>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-password-input'>Create a password</InputLabel>
                        <Input type='password' onChange={e => handleInputChange("password", e)} id='signup-password-input'/>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-password-confirmation-input'>Confirm yor password</InputLabel>
                        <Input type='password' onChange={e => handleInputChange("confirmation", e)} id='signup-password-confirmation-input'/>
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
                <Typography component='h5' variant='h6' className={classes.noAccountHeader}>
                    Already have an account?
                </Typography>
                <Link className={classes.signUpLink} to={'/login'}>Log in</Link>
            </Paper>
        </main>
    )
}

export default Signup