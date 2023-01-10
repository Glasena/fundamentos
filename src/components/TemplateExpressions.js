const TemplateExpressions = () => {

    const name = "Alison"
    const data = {
        age: 22,
        job: "Dev"
    }
    return (
        <div>
            <h1>Olá {name}, tudo bem ? </h1>
            <h2>Você tem {data.age}</h2>
            <h3>E Trabalha como {data.job}</h3>
        </div>
    )

}

export default TemplateExpressions;