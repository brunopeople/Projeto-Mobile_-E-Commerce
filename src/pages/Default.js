import React from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";
export default function Default(){
	return(
		<>
		 <Hero img={defaultBcg} title="404" max="true">
		 	<h2 className="text-uppercase">Pagina Não encontrada</h2>
		 	<Link to="/" className="main-link" style={{marginTop: "2rem" }}>
		 	  Volta para a Home
		 	</Link>
		 </Hero>
		</>
	);
}