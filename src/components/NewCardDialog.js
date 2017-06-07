import { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Dialog,
    FlatButton,
    MenuItem,
    RaisedButton,
    SelectField,
    TextField
} from 'material-ui';

class NewCardDialog extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: '',
            color: ''
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleColorSelectChange = this.handleColorSelectChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ title: '', color: '' });
        this.setState({ open: false });
    }

    handleTitleChange(event, newValue) {
        this.setState({ title: newValue });
    }

    handleColorSelectChange(event, index, value) {
        this.setState({ color: value });
    }

    handleCreate() {
        this.props.onNewCard(this.state.title, this.state.color);
        this.handleClose();
    }

    render() {
        const newCard = {
            buttonStyle: {
                background: '#42ac60'
            },
            labelStyle: {
                color: '#fff',
                textTransform: 'none',
                fontWeight: '100'
            }
        };

        const actions = [
            <FlatButton 
                label="Cancel"
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton 
                label="Create"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleCreate}
            />
        ];

        const colorSelections = [
            { value: 'white', primaryText: 'White' },
            { value: 'blue', primaryText: 'Blue' },
            { value: 'green', primaryText: 'Green' },
            { value: 'red', primaryText: 'Red' },
            { value: 'yellow', primaryText: 'Yellow' }
        ];

        return (
            <div>
                <RaisedButton 
                    label="New Card" 
                    buttonStyle={newCard.buttonStyle}
                    labelStyle={newCard.labelStyle}
                    onTouchTap={this.handleOpen}
                />
                <Dialog
                    title="Create New Card"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <TextField 
                        floatingLabelText="Title"
                        defaultValue={this.state.title}
                        onChange={this.handleTitleChange}
                    /><br />
                    <br />
                    <SelectField
                        floatingLabelText="Color"
                        value={this.state.color}
                        onChange={this.handleColorSelectChange}
                    >
                        {colorSelections.map((color, i) =>
                            <MenuItem key={i} {...color} />
                        )}
                    </SelectField>
                </Dialog>
            </div>
        );
    }
}

NewCardDialog.propTypes = {
    onNewCard: PropTypes.func
};

NewCardDialog.defaultProps = {
    onNewCard: f => f
};

export default NewCardDialog;