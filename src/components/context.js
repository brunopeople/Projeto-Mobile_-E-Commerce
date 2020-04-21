import React, {Component } from 'react'
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
state = {
	products:storeProducts,
	detailProduct:detailProduct
}

handleDetail = () =>{
	console.log('hello from detail');
}

addToCart = () =>{
	console.log('hello from add to cart');
}

class ProductProvider extends Component{
	render(){
		return(
			<ProductContext.Provider value={{
				...this.state
				handleDetail:this.handleDetail,
				addToCart:this.addToCart,
			}}>
			 {this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}