import React, { Component } from 'react';
import logo from './marvel-banner.png';
import './App.css';
import HeroeOverview from '../HeroeOverview/HeroeOverview';
import heroesService from '../../services/heroesService';
import enemiesService from '../../services/enemiesService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      enemies: []
    };
  }

  componentDidMount() {
    heroesService.getHeroes().then((heroes) => {
      this.setState({ heroes: heroes.data });
    });
    enemiesService.getEnemies().then((enemies) => {
      this.setState({ enemies: enemies.data });
    })
  }

  render() {
    let listHeroes = this.state.heroes.map((heroe) => <HeroeOverview key={heroe.name} name={heroe.name} image={heroe.image} overview={heroe.history} link={heroe.link} />);
    let evilList = this.state.enemies.map((enemy) => <HeroeOverview key={enemy.name} name={enemy.name} image={enemy.image} overview={enemy.history} link={enemy.link} />);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          <h2 class="title">Heroes</h2>
          <div className="heroes-list">
            {listHeroes}
          </div>
        </section>
        <div className="heroes-list">
          <h2 className="title">Enemies</h2>
          {evilList}
        </div>
      </div>
    );
  }
}

export default App;
