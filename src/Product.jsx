export default function Product(props) {
  let formattedValue = (props.value)/100;
  if (props.showDecimals) {
    formattedValue = formattedValue.toFixed(2);
  }

  return (
    <div className="product">
      <img className="product-image" width="272" height="300" alt={props.name} src={props.image}  />
      <p className="product-name">{props.name}</p>
      <div className="product-price">{props.currency}{formattedValue}</div>
    </div>
  )
}
