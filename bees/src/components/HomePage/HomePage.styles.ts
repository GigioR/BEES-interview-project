import styled from "styled-components";

export const LandingContentWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: #F2EC54;
`;

export const WelcomeContent = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
`;

export const FullNameMessage = styled.span`
    padding: 8px 16px;
`;

export const AlphabeticalMessage = styled.span`
    padding: 8px 16px;
`;

export const InputAndButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputNameContainer = styled.input<{ invalid: boolean }>`
    width: 300px;
    height: 43px;
    border-radius: 4px;
    padding: 0px 16px;
    margin: 16px;
    border: ${(invalid) => !invalid ? "1px solid red" : "none"}
`;

export const InputCheckboxText = styled.label`
    margin-bottom: 16px;
`;

export const InputCheckbox = styled.input`
    margin-right: 8px;
`;

export const EnterButton = styled.button`
    border-radius: 4px;
    background-color: ${props => props.disabled ? "#52525B" : "blue"};
    color: #FFFFFF;
    width: 75px;
    height: 40px;
    padding: 8px, 16px, 8px, 16px;
`;


export const BeeIcon = styled.img`
    position: absolute;
    width: 278px;
    height: 278px;
    bottom: 0;
    left: 0;
`;


