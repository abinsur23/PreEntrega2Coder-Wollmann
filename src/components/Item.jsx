export default function Item({ product }) {
    return(
        <div className="item">
            <h2>{product.title}</h2>
            <img src={product.image} width={130} alt=""/>
            <p>{product.price}</p>
            <h5>{product.origen}</h5>
        </div>
    );
}