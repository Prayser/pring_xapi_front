import React from 'react';
import styled from "styled-components";

const Drawer = () => {


    return (
        <>
            <Wrapper>

                <ListElement href={'/'}> Главная </ListElement>
                {/*<ListElement href={'/'}> Библиотека </ListElement>*/}
                {/*<ListElement href={'/'}> Люди </ListElement>*/}
                {/*<ListElement href={'/'}> Отправить </ListElement>*/}
                {/*<ListElement href={'/'}> Приглашения </ListElement>*/}
                {/*<ListElement href={'/'}> История </ListElement>*/}
                {/*<ListElement href={'/'}> xAPI LRS </ListElement>*/}
                {/*<ListElement href={'/'}> Приложения </ListElement>*/}
                {/*<ListElement href={'/'}> Аккаунт </ListElement>*/}

            </Wrapper>
        </>
    );
};

export default Drawer;

const Wrapper = styled.div`

  width: 350px;
  height: 100%;
  background-color: white;
  border-right: 1px solid #cfd4d9;

  box-sizing: border-box;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;


`


const ListElement = styled.a`
  width: 100%;
  padding: 25px 0;
  cursor: pointer;
  text-decoration: none;
  font-family: 'Roboto', serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: black;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #cfd4d9;

  &:hover {
    background-color: #cfd4d9;
  }


  transition: all 0.15s;

`