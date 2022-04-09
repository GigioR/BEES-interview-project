import React, { createContext, useContext, useState } from "react";
import { BreweryInterface } from "../BreweryList/BreweryList.types";

export interface UserProps {
    userName: string;
}

const initialState: UserProps = {
    userName: "",
};

export interface UserProviderProps {
    children?: React.ReactNode;
}

const UserContext = createContext({} as any);

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<UserProps>(initialState);
    const [data, setData] = useState<BreweryInterface>();

    const handleDeleteCard = (id: number) => {
        const newDataItems = data?.items.filter(item => item.id !== id);
        if (newDataItems) setData({ items: newDataItems, dataIsLoaded: true })
    }

    const handleAddMoreInfo = (id: number, newInfo: string) => {
        const newDataItems = data?.items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    moreInfo: newInfo
                }
            }
            return item;
        })

        setData({ items: newDataItems || [], dataIsLoaded: true });
    }

    return (
        <UserContext.Provider value={{ user, setUser, data, setData, handleDeleteCard, handleAddMoreInfo }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);