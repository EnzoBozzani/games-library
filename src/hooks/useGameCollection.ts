import { useState } from "react";

export default function useGamesCollection() {
    const [games, setGames] = useState(() => {
        const storagedGames = localStorage.getItem('games-lib');
        if (!storagedGames) return [];
        else {
            const gameArray = JSON.parse(storagedGames);
            return gameArray;
        }
    });

    const addGame = (gameInfo: { title: string, cover: string }) => {
        const id: number = Math.floor(Math.random() * 10e6);
        const game = { id, title: gameInfo.title, cover: gameInfo.cover };
        setGames((currentState: any) => {
            const newState = [...currentState, game];
            localStorage.setItem("games-lib", JSON.stringify(newState));
            return newState;
        });
    }

    const removeGame = (id: number) => {
        setGames((state: any) => {
            const newState = state.filter((game: any) => game.id !== id);
            localStorage.setItem("games-lib", JSON.stringify(newState));
            return newState;
        });
    }
    return { games, addGame, removeGame};
}