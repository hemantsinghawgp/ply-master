import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Ensure you have this in your dependencies
import axios from "axios";

const SlotBooking = () => {
  const [date, setDate] = useState(new Date()); // Current selected date
  const [slots, setSlots] = useState([]); // Store all slots
  const [formData, setFormData] = useState({
    time: "",
    capacity: "",
  }); // Form state
  const [editingSlotId, setEditingSlotId] = useState(null); // Edit mode identifier

  // Fetch slots when the component mounts or date changes
  useEffect(() => {
    fetchSlots();
  }, [date]);

  const fetchSlots = async () => {
    try {
      const response = await axios.get(
        `/api/slots?date=${date.toISOString().split("T")[0]}`
      );
      setSlots(response.data);
    } catch (error) {
      console.error("Failed to fetch slots:", error);
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingSlotId) {
        // Update slot
        await axios.put(`/api/slots/${editingSlotId}`, {
          ...formData,
          date,
        });
      } else {
        // Add new slot
        await axios.post("/api/slots", { ...formData, date });
      }
      setFormData({ time: "", capacity: "" }); // Reset form
      setEditingSlotId(null); // Exit edit mode
      fetchSlots(); // Refresh slots
    } catch (error) {
      console.error("Failed to save slot:", error);
    }
  };

  const handleEdit = (slot) => {
    setFormData({ time: slot.time, capacity: slot.capacity });
    setEditingSlotId(slot._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/slots/${id}`);
      fetchSlots(); // Refresh slots
    } catch (error) {
      console.error("Failed to delete slot:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Slot Booking Management
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-indigo-500">
            Select a Date
          </h2>
          <Calendar
            onChange={setDate}
            value={date}
            className="react-calendar"
          />
        </div>

        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-indigo-500">
            {editingSlotId ? "Edit Slot" : "Add Slot"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleFormChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Capacity
              </label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleFormChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              {editingSlotId ? "Update Slot" : "Add Slot"}
            </button>
          </form>
        </div>
      </div>

      {/* Slots List */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-indigo-500">
          Slots for {date.toDateString()}
        </h2>
        {slots.length > 0 ? (
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
                  Time
                </th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
                  Capacity
                </th>
                <th className="py-2 px-4 text-center text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {slots.map((slot) => (
                <tr key={slot._id} className="border-t">
                  <td className="py-2 px-4 text-sm text-gray-700">
                    {slot.time}
                  </td>
                  <td className="py-2 px-4 text-sm text-gray-700">
                    {slot.capacity}
                  </td>
                  <td className="py-2 px-4 text-center space-x-2">
                    <button
                      onClick={() => handleEdit(slot)}
                      className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(slot._id)}
                      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">No slots available for this date.</p>
        )}
      </div>
    </div>
  );
};

export default SlotBooking;
