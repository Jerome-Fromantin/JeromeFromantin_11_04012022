export const recup = async () => {
    const response = await fetch(process.env.PUBLIC_URL + "/logements.json")
    const data = await response.json()
    return data
}

export const getLogement = async (logementId) => {
    const logements = await recup()
    const logement = logements.find(item => item.id === logementId)
    return logement
}
