// components/CustomDatePicker.tsx
"use client";

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useController, Control, FieldValues } from "react-hook-form";
import { format } from "date-fns";

import { Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  minDate?: Date;
  maxDate?: Date;
}

const CustomDatePicker = <T extends FieldValues>({ control, name, minDate, maxDate }: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({ name, control });

  return (
    <DatePicker
      selected={value ? new Date(value) : null}
      onChange={(date) => onChange(date ? format(date as Date, "yyyy-MM-dd") : "")}
      minDate={minDate}
      maxDate={maxDate}
      className="w-full p-2 border border-gray-300 rounded-sm focus:outline-0"
      dateFormat="yyyy-MM-dd"
      placeholderText="Select a date"
      value={value || ""}
    />
  );
};

export default CustomDatePicker;
