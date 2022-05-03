import React from "react";
import {StyledDatePicker} from "./styles";
import BrazilianLocale from 'antd/es/date-picker/locale/pt_BR';


const DatePicker = ({ props }) => {
  return (
    <StyledDatePicker
      {...props}
      format={"DD/MM/YYYY"}
      placeholder={"DD/MM/YYYY"}
      locale={BrazilianLocale}
    />
  );
};

export default DatePicker;