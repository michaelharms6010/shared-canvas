import React from "react";

let defaultGrid = []

for (let i = 0; i < 100; i++) {
    let newRow = []
    for (let j = 0; j < 100; j++) {
        newRow.push("#fff")
    }    
    defaultGrid.push(newRow)
}


export default function Grid() {
    const [grid, setGrid] = React.useState(defaultGrid);

    return(
        <div className="grid">
            {grid.map((item, row) => 
                <div className="row">
                {item.map((tile, col) => 
                   <div className="col" />
                )}
               </div>
            )}

        </div>


    )


}