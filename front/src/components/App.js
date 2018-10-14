// @flow

import React, {Component} from 'react';

class App extends Component<*> {
  state = {
      randomID: 0,
      display: [],
      foundFilm: [],
  };

  componentWillMount() {
    this.props.getFirstSaga();
    this.props.getTotalList();
  }
filmId
  componentWillReceiveProps(nextProps) {
    if(nextProps.totalList.length !== 0) {
      this.setState({display:nextProps.totalList})
    }
    if(nextProps.filmId.length !== 0) {
      this.setState({foundFilm:nextProps.filmId})
    }
  }

  getRandomNumber = () => {
    const rand = Math.floor(Math.random() * 19);
    const index = this.state.display.find((x,i) => i === rand);
    this.props.getFilmID(index.id)
  };

  renderTotalList = () => {
    return this.state.display.map((x,i) => {
      return <button onClick={() => this.getID(x.id)} style={{border:'1px solid black'}}>{i}</button>
    })
  };

  getID = (id) => {
    this.props.getFilmID(id)
  };

  render() {
    return (
      <div>
        <p> test </p>
        <button onClick={this.getRandomNumber}> Random ID </button>
        <p>ID Found : {this.state.randomID}</p>
        <div>
          {this.renderTotalList()}
        </div>
        <div style={{display:'flex',
          justifyContent:'center',
          width:'500px',
          flexDirection:'column',
          textAlign:'center',
          margin:'auto'}}
          >
          <div>
            <h1> RANDOM </h1>
          </div>
          <div>
            <p>{this.state.foundFilm.title}</p>
            <p>{this.state.foundFilm.description}</p>
            <p>{this.state.foundFilm.release_date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
