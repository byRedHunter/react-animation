import React from 'react'

// statics
import './css/invie.css'

// components
import Portada from './components/Portada'
import Guitarras from './components/Guitarras'
import Footer from './components/Footer'

/* const dataPortada = {
	menu: [
		{
			href: 'index.html',
			title: 'Home',
		},
		{
			href: '#guitarras',
			title: 'Guitarras',
		},
		{
			href: 'precios.html',
			title: 'Precios',
		},
	],
	logo: logoPortada,
}

const dataGuitarras = {
	guitarras: [
		{
			image: acustica,
			alt: 'Guitarra Invie Acustica',
			name: 'Invie Acustica',
			features: [
				'Estilo vintage',
				'Madera Pura',
				'Incluye estuche invisible de aluminio',
			],
		},
		{
			image: clasica,
			alt: 'Guitarra Invie Clasica',
			name: 'Invie Clasica',
			features: [
				'Estilo vintage',
				'Liviana',
				'Empieza tu camino como rockstar',
			],
		},
	],
} */

function App() {
	return (
		<div className='Invie'>
			{/* portada */}
			{/* <Portada data={dataPortada} /> */}
			<Portada />

			{/* guitarra */}
			{/* <Guitarras data={dataGuitarras} /> */}
			<Guitarras />

			{/* footer */}
			<Footer />
		</div>
	)
}

export default App
