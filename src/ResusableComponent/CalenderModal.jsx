import React from "react";
import './CalenderModal.css'

const CalendarModal = ({
  currentDate,
  selectedDate,
  onMonthChange,
  onDateClick,
}) => {
  const monthName = currentDate.toLocaleString("en-US", {
    month: "long",
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const calendarDays = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];

  return (
    <div className="Interview-Schedule-Calendar">
      {/* Month */}
      <div className="Interview-Schedule-Month-Header">
        <button
          className="Interview-Schedule-Arrow"
          onClick={() => onMonthChange(-1)}
          aria-label="Previous month"
        >
          ‹
        </button>

        <span className="Interview-Schedule-Month-Name">{monthName}</span>

        <button
          className="Interview-Schedule-Arrow"
          onClick={() => onMonthChange(1)}
          aria-label="Next month"
        >
          ›
        </button>
      </div>

      {/* Week */}
      <div className="Interview-Schedule-Weekdays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Days */}
      <div className="Interview-Schedule-Days">
        {calendarDays.map((day, index) => (
          <button
            key={index}
            disabled={!day}
            className={`Interview-Schedule-Day ${
              selectedDate === day ? "Interview-Schedule-Day-Selected" : ""
            }`}
            onClick={() => onDateClick(day)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalendarModal;