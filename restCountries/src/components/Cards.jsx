import React from 'react'
import { useData } from '../context/DataContext'
import { FadeLoader } from "react-spinners"
import Card from "../components/Card"

const Cards = () => {

    const { finalOutput, badLoader } = useData();
    const renderCards = () => {
        if (finalOutput) {
            if (typeof finalOutput !== "string") {
                if (finalOutput.length === 0) {
                    return badLoader(
                        "No countries matched your search criteria"
                    );
                } else {
                    return finalOutput.map((country) => (
                        <Card key={country.name.common} country={country} />
                    ));
                }
            } else {
                badLoader(finalOutput);
            }
        } else {
            return (
                <FadeLoader
                    color={`#324871`}
                    height={30}
                    margin={15}
                    width={8}
                    className="m-auto col-span-4"
                />
            );
        }
    };

    return (
        <section
            key="cards"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-12 py-4 md:py-4 md:px-20"
            id="cards"
        >
            {renderCards()}
        </section>
    );

}

export default Cards