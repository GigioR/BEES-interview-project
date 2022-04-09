import styled from "styled-components";


export const CardsContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: auto auto;
    background-color: #E5E5E5;
    gap: 23px 23px;
`;

export const CardContainer = styled.div`
    width: 382px;
    background-color: #FFFFFF;
    height: 282px;
    position: absolute;
    border-radius: 5px;
    margin: 26px 0 0 23px;
    border: 1px solid #000000;
`;

export const TopContainer = styled.div`
    margin: 14px 15px 0px 23px;
`;

export const BreweryName = styled.span`
    color: black;
`;

export const BinIcon = styled.div`
    background-image: url("../../public/bin.png");
    color: black;
`;

export const AddressContainer = styled.div`
    margin: 23px 23px 0px 23px;
    display: flex;
    flex-direction: column;
    color: black;
`;

export const StreetContainer = styled.span`
    margin-bottom: 10px;
`;

export const FullAddress = styled.span`
    margin-bottom: 10px;
`;

export const PillsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`;

export const Pills = styled.div`
    width: 130px;
    height: 32px;
    background-color: #F2EC54;
    border-radius: 99px;
    display: flex;
    margin: 26px 0 0 23px;
    align-items: center;
`;

export const CompanyIcon = styled.img`
    margin-right: 12px;
`;

export const CompanyInfo = styled.span`
    margin-right: 12px;
`;