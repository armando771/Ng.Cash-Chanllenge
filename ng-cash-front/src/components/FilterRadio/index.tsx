import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface IfilterProps {
  selectedFilter: string;
  handleChange: any;
}

export default function FilterRadio({
  selectedFilter,
  handleChange,
}: IfilterProps) {
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Filtrar por:
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={selectedFilter}
        onChange={handleChange}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <FormControlLabel
          value="debitedAccountId"
          control={<Radio />}
          label="Transferencias enviadas"
        />
        <FormControlLabel
          value="creditedAccountId"
          control={<Radio />}
          label="Transferencias recebidas"
        />
      </RadioGroup>
    </FormControl>
  );
}
