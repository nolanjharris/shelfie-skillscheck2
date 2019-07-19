import React from 'react';
import {Link} from 'react-router-dom';

function Product(props){

        return (
            <div className="product">
                {
                props.url ?
                <img src={props.url} alt=""/> :
                <img src='https://www.nsrcel.org/wp-content/uploads/2018/01/product.png' alt=""/>
                }
                <div className="productInfo">
                    <div className="namePrice">
                        <h2>{props.name}</h2>
                        <h2>{props.price}</h2>
                    </div>
                    <div className="productButtons">
                        <Link to="/"><button onClick={() => props.handleDelete(props.id)}>Delete</button></Link>
                        <Link to={`/add/${props.id}`}><button>Edit</button></Link>
                    </div>
                </div>
            </div>
        )

}

export default Product;