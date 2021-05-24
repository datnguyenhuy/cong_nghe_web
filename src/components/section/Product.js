import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Product.css'

class Product extends Component{
    static contextType = DataContext
    render(){
        const {products} = this.context
        return(
            <div className = "productmanage">
            {
                products.map(product =>(
                    <div className="card" key={product._id}>
                        <Link to={`/productmanage/${product._id}`}>
                            <img src={product.src} alt=""/>
                        </Link>
                        <div>
                            <h3>
                                <Link to={`/productmanage/${product._id}`}>{product.title}</Link>
                            </h3>
                            <span>
                                ${product.price}
                            </span>
                            <p>{product.description}</p>
                            <Link to="/productmanage"><button>Delete Product</button></Link>
                        </div>
                    </div>
                ))
            }
         </div>
        )
    }
}
export default Product;