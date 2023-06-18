import { useState } from "react";

const App = () => {
  const g: any[] = [];
  const [games, setGames] = useState(g);
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState('');

  const addGame = (gameInfo: {title: string, cover: string}) => {
    const game = {title: gameInfo.title, cover: gameInfo.cover};
    setGames((currentState) => [...currentState, game]);
  }

  const handleSubmit = (ev:any) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle('');
    setCover('');
  }

  return (
    <>
      <p className="display-3 main-title">
        Biblioteca de Jogos
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input 
            type="text" 
            name="title" 
            className="form-control" 
            placeholder="name@example.com"
            id="title" 
            value={title} 
            onChange={ev => setTitle(ev.target.value)}
          />
          <label htmlFor="title">Título</label>
        </div>
        <div className="form-floating mb-3">
          <input 
            type="text" 
            className="form-control" 
            name="cover" 
            id="cover"
            placeholder="name@example.com" 
            value={cover} 
            onChange={ev => setCover(ev.target.value)}
          />
          <label htmlFor="cover">Capa</label>
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Adicionar à Biblioteca
        </button>
      </form>
      <div className="games">
        {games.map((game: any, index: number) => (
          <div key={index}>
            <img src={game.cover} alt="" />
            <div>
              <h2>{game.title}</h2>
              <button>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
