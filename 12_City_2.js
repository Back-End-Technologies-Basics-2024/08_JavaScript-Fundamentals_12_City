function solve(obj) {
    let inputObject = {};

    obj.forEach(element => {

        let keyValuePair = element.split(" ");
        let svoistvo = keyValuePair[0];
        let after = keyValuePair[1];

        inputObject[obj] = after;
        
    });

    for(let key in inputObject) {
        console.log(`${key} -> ${inputObject[key]}`);
    }
}

printObjectProperties({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)