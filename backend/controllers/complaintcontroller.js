import Complaint from "../models/complaints.js";

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


export const updateComplaintController = (req, res) => {
  Complaint.findOneAndUpdate(
    { complaintId: req.params.complaintId },
    { status: req.body.status },
    { new: true, runValidators: true }
  )
    .then((complaint) => {
      if (!complaint) {
        return res.status(404).send("Complaint not found");
      }

      res.send("Complaint status updated successfully");
    })
    .catch((error) =>
      res.status(500).send("Error updating complaint: " + error)
    );
};

export const deleteComplaintController = (req, res) => {
  Complaint.findOneAndDelete({ complaintId: req.params.complaintId })
    .then((complaint) => {
      if (!complaint) {
        return res.status(404).send("Complaint not found");
      }

      res.send("Complaint deleted successfully");
    })
    .catch((error) =>
      res.status(500).send("Error deleting complaint: " + error)
    );
};
