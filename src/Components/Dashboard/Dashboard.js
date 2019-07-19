import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get('/api/products').then(response => {
            console.log(response.data)
            this.setState({products: response.data});
        }).catch(console.log);
      }

    handleDelete = (id) => {
        console.log(id);
        axios.delete(`/api/products/${id}`);
        axios.get('/api/products/').then(response => {
            this.setState({products: response.data})
        })
    }

    render() {
        console.log(this.state.products);
        return (
            <div className='dashboard'>
                {this.state.products.map(e => {
                    return (
                        <Product 
                            url={e.image_url} 
                            name={e.product_name} 
                            price={e.price} 
                            id={e.product_id}
                            handleDelete={this.handleDelete}
                            key={e.product_id}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Dashboard;