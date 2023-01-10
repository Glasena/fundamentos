const Events = () => {
    
    const HandleMyEvent = (e) => {
        console.log("teste")
    }
    
    const RenderSomething = (x) => {
        if (x) {
            return <h1>Isso 1</h1>
        }
        else {
            return <h1>Isso 2</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={HandleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou")}>Clique Aqui 2</button>
            </div>
            {RenderSomething(true)}
        </div>
    )
}

export default Events;