import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  addMembershipAxiosFunction,
  updateMembershipAxiosFunction,
} from '../service/api';

const addMemberSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  type: z.string().min(1, 'Membership type is required'),
});

const updateMemberSchema = z.object({
  memberId: z.string().trim().min(1, 'Member ID is required'),
  name: z.string(),
  email: z.string().refine((value) => value === '' || z.email().safeParse(value).success, 'Enter a valid email address'),
});

function ManageMembership() {
  const [tab, setTab] = useState('add');
  const {
    register: registerAdd,
    handleSubmit: handleAddSubmit,
    formState: { errors: addErrors },
  } = useForm({
    resolver: zodResolver(addMemberSchema),
    defaultValues: { name: '', email: '', type: 'Regular' },
  });
  const {
    register: registerUpdate,
    handleSubmit: handleUpdateSubmit,
    formState: { errors: updateErrors },
  } = useForm({
    resolver: zodResolver(updateMemberSchema),
    defaultValues: { memberId: '', name: '', email: '' },
  });

  const handleAddFormSubmit = async (addData) => {
    console.log('New Member:', addData);
    await addMembershipAxiosFunction(addData);
    alert('Member Added!');
  };

  const handleUpdateFormSubmit = async (updateData) => {
    console.log('Updated Member:', updateData);
    const { memberId, ...memberData } = updateData;
    await updateMembershipAxiosFunction(memberId, memberData);
    alert('Member Data Updated!');
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Manage Membership</h3>
        <ul className="nav nav-pills nav-fill mb-4">
          <li className="nav-item">
            <button className={`nav-link ${tab === 'add' ? 'active' : ''}`} onClick={() => setTab('add')}>Add Member</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${tab === 'update' ? 'active' : ''}`} onClick={() => setTab('update')}>Update Data</button>
          </li>
        </ul>

        {tab === 'add' && (
          <form onSubmit={handleAddSubmit(handleAddFormSubmit)}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" {...registerAdd('name')} />
              {addErrors.name && <span className="text-danger">{addErrors.name.message}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" {...registerAdd('email')} />
              {addErrors.email && <span className="text-danger">{addErrors.email.message}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">Membership Type</label>
              <select className="form-select" {...registerAdd('type')}>
                <option>Regular</option>
                <option>Premium</option>
                <option>VIP</option>
              </select>
              {addErrors.type && <span className="text-danger">{addErrors.type.message}</span>}
            </div>
            <button type="submit" className="btn btn-pink w-100">Add Member</button>
          </form>
        )}

        {tab === 'update' && (
          <form onSubmit={handleUpdateSubmit(handleUpdateFormSubmit)}>
            <div className="mb-3">
              <label className="form-label">Member ID</label>
              <input type="text" className="form-control" {...registerUpdate('memberId')} />
              {updateErrors.memberId && <span className="text-danger">{updateErrors.memberId.message}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">New Name</label>
              <input type="text" className="form-control" {...registerUpdate('name')} />
              {updateErrors.name && <span className="text-danger">{updateErrors.name.message}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">New Email</label>
              <input type="email" className="form-control" {...registerUpdate('email')} />
              {updateErrors.email && <span className="text-danger">{updateErrors.email.message}</span>}
            </div>
            <button type="submit" className="btn btn-pink w-100">Update Member</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ManageMembership;