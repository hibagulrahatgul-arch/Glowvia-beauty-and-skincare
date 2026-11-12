import Complaint from "../models/complaints.js";

// Customer ki complaint ko Pending status ke sath save karta hai.
export const submitComplaintController = (req, res) => {
  const newComplaint = new Complaint({
    complaintId: Date.now(),
    orderId: req.body.orderId,
    subject: req.body.subject,
    message: req.body.message,
    status: "Pending",
  });

  newComplaint.save()
    .then(() => res.status(201).send("Complaint submitted successfully"))
    .catch((error) =>
      res.status(500).send("Error submitting complaint: " + error)
    );
};

// Database se tamam complaints la kar response mein bhejta hai.
export const getAllComplaintsController = async (req, res) => {
  try {
    const complaints = await Complaint.find();

    res.status(200).json(complaints);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching complaints",
      error: error.message
    });
  }
};

// Complaint ka status uski ID ke zariye update karta hai.
export const updateComplaintController = (req, res) => {
  Complaint.findOneAndUpdate(
    { complaintId: req.params.complaintId },
    { status: req.body.status },
    { new: true, runValidators: true }
  )
    .then((complaint) => {
      // Record na milne par 404 response bheja jata hai.
      if (!complaint) {
        return res.status(404).send("Complaint not found");
      }

      res.send("Complaint status updated successfully");
    })
    .catch((error) =>
      res.status(500).send("Error updating complaint: " + error)
    );
};

// Complaint ko uski ID ke zariye database se delete karta hai.
export const deleteComplaintController = (req, res) => {
  Complaint.findOneAndDelete({ complaintId: req.params.complaintId })
    .then((complaint) => {
      // Record na milne par 404 response bheja jata hai.
      if (!complaint) {
        return res.status(404).send("Complaint not found");
      }

      res.send("Complaint deleted successfully");
    })
    .catch((error) =>
      res.status(500).send("Error deleting complaint: " + error)
    );
};
