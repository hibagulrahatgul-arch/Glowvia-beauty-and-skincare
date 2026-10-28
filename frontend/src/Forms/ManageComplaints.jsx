import { useState, useEffect } from 'react';

import {
  getAllComplaintsAxiosFunction,
  deleteComplaintAxiosFunction,
  updateComplaintAxiosFunction,
} from '../service/api';

function ManageComplaints() {

  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch complaints from MongoDB
  useEffect(() => {

    const fetchComplaints = async () => {
      try {

        const data = await getAllComplaintsAxiosFunction();

        console.log("Complaints from MongoDB:", data);

        setComplaints(data);

      } catch (error) {

        console.error(
          "Error fetching complaints:",
          error.response?.data || error.message
        );

      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();

  }, []);


  // Update complaint status
  const handleStatusChange = async (complaintId, newStatus) => {

    try {

      const response = await updateComplaintAxiosFunction(
        complaintId,
        newStatus
      );

      console.log("Updated:", response);

      setComplaints((prev) =>
        prev.map((c) =>
          c.complaintId === complaintId
            ? { ...c, status: newStatus }
            : c
        )
      );

      alert("Complaint status updated successfully!");

    } catch (error) {

      console.error(
        "Error updating complaint:",
        error.response?.data || error.message
      );

      alert("Failed to update complaint!");

    }
  };


  // Delete complaint
  const handleDelete = async (complaintId) => {

    try {

      const response = await deleteComplaintAxiosFunction(
        complaintId
      );

      console.log("Deleted:", response);

      setComplaints((prev) =>
        prev.filter((c) => c.complaintId !== complaintId)
      );

      alert("Complaint deleted successfully!");

    } catch (error) {

      console.error(
        "Error deleting complaint:",
        error.response?.data || error.message
      );

      alert("Failed to delete complaint!");

    }
  };


  return (

    <div
      className="card shadow-sm mx-auto"
      style={{ maxWidth: '700px' }}
    >

      <div className="card-body p-4">

        <h3 className="card-title text-center mb-4">
          Manage Complaints
        </h3>

        {loading ? (

          <p>Loading complaints...</p>

        ) : (

          <table className="table table-bordered align-middle">

            <thead>
              <tr>
                <th>Customer / Order ID</th>
                <th>Message</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {complaints.length === 0 ? (

                <tr>
                  <td colSpan="4" className="text-center">
                    No complaints found
                  </td>
                </tr>

              ) : (

                complaints.map((c) => (

                  <tr key={c.complaintId}>

                    <td>{c.orderId}</td>

                    <td>{c.message}</td>

                    <td>

                      <select
                        className="form-select form-select-sm"
                        value={c.status}
                        onChange={(e) =>
                          handleStatusChange(
                            c.complaintId,
                            e.target.value
                          )
                        }
                      >

                        <option>Pending</option>
                        <option>In Process</option>
                        <option>Resolved</option>

                      </select>

                    </td>

                    <td>

                      <button
                        className="btn btn-sm btn-pink"
                        onClick={() =>
                          handleDelete(c.complaintId)
                        }
                      >
                        Resolve / Delete
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        )}

      </div>

    </div>

  );
}

export default ManageComplaints;