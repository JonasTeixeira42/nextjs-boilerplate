import React from 'react';

import * as S from './styles';

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="img/logo.svg"
        alt="Imagem de um átomo e React avançado escrito ao lado"
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScript, ReactJs, NextJS, Styled Components
      </S.Description>
      <S.Illustration
        src="img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para a tela do código"
      />
    </S.Wrapper>
  );
};

export default Main;
