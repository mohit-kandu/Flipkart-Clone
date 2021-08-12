import React from 'react'
import { useGlobalContext } from '../../Context/Context'
import "./Cart.css"
import { Link } from "react-router-dom"
const CartItem = ({ id, image, title, price, amount }) => {
    const { remove, toggleAmount } = useGlobalContext()
    return (
        <article className='cart_item'>
            <div className="cart_item_image">
                <Link style={{ textDecoration: "none", color: "black" }} to={{ pathname: `/singleItem/${id}` }} >
                    <img src={image} alt={title} />
                </Link>
                <div className="amount_btn_container">
                    {/* decrease amount */}
                    <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>
                        -
                    </button>
                    {/* amount */}
                    <p className='amount'>{amount}</p>
                    {/* increase amount */}
                    <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>
                        +
                    </button>
                </div>
            </div>
            <div className="cart_item_name">
                <Link style={{ textDecoration: "none", color: "black" }} to={{ pathname: `/singleItem/${id}` }} >
                    <h4 >{title}</h4>
                    <h4 className='item-price'>₹{price}</h4>
                </Link>
                {/* remove button */}
                <button className="remove-btn">Save for later</button>
                <button className='remove-btn' onClick={() => remove(id)}>
                    remove
                </button>
            </div>
            <div className="cart_item_delivery_time">
                <div>Delivery in 2 days</div>
                <div>7 days replacement policy</div>
            </div>

        </article>
    )
}

export default CartItem
