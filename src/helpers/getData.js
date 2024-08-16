export function setArrayFromSearchCitys(data) {
  const cityNames = data.reduce((uniqueCities, item) => {
    const cityName =
      item.address.city || item.address.state || item.address.town;

    if (cityName) {
      const cleanedCityName = cityName.replace(
        / City| Town| Village| Region| Province| Metropolitan Area/g,
        ""
      );

      if (!uniqueCities.includes(cleanedCityName)) {
        uniqueCities.push(cleanedCityName);
      }
    }

    return uniqueCities;
  }, []);

  return cityNames;
}
