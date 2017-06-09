import Card from './Card';

const style = {
    columnsContainer: {
        overflowY: 'auto'
    },
    columnTitle: {
        fontSize: '1em',
        fontWeight: 'normal',
        margin: '15px 0'
    }
};

const Board = ({ cards = [], onEditTitle = f=>f }) =>
    <section id="board">
        <div className="container-fluid">
            <div className="row" style={style.columnsContainer}>
                <div className="col-sm-4 col-xs-12">
                    <h2 style={style.columnTitle}>Backlog</h2>
                    <div className="cards">
                        {cards.map((card, i) =>
                            <Card key={i} {...card} onEditTitle={onEditTitle}></Card>
                        )}
                    </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                    <h2 style={style.columnTitle}>In Progress</h2>
                    <div className="cards">
                    </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                    <h2 style={style.columnTitle}>Done</h2>
                    <div className="cards">
                    </div>
                </div>
            </div>
        </div>
    </section>

export default Board;