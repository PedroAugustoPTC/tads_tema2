import React from 'react';

import Logo from '../../assets/doggo.jpg';

import Input from "../../components/Input";

import './styles.css';

function Login() {
    return (
        <div className="container">
            <div className="image-container">
                <h1 className="text">Doggo</h1>
                <h6>Não deixe que os preceitos te definam.</h6>
                
                <img src={Logo} alt="Doggo" />
            </div>
            <form>
                <h1 className="text">Doggo</h1>

                <Input label="Usuário" name="user" auxText="Insira seu usuário"/>
                <Input label="Senha" name="password" auxText="Insira sua senha" />
            </form>

        </div>
    );
};

export default Login;
