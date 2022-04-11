// paraméter helyett property-s nek nevezzük, és ez lesz az az adat, amit megadunk az index.js-ben
const Beer = ({info, randomNum}) => {
    //console.log(info)

    const {title, sub, text} = info

    return (
        <div className="beer">
            {/* props.info.title -> a Beers-ben infoként megadott kulcsnak, a title értékei */}
            <p className="title">{title}</p>
            <p className="text">{text}</p>
            <p className="sub">{sub}</p>
            <p className="num">{randomNum}</p>
            <button onClick={() => console.log(title)}>Order!</button>
        </div>
    );
};

export default Beer;