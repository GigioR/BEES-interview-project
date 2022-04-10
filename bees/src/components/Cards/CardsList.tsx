import React, { useEffect, useState } from "react";
import { BreweryInterface, BreweryList } from "../BreweryList/BreweryList.types";
import { Card } from "./Card";
import { CardsContainer, NoDataAvailable, NoDataAvailableText } from "./CardsList.styles";

export const CardsList = ({ items, dataIsLoaded }: BreweryInterface) => {
    const [data, setData] = useState<BreweryList[]>();

    useEffect(() => {
        setData(items);
    }, [items])


    return (
        dataIsLoaded ? (
            data?.length ?
                <CardsContainer>
                    {
                        data?.map((item, idx) => <Card item={item} key={idx} />)
                    }
                </CardsContainer>
                : <NoDataAvailable><NoDataAvailableText>Empty data</NoDataAvailableText></NoDataAvailable>
        ) : (<NoDataAvailable><NoDataAvailableText>Data not loaded</NoDataAvailableText></NoDataAvailable>)
    )
}