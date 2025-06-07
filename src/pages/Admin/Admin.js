import React from 'react';
import './Admin.css'; // optional for custom styles

const Admin = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary h-100">
            <div className="card-body">
              <h5 className="card-title">Manage Recipes</h5>
              <p className="card-text">Add, update, or delete recipe posts.</p>
              <button className="btn btn-light">Go</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-success h-100">
            <div className="card-body">
              <h5 className="card-title">User Management</h5>
              <p className="card-text">View and manage registered users.</p>
              <button className="btn btn-light">Go</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-warning h-100">
            <div className="card-body">
              <h5 className="card-title">Site Settings</h5>
              <p className="card-text">Edit blog settings and configurations.</p>
              <button className="btn btn-light">Go</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
