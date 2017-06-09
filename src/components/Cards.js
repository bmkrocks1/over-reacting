import Card from './Card';

const componentStyle = {
    heading: {
        fontSize: '1em',
        fontWeight: 'normal',
        margin: '15px 0'
    }
};

const Cards = ({ 
    className = '', 
    heading = '', 
    cards = [], 
    onEditTitle = f=>f, 
    onColorChange = f=>f, 
    onRemoveCard = f=>f 
}) =>
    <div className={className}>
        <h2 style={componentStyle.heading}>{heading}</h2>
        <div className="cards">
            {cards.map(card =>
                <Card 
                    key={card.id} 
                    {...card}
                    onEditTitle={onEditTitle}
                    onColorChange={onColorChange}
                    onRemoveCard={onRemoveCard}
                >
                </Card>
            )}
        </div>
    </div>

export default Cards;