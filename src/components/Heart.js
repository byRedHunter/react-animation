import React, { Component } from 'react'

export default class Heart extends Component {
	render() {
		return <div className='like is-liked' style={this.props.style}></div>
	}
}
