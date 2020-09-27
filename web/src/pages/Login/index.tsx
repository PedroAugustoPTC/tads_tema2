import React from 'react';

import Logo from '../../assets/doggo.jpg';

import Input from "../../components/Input";
import Footer from '../../components/Input/Footer';

import './styles.css';

function Login() {
    return (
        <div className="Login">
            <div className="container">
                <div className="image-container">
                    <h1 className="text">Doggo</h1>
                    <h6>Não deixe que os preceitos te definam.</h6>

                    <img src={Logo} alt="Doggo" />
                </div>
                <form>
                    <h1 className="text">Doggo</h1>

                    <Input label="Usuário" name="user" auxText="Insira seu usuário" />
                    <Input label="Senha" name="password" auxText="Insira sua senha" type="password" />
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
