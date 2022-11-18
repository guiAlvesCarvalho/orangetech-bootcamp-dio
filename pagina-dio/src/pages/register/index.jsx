import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from '../../services/api'
import { Column, Container, FazerLoginText, TermsText, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

const schema = yup.object({
    name: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('Email não é válido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
  }).required();

const Register = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                navigate('/feed')
            } else {
                alert('Email ou senha inválido')
            }
        } catch {
            alert('Houve algum erro, tente novamente.')
        }
    }

    const handleClickRegister = () => {
        navigate('/feed')
    }

    const handleClickLogin = () => {
        navigate('/login')
    }

    return (<>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Começe agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" errorMessage={errors?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar minha conta" variant="secondary" onClick={handleClickRegister} type="submit"/>
                    </form>
                    
                    <TermsText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermsText>
                    <FazerLoginText>Criar conta. <button onClick={handleClickLogin}>Fazer login</button></FazerLoginText>

                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register }