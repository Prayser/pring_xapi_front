import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <>
            <HeaderContainer>

            </HeaderContainer>
        </>
    );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 65px;
  background-color: #447bba;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid black;

`
