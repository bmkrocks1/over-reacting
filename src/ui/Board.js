import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Cards from './Cards';
import { crudUpdateCard, crudDeleteCard } from '../actions/cardActions';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Board = ({ 
    cards = [], 
    onEditTitle, 
    onColorChange, 
    onRemoveCard
}) => (
    <section id="board">
        <div className="container-fluid">
            <div className="row" style={{overflowY: 'auto'}}>
                <Cards 
                    className="col-sm-4 col-xs-12"
                    heading="Backlog"
                    cards={cards}
                    onEditTitle={onEditTitle}
                    onColorChange={(id, color) => onColorChange(id, null, color)}
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
);

const mapStateToProps = state => ({
    cards: state.cards ? [...state.cards] : []
});

export default compose(
    muiThemeable(),
    connect(
        mapStateToProps,
        {
            onEditTitle: crudUpdateCard,
            onColorChange: crudUpdateCard,
            onRemoveCard: crudDeleteCard
        }
    )
)(Board);