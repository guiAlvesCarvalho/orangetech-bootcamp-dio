import React from 'react';

import { FiThumbsUp } from 'react-icons/fi';
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src='https://hermes.digitalinnovation.one/tracks/cover/8c498256-7acb-4b81-b001-41be4bd1bf47.png' />
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/113042890?s=400&u=0385ecbeac9616c6264269e1f9718ec53bf80de5&v=4' />
                    <div>
                        <h4>Guilherme</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no bootcamp dio OrangeTech do Banco Inter...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 16
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }