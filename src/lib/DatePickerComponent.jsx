import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

function DatePickerComponent({ selectedDate, setSelectedDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        // label="Select a date"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        format="DD/MM/YYYY"
        sx={{
          width: "250px",
          backgroundColor: "#f0f0f0",
          marginTop: "0.15rem ",

          "& .MuiOutlinedInput-notchedOutline": {
            border: "none", // Removes the border
          },
          "& .MuiOutlinedInput-root": {
            boxShadow: "none", // Removes any shadow
          },
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default DatePickerComponent;
