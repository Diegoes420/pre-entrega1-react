import "./Cartwidget.css";
import cart from "./assets/bag-shopping-solid.svg";

const CartWidget = () => {

/*   const styles = {
    color: "black",
    fontFamily: "arial",
    fontSize: "30px",
   
    marginTop: "30px",
  }; */
  return (
    <div>
      <img className="bag" src={cart} alt="carrito" />
      <span>0</span>
    </div>
  );
};



export default CartWidget;
