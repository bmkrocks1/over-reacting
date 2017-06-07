import AppBar from 'material-ui/AppBar';
import NewCardDialog from './NewCardDialog';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const iconStyleRight = {
    marginTop: '14px',
    marginRight: '0'
};

const Menu = ({ onNewCard = f=>f }) => {
    const handleTouchTap = () => {
        console.log('touch tap');
    };

    return (
        <AppBar 
            title="My Board"
            onTouchTap={handleTouchTap} 
            iconElementRight={<NewCardDialog onNewCard={onNewCard} />}
            iconStyleRight={iconStyleRight}
        />
    );
}

export default Menu;