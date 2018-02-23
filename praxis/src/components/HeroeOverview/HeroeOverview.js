import React, { Component } from 'react';
import './HeroeOverview.css';

class HeroeOverview extends Component {
    render() {
        return (<div className='heroe-overview-container'>
            <img className = 'heroe-image' src={this.props.image} alt={this.props.name} />
            <h1 className='character-title'>{this.props.name}</h1>
            <p className='heroe-overview-text'>{this.props.overview}</p>
            <a href={this.props.link}>More info..</a>
        </div>);
    }
}

export default HeroeOverview;