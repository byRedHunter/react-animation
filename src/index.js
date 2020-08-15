import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Invie from './Invie'
import * as serviceWorker from './serviceWorker'

// statics
import logoPortada from './images/invie.png'
import acustica from './images/invie-acustica.png'
import clasica from './images/invie-classic.png'
import easterA from './images/easter-a.png'
import easterB from './images/easter-b.png'
import './css/animations.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

// cheet
import cheet from 'cheet.js'

const initialState = {
	isAnimated: false,
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
}

// controlar las acciones
function reducer(state, action) {
	switch (action.type) {
		case 'UPDATE_PROPS': {
			const newProps = action.payload.props
			return { ...state, ...newProps }
		}

		default:
			return state
	}
}

const store = createStore(reducer, initialState)

const easter = {
	isAnimated: 'is-animated',
	menu: [],
	guitarras: [
		{
			image: easterA,
			alt: 'Guitarra padre de familia',
			name: 'Invie Familiar',
			features: [
				'Lista para copiar los Simpsons',
				'Aire puro',
				'Chistes malos',
			],
		},
		{
			image: easterB,
			alt: 'Guitarra Invie Clasica',
			name: 'Invie Clasica',
			features: [
				'Estilo vintage',
				'Liviana',
				'Empieza tu camino como rockstar',
			],
		},
	],
}

cheet('i n v i e', () => {
	store.dispatch({
		type: 'UPDATE_PROPS',
		payload: {
			props: easter,
		},
	})
})
cheet('g o b a c k', () => {
	store.dispatch({
		type: 'UPDATE_PROPS',
		payload: {
			props: initialState,
		},
	})
})

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Invie />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
