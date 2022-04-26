const getServerPath = (route) => {
  switch (route) {
    case 'station-one': return 'tram1'
    case 'station-two': return 'tram2'
    default: return route
  }
}

export default getServerPath
