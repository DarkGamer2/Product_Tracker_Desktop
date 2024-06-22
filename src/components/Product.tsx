type productProps = {
  productName: string;
  productDescription: string;
  productPrice: number;
  productImageURL: string;
};
const Product = (props: productProps) => {
  return (
    <div>
      <img src={props.productImageURL} width={150} height={200}/>
      <h1>{props.productName}</h1>
      <p>{props.productDescription}</p>
      <p>Price: ${props.productPrice}</p>
    </div>
  );
};

export default Product;
