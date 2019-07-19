import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            name: '',
            price: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        console.log(this.props.match);
        if(this.props.match.params){
            const {id} = this.props.match.params;
            axios.get(`/api/products/${id}`).then(response => {
                this.setState({
                    url: response.data[0].image_url, 
                    name: response.data[0].product_name, 
                    price: response.data[0].price
                })
            }).catch(console.log);
        }
    }

    componentDidUpdate(props){
        if(props !== this.props){
            this.setState({url: '', name: '', price: 0})
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleCancel = () => {
        this.setState({ url: '', name: '', price: 0 })
    }

    handleSubmit = () => {
        const {url, name, price} = this.state;
        if(this.props.match.params.id){
            const {id} = this.props.match.params;
            let changedItem = {image_url: url, product_name: name, price: price}
            console.log(changedItem);
            // debugger;
            axios.put(`/api/products/${id}`, [changedItem])
        } else {
            let newItem = { image_url: url, product_name: name, price: price }
            console.log(newItem);
            debugger;
            axios.post('/api/products', newItem);
            this.handleCancel();
        }
    }

    render() {
        return (
            <div className="form">
                {this.state.url === '' ?
                    <img src="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png" alt="noImage" /> :
                    <img src={this.state.url} alt="product_image" />
                }
                <h2>Image URL:</h2>
                <input value={this.state.url} name="url" onChange={this.handleChange} type="text" />
                <h2>Product Name:</h2>
                <input value={this.state.name} name="name" onChange={this.handleChange} type="text" />
                <h2>Price:</h2>
                <input value={this.state.price} name="price" onChange={this.handleChange} placeholder="0" type="text" />
                <div className='formButtons'>
                    <Link to="/"><button onClick={this.handleCancel}>Cancel</button></Link>
                    <Link to="/"><button onClick={this.handleSubmit}>{this.props.match.params.id ? "Edit Item" : "Add to Inventory"}</button></Link>
                </div>
            </div>
        )
    }
}

export default Form;