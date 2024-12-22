import React, { useState, useEffect } from "react";
import axios from "axios";

const ManagePayments = () => {
  const [payments, setPayments] = useState([]); // Payment records
  const [formData, setFormData] = useState({
    studentName: "",
    paymentDate: "",
    amount: "",
    status: "Paid", // Default status
  }); // Form state
  const [editingPaymentId, setEditingPaymentId] = useState(null); // Edit mode identifier

  // Fetch payment records when the component mounts
  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await axios.get("/api/payments");
      setPayments(response.data);
    } catch (error) {
      console.error("Failed to fetch payment records:", error);
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPaymentId) {
        // Update payment
        await axios.put(`/api/payments/${editingPaymentId}`, formData);
      } else {
        // Add new payment
        await axios.post("/api/payments", formData);
      }
      setFormData({
        studentName: "",
        paymentDate: "",
        amount: "",
        status: "Paid",
      }); // Reset form
      setEditingPaymentId(null); // Exit edit mode
      fetchPayments(); // Refresh records
    } catch (error) {
      console.error("Failed to save payment record:", error);
    }
  };

  const handleEdit = (payment) => {
    setFormData({
      studentName: payment.studentName,
      paymentDate: payment.paymentDate,
      amount: payment.amount,
      status: payment.status,
    });
    setEditingPaymentId(payment._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/payments/${id}`);
      fetchPayments(); // Refresh records
    } catch (error) {
      console.error("Failed to delete payment record:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Manage Payments
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">
            {editingPaymentId ? "Edit Payment Record" : "Add Payment Record"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Student Name
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleFormChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Payment Date
              </label>
              <input
                type="date"
                name="paymentDate"
                value={formData.paymentDate}
                onChange={handleFormChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleFormChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleFormChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {editingPaymentId ? "Update Payment" : "Add Payment"}
            </button>
          </form>
        </div>

        {/* Payment List */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">
            Payment Records
          </h2>
          {payments.length > 0 ? (
            <table className="min-w-full bg-white border rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
                    Student Name
                  </th>
                  <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
                    Payment Date
                  </th>
                  <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
                    Amount
                  </th>
                  <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="py-2 px-4 text-center text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment._id} className="border-t">
                    <td className="py-2 px-4 text-sm text-gray-700">
                      {payment.studentName}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700">
                      {payment.paymentDate}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700">
                      ${payment.amount}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700">
                      {payment.status}
                    </td>
                    <td className="py-2 px-4 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(payment)}
                        className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(payment._id)}
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
            <p className="text-gray-600">No payment records available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagePayments;
