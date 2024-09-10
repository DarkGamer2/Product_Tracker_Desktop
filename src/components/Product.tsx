
type productProps = {
  productName: string;
  productDescription: string;
  productPrice: number;
  productImageURL: string;
  productId: number;
};
const Product = (props: productProps) => {

  const goBack = () => {
    history.back();
  };
  return (
    <div>
      <img src={props.productImageURL} width={150} height={200}/>
      <h1>{props.productName}</h1>
      <p>{props.productDescription}</p>
      <p>Price: ${props.productPrice}</p>

      {/* <div className="text-center">
    <button className="bg-pink py-2 px-2 text-white font-bebasNeue rounded-md" onClick={goBack}>Go Back</button>
      </div> */}
    </div>
  );
};

export default Product;
