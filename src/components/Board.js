import Card from './Card';

const Board = ({ cards = [] }) =>
    <section id="board">
        <div className="container-fluid">
            <div className="row column-header">
                <div className="col-xs-4">
                    <h2>Backlog</h2>
                </div>
                <div className="col-xs-4">
                    <h2>In Progress</h2>
                </div>
                <div className="col-xs-4">
                    <h2>Done</h2>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-4">
                    <div className="cards-container">
                        {cards.map((card, i) =>
                            <Card key={i} {...card}></Card>
                        )}
                    </div>
                </div>
                <div className="col-xs-4"></div>
                <div className="col-xs-4"></div>
            </div>
        </div>
    </section>

export default Board;