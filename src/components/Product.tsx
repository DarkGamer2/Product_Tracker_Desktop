type productProps = {
  productName: string;
  productDescription: string;
  productPrice: number;
};
const Product = (props: productProps) => {
  return (
    <div>
      <h1>{props.productName}</h1>
      <p>{props.productDescription}</p>
      <p>Price: ${props.productPrice}</p>
    </div>
  );
};

export default Product;
