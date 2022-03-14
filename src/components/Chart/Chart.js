import { AreaChart, BarChart, BarSeries } from "reaviz";
import { RADIO_BUTTONS } from "./../../rsc/Constants";

const Chart = (props) => {
  const createChart = () => {
    if (props.chartData != "") {
      if (props.chartData.chartType === "reportedCases") {
        return (
          <AreaChart
            height={300}
            xs={300}
            md={500}
            data={createChartData(props.chartData)}
          />
        );
      } else {
        let selectedIndex = props.chartData.topCountries.indexOf(
          props.chartData.topCountries.find(
            (element) => element.country == props.chartData.selectedCountry
          )
        );
        return (
          <BarChart
            height={300}
            xs={300}
            md={500}
            data={createChartData(props.chartData)}
            series={
              <BarSeries
                colorScheme={(_data, index) =>
                  index !== selectedIndex ? "#418AD7" : "#ACB7C9"
                }
              />
            }
          />
        );
      }
    }
  };

  const createChartData = (chartData) => {
    if (chartData.data != "") {
      let output = [];
      if (chartData.chartType === "reportedCases") {
        output = chartData.data.data.map((item, index) => {
          let resultData = {
            key: new Date(item.date),
            data: 0,
          };
          if (chartData.dataType == RADIO_BUTTONS.DEATH_COUNT) {
            resultData.data =
              chartData.timeSpam == RADIO_BUTTONS.DAILY_VALUES
                ? item.new_deaths
                : item.total_deaths;
          } else {
            resultData.data =
              chartData.timeSpam == RADIO_BUTTONS.DAILY_VALUES
                ? item.new_cases
                : item.total_cases;
          }
          return resultData;
        });
      } else if (props.tab == 2) {
        output = chartData.topCountries
          .slice(0, chartData.slice)
          .map((item, index) => {
            let resultData = {
              key: "",
              data: 0,
            };
            resultData.key = item.country;
            resultData.data =
              chartData.dataType == RADIO_BUTTONS.DEATH_COUNT
                ? item.data[item.data.length - 1].total_deaths
                : item.data[item.data.length - 1].total_cases;
            return resultData;
          });
      }
      return output;
    }
  };

  return <div>{createChart()}</div>;
};
export default Chart;
