import {useEffect, useState } from "react";
import itemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch("................")
            .then((res) => res.json())
            .then((data) => setProduct(data));
            
    }, []);

    if (!product) return null;
    
    return (
        <div className="item-list-container">
            <ItemDetail product={product} />
        </div>
    );
}


