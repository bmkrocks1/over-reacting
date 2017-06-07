const Card = ({ id, title, color }) => {
    let cssClasses = `card ${color}`;
    return (
        <div className={cssClasses}>
            <textarea
                spellCheck="false"
                className="card-title" 
                defaultValue={title}>
            </textarea>
        </div>
    );
};

export default Card;