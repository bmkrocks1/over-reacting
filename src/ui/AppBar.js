import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import muiThemeable from 'material-ui/styles/muiThemeable';
import NewCardDialog from './NewCardDialog';
import { crudCreateCard } from '../actions/cardActions';

injectTapEventPlugin();

const AppBar2 = ({ title, onNewCard = f=>f }) => {
    const iconStyleRight = {
        marginTop: '14px',
        marginRight: '0'
    };

    const handleTouchTap = () => {
        console.log('touch tap');
    };

    return (
        <AppBar 
            title={title}
            onTouchTap={handleTouchTap} 
            iconElementRight={<NewCardDialog onNewCard={onNewCard} />}
            iconStyleRight={iconStyleRight}
        />
    );
}

const enhance = compose(
    muiThemeable(),
    connect(
        null,
        { onNewCard: crudCreateCard }
    )
);

export default enhance(AppBar2);