import React from 'react';
import styled from "styled-components";
import Header from "../components/wrapper/header/Header";
import Drawer from "../components/wrapper/drawer/Drawer";
import Course from "./Course";

const Main = () => {
    return (
        <MainContainer>
            <Header/>
            <Content>
                <Drawer/>
                <CourseContainer>
                    <Course/>
                </CourseContainer>
            </Content>
        </MainContainer>
    );
};

export default Main;

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: stretch;


`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const CourseContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #edeef0;

  display: flex;
  align-items: center;
  justify-content: center;
  
`