import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
import './ChartControlls.css';
import {
  RADIO_BUTTONS,
  DEATH_COUNT,
  CONFIRMED_CASES,
  DAILY_VALUES,
  CUMULATIVE_VALUES,
} from "./../../rsc/Constants";
const ChartControlls = (props) => {
  const renderSecondControll = () => {
    if (props.tab == 1) {
      return (
        <FormControl>
          <RadioGroup
            onChange={props.onChange2}
            row
            aria-labelledby="charts-controlls2"
            defaultValue={RADIO_BUTTONS.DAILY_VALUES}
            name="charts-controlls2"
          >
            <FormControlLabel
              value={RADIO_BUTTONS.DAILY_VALUES}
              control={<Radio />}
              label={DAILY_VALUES}
            />
            <FormControlLabel
              value={RADIO_BUTTONS.CUMULATIVE_VALUES}
              control={<Radio />}
              label={CUMULATIVE_VALUES}
            />
          </RadioGroup>
        </FormControl>
      );
    } else {
      return (
        <FormControl>
          <InputLabel id="demo-simple-select-label">Countries</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={10}
            label="Age"
            onChange={props.onChange2}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      );
    }
  };

  return (
    <Container className="main-controlls-container">
      <FormControl>
        <RadioGroup
          onChange={props.onChange}
          display="inline-block"
          row
          aria-labelledby="charts-controlls"
          defaultValue={RADIO_BUTTONS.DEATH_COUNT}
          name="charts-controlls"
        >
          <FormControlLabel
            value={RADIO_BUTTONS.DEATH_COUNT}
            control={<Radio />}
            label={DEATH_COUNT}
          />
          <FormControlLabel
            value={RADIO_BUTTONS.CONFIRMED_CASES}
            control={<Radio />}
            label={CONFIRMED_CASES}
          />
        </RadioGroup>
      </FormControl>
      {renderSecondControll()}
    </Container>
  );
};
export default ChartControlls;
