import React from 'react';
import PropTypes from 'prop-types';
import theme from '../theme';
import CardActions from './CardActions';

export default class Card extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        onEditTitle: PropTypes.func.isRequired,
        onColorChange: PropTypes.func.isRequired,
        onRemoveCard: PropTypes.func.isRequired
    };

    _textarea;

    state = {
        editingTitle: false,
        hovering: false
    };

    constructor(props) {
        super(props);
        this.setEditingTitleState = this.setEditingTitleState.bind(this);
        this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
        this.handleOnInput = this.handleOnInput.bind(this);
        this.hoverCard = this.hoverCard.bind(this);
        this.updateTitleScrollHeight = this.updateTitleScrollHeight.bind(this);
    }

    componentDidMount() {
        this.updateTitleScrollHeight();
        window.addEventListener('resize', this.updateTitleScrollHeight);
        window.addEventListener('mousedown', this.handleOnMouseDown, false);
    }

    setEditingTitleState(editingTitle) {
        this.setState({ editingTitle });
    }

    handleOnMouseDown(event) {
        if (event.target === this._textarea) return;
        if (this.props.title !== this._textarea.value) {
            this.props.onEditTitle(this.props.id, this._textarea.value);
        }
        this.setEditingTitleState(false);
    }

    handleOnInput(event) {
        if (event.keyCode === 13) {
            if (this.props.title !== this._textarea.value) {
                this.props.onEditTitle(this.props.id, this._textarea.value);
            }
            this.setEditingTitleState(false);
            event.target.blur();
            event.preventDefault();
        }
    }

    hoverCard(hovering) {
        this.setState({ hovering });
    }

    updateTitleScrollHeight() {
        this._textarea.style.height = '23px';
        this._textarea.style.height = this._textarea.scrollHeight + 'px';
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateTitleScrollHeight);
        window.removeEventListener('mousedown', this.handleOnMouseDown);
    }

    render() {
        const { id, title, color, onColorChange, onRemoveCard } = this.props;
        const componentStyle = {
            card: {
                background: '#fff',
                border: '1px solid #d7d7d7',
                borderRadius: '5px',
                boxShadow: 'box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1)',
                padding: '18px 12px 14px',
                position: 'relative',
                marginBottom: '10px'
            },
            cardTitle: {
                color: 'inherit',
                resize: 'none',
                width: '100%',
                margin: '0',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                fontSize: '.875em',
                minHeight: '23px',
                height: '23px',
                overflow: 'hidden'
            }
        };

        return (
            <div style={{
                    ...componentStyle.card,
                    ...(this.state.hovering || this.state.editingTitle ?
                        theme.palette.cardColor[color][':hover'] :
                        theme.palette.cardColor[color])
                }}
                onMouseEnter={e => this.hoverCard(true)}
                onMouseLeave={e => this.hoverCard(false)}>
                <CardActions 
                    onColorChange={newColor => {
                        if (newColor !== color) onColorChange(id, newColor);
                    }} 
                    onRemoveCard={() =>
                        onRemoveCard(id)
                    }/>
                <textarea
                    ref={ta => this._textarea = ta}
                    style={{
                        ...componentStyle.cardTitle, 
                        background: this.state.editingTitle ? '#fff' : 'none'
                    }}
                    spellCheck="false"
                    placeholder="Enter title"
                    defaultValue={title}
                    onClick={() => this.setEditingTitleState(true)}
                    onKeyDown={this.handleOnInput}
                    onInput={this.updateTitleScrollHeight}>
                </textarea>
            </div>
        );
    }
}