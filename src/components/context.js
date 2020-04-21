import React, {Component } from 'react'
import {storeProducts, detailProduct} from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component{
	state = {
	products:storeProducts,
	detailProduct: detailProduct
	};	
}


handleDetail = () =>{
	console.log('hello from detail');
}

addToCart = () =>{
	console.log('hello from add to cart');
}

tester = () => {
	console.log('State products:', this.state.product[0].inCart);
	console.log('Data products:', storeProducts[0].inCart);
}

class ProductProvider extends Component{
	render(){
		return(
			<ProductContext.Provider value={{
				...this.state
				handleDetail:this.handleDetail,
				addToCart:this.addToCart,
			}}>

			<button onClick={this.tester}>
				Teste me
			</button
			 {this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}