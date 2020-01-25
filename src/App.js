import React, { Component } from 'react';
import Score from './components/Score'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import spaceship from './images/spaceShip1_1920.jpg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crewP1: 0,  // Number of people in crew
      crewP2: 0,  // Number of people in crew

      nameP1: "",
      nameP2: "",

      all: ['initial value on start'], // array of alll data from API
      crew: [], // array of  crews's numbers  
      name: [], // array of  SpaceCrafts's names

      c1: 0,
      c2: 0,

      hiddenPlayComponentFlag: true,
      WinFlag: "Please press 'START GAME' button",
    }
  }

  componentDidMount() {
    fetch("https://swapi.co/api/starships/")
      .then(res => res.json())
      .then(json => this.setState({ all: json.results }));


    // console.log('---------------------')
    // console.log(`CDM()`)
    // console.log(`CDM this.state.all : ${this.state.all}`)
  }

  handleDraw = () => {
    const { crew, name, c1, c2 } = this.state

    const id1 = Math.floor(Math.random() * crew.length)
    const id2 = Math.floor(Math.random() * crew.length)

    const result1 = Number(crew[id1])
    const result2 = Number(crew[id2])

    // console.log(`result1: ${result1}`)
    // console.log(`result2: ${result2}`)

    const name1 = name[id1]
    const name2 = name[id2]

    // console.log(`name1: ${name1}`)
    // console.log(`name2: ${name2}`)

    if (result1 > result2) {
      let count1 = c1
      count1++
      this.setState({
        WinFlag: "THE WINNER: Player One", crewP1: result1, crewP2: result2,
        nameP1: name1, nameP2: name2, c1: count1
      })

    } else if (result1 < result2) {
      let count2 = c2
      count2++
      this.setState({
        WinFlag: "THE WINNER: Player Two", crewP1: result1, crewP2: result2,
        nameP1: name1, nameP2: name2, c2: count2
      })

    } else if (result1 === result2) {
      let count1 = c1
      count1++
      let count2 = c2
      count2++
      this.setState({
        WinFlag: "-- DRAW --", crewP1: result1, crewP2: result2,
        nameP1: name1, nameP2: name2, c1: count1, c2: count2
      })
    }
  }

  handleStartGame = () => {
    const spaceShipCrew = [...this.state.all].map(s => s.crew)
    const spaceShipName = [...this.state.all].map(s => s.name)
    this.setState({ crew: spaceShipCrew, name: spaceShipName, hiddenPlayComponentFlag: false, WinFlag: "" })

    // console.log([...this.state.all])
    // console.log(spaceShipName)
  }

  handleEndGame = () => {
    const { c1, c2 } = this.state
    this.setState({ hiddenPlayComponentFlag: true, crewP1: 0, crewP2: 0, nameP1: "", nameP2: "", c1: 0, c2: 0 })
  }



  render() {
    const { all, WinFlag, crewP1, crewP2, nameP1, nameP2, hiddenPlayComponentFlag, c1, c2 } = this.state

    // console.log(`Counter One: ${c1}`)
    // console.log(`Counter Two: ${c2}`)
    // console.log('render()')
    // console.log(`render() this.state.all: ${all}`)
    // console.log(`RENDER WIN FLAG: ${WinFlag}`)
    // console.log(`RENDER crewP1 : ${crewP1}`)
    // console.log(`RENDER crewP1: ${crewP2}`)


    return (
      <div className="App" style={{ backgroundImage: `url(${spaceship})`, backgroundSize: "cover", overflow: "hidden" }}>

        {/* ====== TITLE ========= */}
        <div className="title">Star Wars GAME</div>
        <div className="subtitle">Starships Challenge ...</div>
        <hr />

        {/* ========= START GAME =========== */}
        <div>{hiddenPlayComponentFlag ? <button className="StartGameBtn" onClick={this.handleStartGame}>START GAME</button> : <button className="EndGameBtn" onClick={this.handleEndGame}>Click ! to FINISH GAME</button>}</div>

        {/* ======== TURNS HANDLE ========= */}
        <div className="play">{!hiddenPlayComponentFlag ? <button className="playBtn" onClick={this.handleDraw}>PLAY</button> : null}</div>

        {/* ======== DISPLAY WINNER ============ */}
        <div className="score"><Score result={WinFlag} /></div>

        {/* ========== CARDS PAYLOADS ============ */}
        <div className="card1"><Card1 numberOfCrew1={crewP1} spaceShipName={nameP1} /></div>
        <div className="card2"><Card2 numberOfCrew2={crewP2} spaceShipName={nameP2} /></div>

        {/* ========= SCORE COUNTERS =========== */}
        <div className="sume_up1">{`Palyer One: ${c1}`}</div>
        <div className="sume_up2" >{`Palyer Two: ${c2}`}</div>

      </div>
    );
  }
}

export default App;
