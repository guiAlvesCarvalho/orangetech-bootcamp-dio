import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import bannerImage from '../../assets/banner.png'
import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight>#RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo percentual={97} nome="Guilherme" image="https://avatars.githubusercontent.com/u/113042890?s=400&u=0385ecbeac9616c6264269e1f9718ec53bf80de5&v=4"/>
                <UserInfo percentual={83} nome="Guilherme" image="https://avatars.githubusercontent.com/u/113042890?s=400&u=0385ecbeac9616c6264269e1f9718ec53bf80de5&v=4"/>
                <UserInfo percentual={83} nome="Guilherme" image="https://avatars.githubusercontent.com/u/113042890?s=400&u=0385ecbeac9616c6264269e1f9718ec53bf80de5&v=4"/>
                <UserInfo percentual={66} nome="Guilherme" image="https://avatars.githubusercontent.com/u/113042890?s=400&u=0385ecbeac9616c6264269e1f9718ec53bf80de5&v=4"/>
                <UserInfo percentual={47} nome="Guilherme" image="https://avatars.githubusercontent.com/u/113042890?s=400&u=0385ecbeac9616c6264269e1f9718ec53bf80de5&v=4"/>
            </Column>
        </Container>
    </>)
}

export { Feed }