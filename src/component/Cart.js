import { useSelector } from "react-redux"

const ProductCart = () => {
    const cartProducts = useSelector(state => state.cart.cartProducts)
    console.log("cart")
    console.log("cart")
    return (
        <div>
            <div>
                {cartProducts.map(prod => {
                    return <div>
                        <div style={{ display: 'flex', padding: '30px' }}>
                            <div>
                                <img style={{ width: '100px', height: '100px' }} src={prod.image} />
                            </div>
                            <div>
                                <div>
                                    {prod.title}
                                </div>
                                <div>
                                    {prod.description}
                                </div>
                                <div>
                                    {prod.category}
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProductCart