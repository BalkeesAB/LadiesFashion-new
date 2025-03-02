import React, { useContext } from 'react'
import './ProductDetail.scss' 
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDetail = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext); 
  return (
    <div className='productdetail'>
        <div className="productdetail-left">
            <div className="productdetail-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdetail-img">
                 <img className='productdetail-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className='productdetail-right'>
            <h1>{product.name}</h1>
            <div className="productdetail-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdetail-right-prices">
                <div className="productdetail-right-price-old">Rs {product.old_price}</div>
                <div className="productdetail-right-price-new">Rs {product.new_price}</div>
            </div>
            <div className="productdetail-right-description">{product.description}</div>
            <p className="productdetail-right-category"><span>Tags :</span>Modern, Latest</p>
            <div className="productdetail-right-size">
                <h1>Select size</h1>
                <div className="productdetail-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductDetail