import React, {Component} from 'react'

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component{
	render(){
		<ProductContext.ProductProvider value="Olá vindo do Context">
			{this.props.children}
		</ProductContext.ProductProvider>
	}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider}