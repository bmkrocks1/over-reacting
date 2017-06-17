import { IconButton, IconMenu, MenuItem } from 'material-ui';
import EditorFormatColorFill from 'material-ui/svg-icons/editor/format-color-fill';
import ContentDeleteSweep from 'material-ui/svg-icons/content/delete-sweep';
import { CardColorMenuItems } from '../constants';

const componentStyle = {
    cardActions: {
        position: 'absolute',
        top: '3px',
        right: '6px'
    },
    verySmallIcon: {
        width: 14,
        height: 14,
        color: 'rgba(0, 0, 0, .5)'
    },
    verySmall: {
        width: 14,
        height: 14,
        padding: 0
    },
    colorMenuItem: {
        fontSize: '.875em',
        lineHeight: '2.142em',
        minHeight: '30px'
    }
};

const CardActions = ({ style = {}, onColorChange = f=>f, onRemoveCard = f=>f }) => {
    return (
        <div style={{
            ...componentStyle.cardActions,
            ...style
        }}>
            <IconMenu
                iconButtonElement={
                    <IconButton 
                        title="Change color"
                        style={componentStyle.verySmall} 
                        iconStyle={componentStyle.verySmallIcon}>

                        <EditorFormatColorFill />

                    </IconButton>
                }
                onItemTouchTap={(event, child) => 
                    onColorChange(child.key)
                }>

                {CardColorMenuItems.map(color =>
                    <MenuItem key={color.value} {...color} style={componentStyle.colorMenuItem} />
                )}

            </IconMenu>
            <IconButton 
                title="Remove card"
                style={{...componentStyle.verySmall, marginLeft: 5}} 
                iconStyle={componentStyle.verySmallIcon}
                onTouchTap={onRemoveCard}>

                <ContentDeleteSweep />

            </IconButton>
        </div>
    );
}

export default CardActions;