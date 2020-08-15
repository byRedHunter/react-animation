import React, { Component } from 'react'

import { connect } from 'react-redux'

import CSSTransitionGroup from 'react-addons-css-transition-group'

// components
import Heart from './Heart'

function mapStateToProps(state) {
	return {
		logo: state.logo,
		menu: state.menu,
		isAnimated: state.isAnimated,
	}
}

class Portada extends Component {
	renderHeart = () => {
		const hearts = new Array(100).fill({})
		return hearts.map((heart, index) => {
			let random = Math.random() * (window.innerWidth - 0) + 0
			/* 
			if (random > window.innerWidth) {
				random = window.innerWidth
			} */

			const style = {
				left: Math.floor(random) + 'px',
				animationDelay: Math.floor(Math.random() * (10000 - 0) + 0) + 'ms',
			}

			return <Heart key={index} style={style} />
		})
	}
	render() {
		return (
			<section
				id='portada'
				className={`portada background ${this.props.isAnimated}`}
			>
				<header id='header' className='header contenedor'>
					<figure className='logotipo'>
						<img
							src={this.props.logo}
							width='186'
							height='60'
							alt='Invie logotipo'
						/>
					</figure>
					<span className='burguer-button icon-menu' id='burguer-button'></span>
					<nav className='menu' id='menu'>
						<ul>
							{this.props.menu.map((item) => {
								return (
									<li key={item.title}>
										<a href={item.href}>{item.title}</a>
									</li>
								)
							})}
						</ul>
					</nav>
				</header>

				<CSSTransitionGroup
					transitionName='animationInOut'
					transitionEnterTimeout={800}
					transitionLeaveTimeout={800}
				>
					{!this.props.isAnimated && (
						<div className='contenedor' key='portada'>
							<h1 className='titulo'>
								Guitarras <span>invie</span>sibles
							</h1>
							<h3 className='title-a'>
								Sé la estrella de rock que siempre quisiste ser
							</h3>
							<a className='button' href='#guitarras'>
								Conoce mas
							</a>
						</div>
					)}
				</CSSTransitionGroup>

				{this.props.isAnimated && this.renderHeart()}
			</section>
		)
	}
}

export default connect(mapStateToProps)(Portada)
