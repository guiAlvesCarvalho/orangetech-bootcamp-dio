import React from 'react';
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import logo from "../../assets/logo-dio.png";
import { Button } from '../Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';


const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/login')
    }

    const handleClickRegister = () => {
        navigate('/register')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...'/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                    
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/113042890?s=400&u=0385ecbeac9616c6264269e1f9718ec53bf80de5&v=4'/>
                    ) : (
                        <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Entrar" onClick={handleClickHome} />
                            <Button title="Cadastrar" onClick={handleClickRegister} />
                        </>
                    )}
                    
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }