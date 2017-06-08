import Card from './Card';

const style = {
    columnTitle: {
        fontSize: '1em',
        fontWeight: 'normal',
        margin: '15px 0'
    },
    columnsContainer: {
        overflowY: 'auto'
    }
};

const Board = ({ cards = [], onEditTitle = f=>f }) =>
    <section id="board">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-4">
                    <h2 style={style.columnTitle}>Backlog</h2>
                </div>
                <div className="col-xs-4">
                    <h2 style={style.columnTitle}>In Progress</h2>
                </div>
                <div className="col-xs-4">
                    <h2 style={style.columnTitle}>Done</h2>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row" style={style.columnsContainer}>
                <div className="col-xs-4">
                    <div>
                        {cards.map((card, i) =>
                            <Card key={i} {...card} onEditTitle={onEditTitle}></Card>
                        )}
                    </div>
                </div>
                <div className="col-xs-4"></div>
                <div className="col-xs-4"></div>
            </div>
        </div>
    </section>

export default Board;