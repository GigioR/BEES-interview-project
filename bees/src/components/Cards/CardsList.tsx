import React, { useEffect, useState } from "react";
import { BreweryInterface, BreweryList } from "../BreweryList/BreweryList.types";
import { Card } from "./Card";
import { CardsContainer } from "./CardsList.styles";

export const CardsList = ({ items, dataIsLoaded }: BreweryInterface) => {
    const [data, setData] = useState<BreweryList[]>();

    useEffect(() => {
        setData(items);
    }, [items])


    return (
        dataIsLoaded ? (
            <CardsContainer>
                {
                    data?.map((item, idx) => <Card item={item} key={idx} />)
                }
            </CardsContainer>
        ) : (<h4>Data not loaded</h4>)
    )
}