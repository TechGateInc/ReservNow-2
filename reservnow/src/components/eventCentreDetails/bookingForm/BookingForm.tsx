"use client";

import "./bookingForm.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  setHours,
  setMinutes,
  differenceInHours,
  addHours,
  addDays,
} from "date-fns";
import AuthenticationButton from "@/components/authenticationBtn/AuthenticationButton";

function BookingForm() {
  const currentDateTime = new Date(); // Get the current date and time

  // Set startTime to this time tomorrow
  const [startTime, setStartTime] = useState<Date | null>(
    setMinutes(
      setHours(addDays(currentDateTime, 1), currentDateTime.getHours()),
      currentDateTime.getMinutes()
    ) as Date
  );

  // Set endTime to one hour after startTime
  const [endTime, setEndTime] = useState<Date | null>(
    addHours(startTime || currentDateTime, 1) as Date
  );

  const currentDate = new Date();
  const minDateTomorrow = addDays(currentDate, 1); // Set minDate to tomorrow

  const filterPassedStartTime = (time: Date) => {
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const filterPassedEndTime = (time: Date) => {
    const selectedStartTime = startTime || currentDate;
    const selectedDate = new Date(time);
    return selectedStartTime.getTime() < selectedDate.getTime();
  };

  // Calculate total hours
  const totalHours =
    startTime && endTime ? differenceInHours(endTime, startTime) : 0;

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
            selected={startTime}
            onChange={(date: Date | null) => setStartTime(date)}
            showTimeSelect
            filterTime={filterPassedStartTime}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="datePicker"
            minDate={minDateTomorrow} // Set minDate to tomorrow
          />
        </div>
        <div className="formItem">
          <label>End date and Time</label>
          <DatePicker
            selected={endTime}
            onChange={(date: Date | null) => setEndTime(date)}
            showTimeSelect
            filterTime={filterPassedEndTime}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="datePicker"
            minDate={minDateTomorrow} // Set minDate to tomorrow
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
      <div className="receipt">
        <div className="receiptText">
          <div style={{ textDecoration: "underline" }}>
            ₦2500 x {totalHours} hour(s)
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
    </div>
  );
}

export default BookingForm;
