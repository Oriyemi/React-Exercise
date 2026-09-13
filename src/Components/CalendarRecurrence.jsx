
import React, { useState } from "react";

function CalendarApp() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "React Study",
      date: "2026-09-15",
      time: "18:00",
      recurrence: "none",
    },
    {
      id: 2,
      title: "Team Meeting",
      date: "2026-09-18",
      time: "10:00",
      recurrence: "weekly",
    },
  ]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [recurrence, setRecurrence] = useState("none");

  const [selectedDate, setSelectedDate] = useState("");

  // Add event
  function handleAddEvent(event) {
    event.preventDefault();

    if (!title.trim() || !date || !time) {
      return;
    }

    const newEvent = {
      id: crypto.randomUUID(),
      title,
      date,
      time,
      recurrence,
    };

    setEvents((previousEvents) => [
      ...previousEvents,
      newEvent,
    ]);

    setTitle("");
    setDate("");
    setTime("");
    setRecurrence("none");
  }

  // Delete event
  function handleDeleteEvent(id) {
    setEvents((previousEvents) =>
      previousEvents.filter(
        (event) => event.id !== id
      )
    );
  }

  // Get events for selected date
  const selectedDateEvents = events.filter(
    (event) => event.date === selectedDate
  );

  // Get today's date
  const today = new Date()
    .toISOString()
    .split("T")[0];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-6 text-center text-3xl font-bold">
          Calendar App
        </h1>

        {/* ADD EVENT */}
        <form
          onSubmit={handleAddEvent}
          className="mb-6 rounded-lg bg-white p-6 shadow"
        >
          <h2 className="mb-4 text-xl font-bold">
            Add Event
          </h2>

          <div className="grid gap-4 md:grid-cols-4">

            {/* TITLE */}
            <input
              type="text"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
              placeholder="Event title"
              className="rounded border p-3 outline-none focus:border-blue-500"
            />

            {/* DATE */}
            <input
              type="date"
              value={date}
              onChange={(event) =>
                setDate(event.target.value)
              }
              className="rounded border p-3 outline-none focus:border-blue-500"
            />

            {/* TIME */}
            <input
              type="time"
              value={time}
              onChange={(event) =>
                setTime(event.target.value)
              }
              className="rounded border p-3 outline-none focus:border-blue-500"
            />

            {/* RECURRENCE */}
            <select
              value={recurrence}
              onChange={(event) =>
                setRecurrence(event.target.value)
              }
              className="rounded border p-3 outline-none"
            >
              <option value="none">
                Does not repeat
              </option>

              <option value="daily">
                Every day
              </option>

              <option value="weekly">
                Every week
              </option>

              <option value="monthly">
                Every month
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 rounded bg-blue-500 px-5 py-2 text-white hover:bg-blue-600"
          >
            Add Event
          </button>
        </form>

        {/* TODAY */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">
              Today's Events
            </h2>

            <span className="rounded bg-blue-100 px-3 py-1 text-sm text-blue-600">
              {today}
            </span>
          </div>

          {events.filter(
            (event) => event.date === today
          ).length === 0 ? (
            <p className="text-gray-500">
              No events today.
            </p>
          ) : (
            <div className="space-y-3">
              {events
                .filter(
                  (event) => event.date === today
                )
                .map((event) => (
                  <EventItem
                    key={event.id}
                    event={event}
                    onDelete={handleDeleteEvent}
                  />
                ))}
            </div>
          )}
        </div>

        {/* SELECT DATE */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            View Events By Date
          </h2>

          <input
            type="date"
            value={selectedDate}
            onChange={(event) =>
              setSelectedDate(event.target.value)
            }
            className="rounded border p-3"
          />

          {selectedDate && (
            <div className="mt-6">
              <h3 className="mb-3 font-bold">
                Events on {selectedDate}
              </h3>

              {selectedDateEvents.length === 0 ? (
                <p className="text-gray-500">
                  No events on this date.
                </p>
              ) : (
                <div className="space-y-3">
                  {selectedDateEvents.map((event) => (
                    <EventItem
                      key={event.id}
                      event={event}
                      onDelete={handleDeleteEvent}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ALL EVENTS */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            All Events
          </h2>

          {events.length === 0 ? (
            <p className="text-gray-500">
              No events yet.
            </p>
          ) : (
            <div className="space-y-3">
              {events.map((event) => (
                <EventItem
                  key={event.id}
                  event={event}
                  onDelete={handleDeleteEvent}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// Event component
function EventItem({ event, onDelete }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div>
        <h3 className="font-bold">
          {event.title}
        </h3>

        <p className="text-sm text-gray-500">
          {event.date} at {event.time}
        </p>

        <p className="text-sm text-blue-500">
          {event.recurrence === "none"
            ? "One-time event"
            : `Repeats ${event.recurrence}`}
        </p>
      </div>

      <button
        onClick={() => onDelete(event.id)}
        className="rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default CalendarApp;

