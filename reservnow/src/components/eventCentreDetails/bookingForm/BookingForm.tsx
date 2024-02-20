"use client";

import "./bookingForm.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import AuthenticationButton from "@/components/authenticationBtn/AuthenticationButton";

interface BookingFormProps {
  startTime: any;
  setStartTime: any;
  endTime: any;
  setEndTime: any;
  totalHours: number;
}

function BookingForm(props: BookingFormProps) {
  // Set startTime to this time tomorrow
  // const [startTime, setStartTime] = useState<Date | null>();

  // Set endTime to one hour after startTime
  // const [endTime, setEndTime] = useState<Date | null>();

  const currentDate = new Date();
  const minDateTomorrow = addDays(currentDate, 1); // Set minDate to tomorrow

  const filterPassedStartTime = (time: Date) => {
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const filterPassedEndTime = (time: Date) => {
    const selectedStartTime = props.startTime || currentDate;
    const selectedDate = new Date(time);
    return selectedStartTime.getTime() < selectedDate.getTime();
  };

  // Calculate total hours

  return (
    <div className="bookingFormRoot">
      <div className="price">
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>₦2500 </span>
        hour
      </div>
      <div className="Form">
        <div className="formItem">
          <label>Start Date and Time</label>
          <DatePicker
            selected={props.startTime}
            onChange={(date: Date | null) => props.setStartTime(date)}
            showTimeSelect
            filterTime={filterPassedStartTime}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="datePicker"
            minDate={minDateTomorrow} // Set minDate to tomorrow
            placeholderText="Click to select a date and time"
          />
        </div>
        <div className="formItem">
          <label>End date and Time</label>
          <DatePicker
            selected={props.endTime}
            onChange={(date: Date | null) => props.setEndTime(date)}
            showTimeSelect
            filterTime={filterPassedEndTime}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="datePicker"
            minDate={minDateTomorrow} // Set minDate to tomorrow
            placeholderText="Click to select a date and time"
          />
        </div>
        <div className="formItem">
          <div className="notesLabel">
            <div>Notes</div>
            <div style={{ color: "grey", fontSize: "12px" }}>*optional</div>
          </div>
          <input type="text" className="notesInput" />
        </div>
      </div>
      <AuthenticationButton text="ReservNow" onClick={{}} />
      <div className="text">You won't be charged yet</div>
      {props.totalHours > 0 && (
        <div className="receipt">
          <div className="receiptText">
            <div style={{ textDecoration: "underline" }}>
              ₦2500 x {props.totalHours} hour(s)
            </div>
            <div>₦7500</div>
          </div>
          <div className="receiptText">
            <div style={{ textDecoration: "underline" }}>
              ReservNow service fee
            </div>
            <div>₦1000</div>
          </div>
          <div className="horinzontalLine"></div>
          <div className="total">
            <div>Total before taxes</div>
            <div>₦8500</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
