import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Itemselectpage() {
    const [itemsSelected, setItemsSelected] = useState([]);

    var items = [1, 2, 3, 4, 5, 6];

    return (
        <div>
            {items.map((number) => (
                <p>
                    <Checkbox
                        checked={itemsSelected.includes(number)}
                        color="primary"
                        onClick={() => {
                            if (itemsSelected.includes(number)) {
                                const newItemsSelected = itemsSelected.filter(
                                    (item) => item !== number
                                );

                                setItemsSelected([...newItemsSelected]);
                            } else {
                                itemsSelected.push(number);
                                setItemsSelected([...itemsSelected]);
                            }
                        }}
                        inputProps={{ "aria-label": "primary checkbox" }}
                    />{" "}
                    {number}
                </p>
            ))}
            <button
                onClick={() => {
                    console.log(itemsSelected);
                }}
                className="btn btn-primary"
            >
                Send
            </button>
        </div>
    );
}
