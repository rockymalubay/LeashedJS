import React from 'react';
import styled from 'styled-components';

const SMwrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:top;



    .arrow{
        margin-left:10px;
        margin-top:2.5px;
        width:auto;
        img {
            width:60%;
            height:auto;
        }
    }
`;



const Seemore= () =>{
    return <SMwrapper>
        <span>See More</span>
        <div className="arrow"><img src="arrow.png"/></div>
    </SMwrapper>
}

Seemore.defaultProps = {
    
}

export default Seemore;