import Cards from './Cards';

const Board = ({ cards = [], onEditTitle = f=>f, onColorChange = f=>f, onRemoveCard = f=>f }) =>
    <section id="board">
        <div className="container-fluid">
            <div className="row" style={{overflowY: 'auto'}}>
                <Cards 
                    className="col-sm-4 col-xs-12"
                    heading="Backlog"
                    cards={cards}
                    onEditTitle={onEditTitle}
                    onColorChange={onColorChange}
                    onRemoveCard={onRemoveCard}
                />
                <Cards 
                    className="col-sm-4 col-xs-12"
                    heading="In Progress"
                    onEditTitle={onEditTitle}
                    onColorChange={onColorChange}
                    onRemoveCard={onRemoveCard}
                />
                <Cards 
                    className="col-sm-4 col-xs-12"
                    heading="Done"
                    onEditTitle={onEditTitle}
                    onColorChange={onColorChange}
                    onRemoveCard={onRemoveCard}
                />
            </div>
        </div>
    </section>

export default Board;