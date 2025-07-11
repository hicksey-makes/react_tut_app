export default function Product(props) {
  const {id, name, price, image, showDecimals = true} = props.details;
  let formattedValue = (price)/100;

  if (showDecimals) {
    formattedValue = formattedValue.toFixed(2);
  }
  console.log(props.details);
  return (
    <div className="product">
      <img className="product-image" width="272" height="300" alt={name} src={image}  />
      <p className="product-name">{name}</p>
      <div className="product-price">${formattedValue}</div>
    </div>
  )
}
