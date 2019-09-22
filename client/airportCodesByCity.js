const airportCodesByCity = {
  newYorkCity: ['LGA', 'JFK'],
  chicago: ['MDW', 'ORD'],
  charleston: ['LAS'],
  lasVegas: ['LAS'],
  seattle: ['SEA'],
  sanFrancisco: ['SFO'],
  washingtonDC: ['DCA'],
  newOrleans: ['MSY'],
  palmSprings: ['PSP'],
  sanDiego: ['SAN'],
  stLouis: ['STL'],
  sedona: ['SEZ', 'SDX'],
  honolulu: ['HNL'],
  miami: ['MIA'],
  branson: ['BBG', 'BKG'],
  boston: ['BOS'],
  orlando: ['MCO'],
  portland: ['PDX'],
  nashville: ['BNA'],
  losAngeles: ['LAX'],
  sanAntonio: ['SAT'],
  austin: ['AUS'],
  savannah: ['SAV']
};

const findAirportCodes = obj => {
  const result = Object.values(obj);
  return result.reduce((acc, val) => acc.concat(val), []);
};

const airportCodesArray = findAirportCodes(airportCodesByCity);


export default { airportCodesByCity, airportCodesArray };
