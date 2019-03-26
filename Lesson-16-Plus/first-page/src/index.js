import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';

const Wrapper = styled.section`

`;
const BodyStyle = styled.section`
  width: 100%
  margin-top: 145px;
  background-image: url('background.png');
  min-height: 550px; 
  position: relative;
`;

const Container = styled.section`
  width: 940px;
  margin 0 auto;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%)
`;

const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;

const HeaderInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
`;
const HeaderPhone = styled.section`
  margin-right: 30px;
`;
const HeaderPhoneH2 = styled.h2`
  color: #292929;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;
  margin: 0;

`;
const HeaderPhoneP = styled.p`
  color: #969696;
  font-size: 11px;
  font-weight: 400;
  line-height: 22px;
  margin: 0;

`;
const HeaderButton = styled.button`
  background: #ffffff;
  color: #292929;
  font-size: 12px;
  font-weight: 500;
  border: 2px solid #292929;
  padding: 15px 25px;
  line-height: 6px;
`;


const Logo = styled.section`
background-image: url('logo.png');
width: 231px;
height: 40px;
`;

const Menu = styled.section`
  width: 100%;
`;
const Ul = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-around;
  align-items: center;
  background-color: #ffcc00;
  height: 60px;
`;
const Li = styled.li`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`;
const MainBlock = styled.section`
  width: 100%;
`;
const MainH1 = styled.h1`
  color: #ffffff;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 140px;
`;
const MainP = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  margin-top: 40px;
`;
const MainButton = styled.button`
  background-color: #ffd200;
  color: #0d0d0d;
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  padding: 19px 30px;
  border: none;
`;
const MainText = styled.text`
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  text-decoration: underline;
  margin-left: 31px;
`;

class Wrap extends React.Component {
  render() {
    return(
      <Wrapper>
      <BodyStyle></BodyStyle>
        <Container>

          <Header>
          <Logo></Logo>
          <HeaderInfo>
            <HeaderPhone>
              <HeaderPhoneH2>8 800 342-13-33</HeaderPhoneH2>
              <HeaderPhoneP>Бесплатный звонок по России</HeaderPhoneP>
            </HeaderPhone>
            <HeaderButton>
              Обратный звонок
            </HeaderButton>
          </HeaderInfo>
          </Header>

          <Menu>
            <Ul>
              <Li> Главная </Li>
              <Li> Каталог </Li>
              <Li> Услуги </Li>
              <Li> Доставка </Li>
              <Li> О компании </Li>
              <Li> Контакты </Li>
            </Ul>
          </Menu>

          <MainBlock>
            <MainH1> Быстрая Доставка </MainH1>
            <MainP>
            бетона, щебня, песка <br></br>
            и других нерудных материалов <br></br>
            по Москве и Московской области <br></br>
            </MainP>
            <MainButton>Подробнее о доставке</MainButton>
            <MainText>или   перейти в каталог</MainText>
          </MainBlock>
        </Container>
        </Wrapper>
    )
  }
}
ReactDOM.render(<Wrap />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
