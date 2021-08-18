import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { productAction } from '../store/products'
import classes from './Products.module.css'
const Products = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    console.log(products)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            dispatch(productAction.setProducts(data))
        }
        fetchData()
    }, [])

    const productOnClickHandler = (prod) => {
        dispatch(productAction.setSelectedProducts(prod))
        history.push("/products/" + prod.id)

    }

    return (
        <div>
            {products.map(prod => {
                return <div key={prod.id} onClick={() => { productOnClickHandler(prod) }}>
                    <div className={classes.productCont}>
                        <div >
                            <img className={classes.productImg} src={prod.image} />
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
        </div>)
}

export default Products