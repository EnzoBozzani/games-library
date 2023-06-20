import Title from "./components/Title";
import Game from "./components/Game";
import Form from "./components/Form";
import useGamesCollection from "./hooks/useGameCollection";

const App = () => {
  const {games, addGame, removeGame} = useGamesCollection();

  return (
    <>
      <Title/>
      <Form addGame={addGame}/>
      <p className="display-5">Games</p>
      <div className="games">
        {games.length > 0 ?
          games.map((game: any) => (
            <Game 
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />))
            :
            (
              <h2>Nothing here yet! Try adding games!</h2>
            )
        }
      </div>
    </>
  )
}

export default App
