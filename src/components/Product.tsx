
type productProps = {
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
  productId: number;
};
const Product = (props: productProps) => {

  return (
    <div>
      <img src={props.productImage} width={150} height={200}/>
      <h1>{props.productName}</h1>
      <p>Price: ${props.productPrice}</p>

      {/* <div className="text-center">
    <button className="bg-pink py-2 px-2 text-white font-bebasNeue rounded-md" onClick={goBack}>Go Back</button>
      </div> */}
    </div>
  );
};

export default Product;
