
import './App.css';
import "tailwindcss/tailwind.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Topmenu/>
        <Title/>
        <Sort/>
        <Search/>
        <List/>
       
      </header>
    </div>
  );
}

export default App;

function Title(){
  return(
    <div className=''>
      <h1 className='text-center'>All games</h1>
      <p>Lists of games on this site that the CICS Wifi does not block! Enjoy!</p>
    </div>
  );
}

function Topmenu(){
  return(
    <div className='menubar'>
      <div className='topnav'>
      <a className='red'>Games</a>
      <a>Retro</a>
      <a>Flash</a>
      <div className='topnav-right'>
        <a><img src="feedback.png" alt="feedback" width={15} height={15}></img></a>
        <a><img src="info.png" alt="feedback" width={15} height={15}></img></a>
      </div>
    </div>
    </div>
  );
}

function Sort(){
  return(
    <div className='sortbar'>
      <div className='topnav'>
      <a>Sort by:</a>
      <a className='red'>All</a>
      <a>FNAF</a>
      <a>Moto X3M</a>
      <a>Snail Bob</a>
      <a>Vex</a>
      </div>
    </div>

  )
}

function Search(){
  return(
    <div className='nav-container'>
      <div className='search-container'>
        <input className='search-box' type='search' placeholder='Search for Games(Does not work)'></input>
      </div>
    </div>
  );
}

function Game(props){
  return(
    <div>
    {props.gameObj &&
      <div className="game-tile">
        <img className='game-icon' src={props.gameObj.photoName} alt="Game" width={360} height={360}></img>
        <div className='game-title'>{props.gameObj.title}</div>
      </div>
    }
    {props.fnafObj &&
      <div className="game-tile">
        <img className='game-icon' src={props.fnafObj.photoName} alt="Game" width={360} height={360}></img>
        <div className='game-title'>{props.fnafObj.title}</div>
      </div>
    }
    </div>
  );
}


function List(){
  return(
    <div>
    
    <div className='flex-container'>
      {gameData.map(game =>(<Game
        gameObj = {game}/>))}
    </div>
    <h1 className='text-center'>Five Nights At Freddy's Games</h1>
    
    <div className='flex-container'>
      {fnafData.map(fnaf =>(<Game
        fnafObj = {fnaf}/>))}
    </div>
    </div>
  );
}



const gameData = [
  {
    photoName: "./1v1.png",
    title: "1v1.lol"
  },
  {
    photoName: "./ducklife.jpg",
    title: "Duck Life"
  },
  {
    photoName: "./flappybird.png",
    title: "Flappy Bird"
  
  },
  {
    photoName: "./fruitninja.png",
    title: "Fruit Ninja"
  },
  {
    photoName: "./red.png",
    title: "Among us!?"
  },
  {
    photoName: "./9007.png",
    title: "9007199254740992"
  },
  {
    photoName: "./ages-of-conflict.jpg",
    title: "Age of Conflict"
  },
  {
    photoName: "./ball.png",
    title: "Ball Sort Puzzle"
  },
  {
    photoName: "./minecraft.png",
    title: "Classic Minecraft"
  },
  {
    photoName: "./solitaire.png",
    title: "Solitaire"
  },
  {
    photoName: "./temple-run.png",
    title: "Temple Run 2"
  },
 
]
const fnafData= [
  {
    photoName: "./fnaf.png",
    title: "Five Nights At Freddy's"
  }, 
  {
    photoName: "./fnaf-2.jpg",
    title: "Five Nights At Freddy's 2"
  }, 
  {
    photoName: "./fnaf-3.png",
    title: "Five Nights At Freddy's 3"
  }, 
  {
    photoName: "./fnaf-4.png",
    title: "Five Nights At Freddy's 4"
  }, 
  {
    photoName: "./fnaf-sl.jpg",
    title: "Sister Location"
  }, 
  {
    photoName: "./fnaf-ucn.png",
    title: "Ultimate Custom Night"
  },

]


