import { useDispatch, useSelector } from "react-redux"
import classes from './Product.module.css'
import { cartAction } from '../store/Cart'
const Product = (props) => {
    const selectedProduct = useSelector(state => state.products.selectedProduct)
    const dispatch = useDispatch()
    const addToCartHandler = (prod) => {
        dispatch(cartAction.setCartProducts(selectedProduct))

    }
    return (
        <div >
            <div className={classes.prodCont}>
                <div>
                    <img className={classes.prodImg} src={selectedProduct.image} />
                </div>
                <div>
                    <div>
                        {selectedProduct.title}
                    </div>
                    <div>
                        {selectedProduct.description}
                    </div>
                    <div>
                        {selectedProduct.category}
                    </div>
                    <div>
                        <button onClick={addToCartHandler}>Add to cart button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product