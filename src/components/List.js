import Item from "./Item"
function List(){

    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lançamento={1985}/>
                <Item marca='Fusca' ano_lançamento={1985}/>
                <Item marca/>
                <Item marca='Chevrolet' ano_lançamento={1999}/>
            </ul>
        </>
    )
}

export default List