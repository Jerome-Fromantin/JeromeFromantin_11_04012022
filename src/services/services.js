export const recup = async () => {
const response = await fetch("logements.json")
const data = await response.json()
console.log(data)
/*console.log(data.logements)*/
console.log(response)
return data
}

export const getLogement = async (logementId) => {
    const logements = await recup()
    console.log(logements)
    debugger
    const logement = logements.find(item => item.id === logementId)
    console.log(logement)
    return logement
}