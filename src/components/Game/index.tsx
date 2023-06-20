export default function Game(props: { title: string, cover: string, onRemove: any }) {
    return (
        (
            <div className="game">
                <img src={props.cover} alt="" />
                <div>
                    <h2>{props.title}</h2>
                    <button onClick={props.onRemove} className="btn btn-outline-danger">Remover</button>
                </div>
            </div>
        )
    )
}