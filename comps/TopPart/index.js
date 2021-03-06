import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import MenuBox from '../../comps/Menu';


const TopPartWrapper = styled.div`
    width:100%;
    height:130px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0px;
    border-radius:0 0 25px 25px;
    background-color:#F9CB40;
    position:relative;
    -webkit-box-shadow: 0px 6px 17px 3px rgba(0,0,0,0.37); 
    box-shadow: 0px 6px 17px 3px rgba(0,0,0,0.37);
    color:#1B2121;

`;

const Icon = styled.div `
    width:9%;
    position:absolute;
    top:15px;
    left:15px;

    img {
        width:auto%;
        max-width:30px;
        height:auto;
    }
`

const PageName = styled.div `
    display:inline-flex;
    font-size:40px;
    font-wight:bold;
    align-text:center;
`

const MenuWrapper = styled.div`
    position:absolute;
    z-index:99;
    left:${props=>props.openMenu ? "0px" : "-320px"};
    top:0;
    transition:0.2s all ease;
`;

const DogName = styled.div`
    font-size: 30px;
    align-text:center;
`;


const Status = styled.div`
    font-size: 15px;
    font-weight: lighter;
    text-align:left;
`;

const TopText = styled.div`
`;

const TopPart= ({Pagename, TopHeight, DName, Stat, icon, onClick, onReturn, openMenu, textSize, bgColor, color}) => {
    return <TopPartWrapper style={{height:TopHeight, backgroundColor:bgColor, color:color}}>
        <Icon onClick={onClick}>
            <img src={icon}/>
        </Icon>
        <TopText>
            <PageName style={{fontSize:textSize}}>{Pagename}</PageName>
            <DogName>{DName}</DogName>
            <Status>{Stat}</Status>
        </TopText>
        <MenuWrapper openMenu={openMenu}>
            <MenuBox  
            Name1="Emma"
            Name2="Humprey"
            Menu1="Home"
            Menu2="Training"
            Menu3="Achievement"
            Menu4="Resources"
            Menu5="Team Discord"
            Menu6="Contact Us"    
            Menu7="Policy"
            onClick={onReturn}/>
        </MenuWrapper>
    </TopPartWrapper>
    
}

TopPart.defaultProps = {
    Pagename : "default",
    TopHeight: "130px",
    icon: "/Menu Icon.png",
    textSize:"40px",
    bgColor:"#F9CB40",
    color:"#1B2121"
}


export default TopPart;