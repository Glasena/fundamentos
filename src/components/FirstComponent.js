// Arquivo de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {

    return (
        <div>
            { /* Comentário em JSX */ }
            { /* JSX é uma maneira de escrever o HTML para o uso no react */ }
            <h1>Meu primeiro componente</h1>
            <p className="test">meu texto</p>
            <MyComponent></MyComponent>
        </div>
    )

}

export default FirstComponent;