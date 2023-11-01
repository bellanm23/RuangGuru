function countryMedals(players, countries) {
    // return error
    if (countries === undefined || countries.length < 1)
    return "Countries not provided"

    // filter data
    const filter = players.filter((obj) => {
        return countries.includes(obj["country"])
    });

    // grouping by country
    const data = filter.reduce((g, item) => {
        (g[item.country] = g[item.country] || []).push(item)
        return g
    }, {})

    // formatted data
    const result = countries.map(item => {
        let player = []
        let totalMedals = 0
        data[item].map(v => {
            totalMedals += v.medals
            player.push(v.name)
        })
        return {
            name: item,
            athlete: player,
            totalMedals: totalMedals
        }
    })
    return result; // TODO: replace this
}

let playerData = [
    {
        name: "Lionel Messi",
        medals: 5,
        country: "Argentina"
    },
    {
        name: "Iker Casillas",
        medals: 7,
        country: "Spain"
    },
    {
        name: "Ahmad Waluyo",
        medals: 5,
        country: "Indonesia"
    },
    {
        name: "Alvin Arkansas",
        medals: 8,
        country: "Indonesia"
    },
    {
        name: "Gabriel Batistuta",
        medals: 1,
        country: "Argentina"
    },
    {
        name: "Xavi Hernandes",
        medals: 9,
        country: "Spain"
    },
    {
        name: "Carles Puyol",
        medals: 5,
        country: "Spain"
    },
    {
        name: "Jatmika Teja",
        medals: 6,
        country: "Indonesia"
    },
    {
        name: "Sergio Aguero",
        medals: 3,
        country: "Argentina"
    },
]

console.log(countryMedals(playerData, ["Indonesia", "Spain"]));
console.log(countryMedals(playerData, ["Argentina", "Spain"]));
console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals