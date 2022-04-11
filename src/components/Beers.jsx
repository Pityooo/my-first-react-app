import Beer from './Beer.jsx';

// paraméter helyett property-s nek nevezzük, és ez lesz az az adat, amit megadunk az index.js-ben
const Beers = ({list}) => {
    // itt listázzuk ki az index.js-ben importált, majd argumentumként hozzáadott data.json-t
    //console.log(list);
    const a = 10;
    //console.log(<Beer info={list[0]} randomNum={a} key={10}/>)
    return (
        <div className="beers">
            {/* végig map-elünk az adat.list-ján, és minden körben lefuttatjuk a Beer-t, aminek átadjuk info-ként az item adatait */}
            {/* Mielött a .map lefut, a Beer egy objektum lesz, két kulcsérték párral (info,rnadomNum) */}
            {list.map((item, index) => <Beer info={item} randomNum={a} key={index}/>)}
        </div>
    );
};

export default Beers;