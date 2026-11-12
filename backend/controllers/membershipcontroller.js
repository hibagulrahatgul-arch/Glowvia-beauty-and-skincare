import Membership from "../models/memberships.js";

// Nayi membership ki ID bana kar usay database mein save karta hai.
export const addMembershipController = (req, res) => {
  const newMembership = new Membership({
    memberId: String(Date.now()),
    name: req.body.name,
    email: req.body.email,
    type: req.body.type,
  });

  newMembership.save()
    .then(() => res.status(201).send("Member added successfully"))
    .catch((error) =>
      res.status(500).send("Error adding member: " + error)
    );
};

// Di hui member ID ke mutabiq naam ya email update karta hai.
export const updateMembershipController = (req, res) => {
  const updateData = {};

  // Sirf bheje gaye naam ko update data mein shamil karta hai.
  if (req.body.name) {
    updateData.name = req.body.name;
  }
  // Sirf bheje gaye email ko update data mein shamil karta hai.
  if (req.body.email) {
    updateData.email = req.body.email;
  }

  Membership.findOneAndUpdate(
    { memberId: req.params.memberId },
    updateData,
    { new: true, runValidators: true }
  )
    .then((membership) => {
      // Member na milne par 404 response bheja jata hai.
      if (!membership) {
        return res.status(404).send("Member not found");
      }

      res.send("Member updated successfully");
    })
    .catch((error) =>
      res.status(500).send("Error updating member: " + error)
    );
};
