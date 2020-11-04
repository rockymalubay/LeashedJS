import React from 'react';
import styled from 'styled-components';

const FinalDayCardContainer = styled.div`
    width: 291px;
    height: 135px;
    border: solid 5px #FF715B; 
    border-radius: 20px;
`

const FinalDayCardDayTitle = styled.div`
    font-size:18px;
    font-weight:bold;
    display:flex;
    justify-content: center;
    align-item:center;
    margin-top:20px;
    margin-bottom:15px;

`

const FinalDayCardSubtitle = styled.div`
    font-size:18px;
    font-weight:bold;
    display:flex;
    justify-content: center;
    align-item:center;

`
const FinalDaySmallText = styled.div`
    font-size:12px;
    display:flex;
    justify-content: center;
    align-item:center;
    margin-top:30px;
    color: rgba(27, 33, 33, 0.8);
`

const FinalDayCard = ({day, text,completion}) => {
    return <FinalDayCardContainer>
        <FinalDayCardDayTitle>{day}</FinalDayCardDayTitle>
        <FinalDayCardSubtitle>{text}</FinalDayCardSubtitle>
        <FinalDaySmallText>{completion}</FinalDaySmallText>
    </FinalDayCardContainer>
}

FinalDayCard.defaultProps ={
    day: "Default Day",
    text: "Default Text",
    completion: "Default Completion",
}

export default FinalDayCard;