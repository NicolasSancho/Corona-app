import { useState, useMemo } from "react";
import { RADIO_BUTTONS } from "./../../rsc/Constants";
import { ThemeProvider } from "@mui/material/styles";
import {
  Autocomplete,
  Container,
  TextField,
  Grid,
  Box,
  Tab,
  CssBaseline,
} from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import CountriesParser from "./../../parsers/countriesParser/CountriesParser";
import Chart from "./../../components/Chart/Chart";
import ChartControlls from "../../components/ChartControlls/ChartControlls";

const ChartsContainer = (props) => {
  const [countries, setCountries] = useState([]);
  const [chart, setChart] = useState({
    chartType: "reportedCases",
    dataType: RADIO_BUTTONS.DEATH_COUNT,
    timeSpam: RADIO_BUTTONS.DAILY_VALUES,
    data: "",
    topCountries: [],
    slice: 10,
    selectedCountry: "World",
  });

  useMemo(() => {
    setCountries(CountriesParser.getAllCountries());
    setChart((chart) => ({
      chartType: chart.chartType,
      dataType: chart.dataType,
      timeSpam: chart.timeSpam,
      data: CountriesParser.getCountryData(chart.selectedCountry),
      topCountries: CountriesParser.parseAndOrder(RADIO_BUTTONS.DEATH_COUNT),
      slice: chart.slice,
      selectedCountry: chart.selectedCountry,
    }));
  }, []);

  const handleCountrySelect = (e, country) => {
    setChart((chart) => ({
      chartType: chart.chartType,
      data: CountriesParser.getCountryData(country),
      timeSpam: chart.timeSpam,
      dataType: chart.dataType,
      topCountries: chart.topCountries,
      slice: chart.slice,
      selectedCountry: country,
    }));
  };

  const handleTabChange = (e, newValue) => {
    setChart((chart) => ({
      chartType: newValue,
      data: chart.data,
      timeSpam: chart.timeSpam,
      dataType: chart.dataType,
      topCountries: chart.topCountries,
      slice: chart.slice,
      selectedCountry: chart.selectedCountry,
    }));
  };

  const handleRadio1Change = (e, value) => {
    setChart((chart) => ({
      chartType: chart.chartType,
      dataType: value,
      timeSpam: chart.timeSpam,
      data: chart.data,
      topCountries: CountriesParser.parseAndOrder(value),
      slice: chart.slice,
      selectedCountry: chart.selectedCountry,
    }));
  };

  const handleRadio2Change = (e, value) => {
    setChart((chart) => ({
      chartType: chart.chartType,
      dataType: chart.dataType,
      timeSpam: value,
      data: chart.data,
      topCountries: chart.topCountries,
      slice: chart.slice,
      selectedCountry: chart.selectedCountry,
    }));
  };

  const handleSelectChange = (e, child) => {
    setChart((chart) => ({
      chartType: chart.chartType,
      dataType: chart.dataType,
      timeSpam: chart.timeSpam,
      data: chart.data,
      topCountries: chart.topCountries,
      slice: e.target.value,
      selectedCountry: chart.selectedCountry,
    }));
  };

  const createChartControls = (tab) => {
    if (tab === "reportedCases") {
      return (
        <ChartControlls
          tab={1}
          onChange={handleRadio1Change}
          onChange2={handleRadio2Change}
        />
      );
    } else {
      return (
        <ChartControlls
          tab={2}
          onChange={handleRadio1Change}
          onChange2={handleSelectChange}
        />
      );
    }
  };

  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      <Container>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} alignContent="center">
            <Autocomplete
              color="primary"
              disablePortal
              onChange={handleCountrySelect}
              id="combo-box-demo"
              options={countries}
              renderInput={(params) => (
                <TextField {...params} label="Countries" />
              )}
            />
          </Grid>
        </Grid>
        <TabContext value={chart.chartType}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              variant="fullWidth"
              onChange={handleTabChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Reported cases" value="reportedCases" />
              <Tab label="Ranked charts" value="rankedCharts" />
            </TabList>
          </Box>
          <TabPanel value="reportedCases">
            <Chart chartData={chart} />
            {createChartControls("reportedCases")}
          </TabPanel>
          <TabPanel value="rankedCharts">
            <Chart chartData={chart} tab={2} />
            {createChartControls("rankedCharts")}
          </TabPanel>
        </TabContext>
      </Container>
    </ThemeProvider>
  );
};
export default ChartsContainer;
