import myData from "./../../rsc/covid-data.json";
import { RADIO_BUTTONS } from "./../../rsc/Constants";
class CountriesParser {
  static getAllCountries = () => {
    let data = myData;
    let countries = data.map((item, i) => item.country);
    return countries;
  };

  static getCountryData = (country) => {
    let data = myData;
    return data.find((element) => element.country == country);
  };

  static parseAndOrder = (dataType) => {
    let data = myData;
    let orderedData = data
      .filter((element) => element.country !== "World")
      .sort((a, b) => {
        if (dataType == RADIO_BUTTONS.DEATH_COUNT) {
          return (
            b.data[b.data.length - 1].total_deaths -
            a.data[a.data.length - 1].total_deaths
          );
        } else {
          return (
            b.data[b.data.length - 1].total_cases -
            a.data[a.data.length - 1].total_cases
          );
        }
      });
    return orderedData;
  };
}
export default CountriesParser;
