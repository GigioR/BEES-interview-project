import styled from "styled-components";

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 23px 23px;
    margin: 30px 0;
    justify-items: center;
`;

export const Container = styled.div`
    width: 382px;
    background-color: #FFFFFF;
    height: auto;
    border-radius: 5px;
    padding: 0 23px 35px;
    border: 1px solid #000000;
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BreweryName = styled.span`
    margin: 30px 0px 0px 23px;
    color: black;
`;

export const BinButton = styled.button`
    margin: 14px 15px 0 0;
    background: transparent;
    border: none;
`;

export const BinIcon = styled.img`
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
    padding: 8px 12px;
    gap: 12px;
`;

export const CompanyIcon = styled.img`
`;

export const CompanyInfo = styled.span`
    margin-right: 12px;
`;

export const EditingButton = styled.button`
    background: transparent;
    border: none;
`;

export const InputAddMoreInfo = styled.input`
    width: 83px;
`;