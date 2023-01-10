const Challenge = () => {

    const valor1 = 1;
    const valor2 = 2;

    const somaValor = () => {
       console.log(valor1 + valor2)
    }
    return(

        <div>
            <h1>Valor 1 é : {valor1}</h1>
            <h1>Valor 2 é : {valor2}</h1>
            <button onClick={somaValor}>Somar valores</button>
        </div>

    )


}

export default Challenge;