import React from 'react';
import { Button, Container } from 'react-bootstrap';

import { AzureAD, AuthenticationState } from 'react-aad-msal';
import { authProvider } from '../authProvider';
import { Redirect } from "react-router-dom";


const Login = () => {

    return (
        <AzureAD provider={authProvider}>
            {
                ({ login, authenticationState }) => {

                    switch (authenticationState) {
                        case AuthenticationState.Authenticated:
                            return (
                                <>
                                    <Redirect to='/' />
                                </>
                            );
                        default:
                            return (
                                <div style={{height:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <div><Button style={{alignSelf:'center'}} onClick={login}>Iniciar Sesion</Button></div>
                                </div>
                            )
                    }
                }
            }
        </AzureAD>
    );
}

export default Login;