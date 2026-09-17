import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../lib/api";
import { useNavigate } from "react-router-dom";

const JournalPage = () => {
  const [entry, setEntry] = useState("");
  const [journalEntries, setJournalEntries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchEntries();
    }
  }, [navigate]);

  const fetchEntries = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${API_BASE_URL}/journal/Journal`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setJournalEntries(response.data);
    } catch (error) {
      console.error("Error fetching journal entries", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_BASE_URL}/journal/Journal`,
        { content: entry },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEntry("");
      fetchEntries();
    } catch (error) {
      console.error("Error saving journal entry", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Your Journal</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <textarea
          className="w-full p-3 border rounded-md"
          placeholder="Write your journal entry..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="mt-3 w-full bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save Entry
        </button>
      </form>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white py-2 px-4 rounded"
      >
        Logout
      </button>

      <div className="mt-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Previous Entries</h2>
        {journalEntries.length === 0 ? (
          <p>No entries found.</p>
        ) : (
          <ul>
            {journalEntries.map((entry, index) => (
              <li key={index} className="border p-3 my-2 rounded-md">
                {entry.content}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default JournalPage;
