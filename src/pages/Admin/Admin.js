// // import React, { useEffect } from 'react';
// // import axios from 'axios';
// // import './Admin.css'; // optional for custom styles
// // import { Link } from 'react-router-dom';

// // const Admin = () => {
// //    useEffect(() => {
// //     // Example: fetch all recipes when page loads
// //     axios.get('http://localhost:5000/api/recipes')
// //       .then(res => {
// //         console.log("Recipes:", res.data);
// //       })
// //       .catch(err => {
// //         console.error("Error fetching recipes:", err);
// //       });
// //   }, [])
// //   ;
// //   return (
// //     <div className="container py-5">
// //       <h2 className="text-center mb-4">Admin Dashboard</h2>
      
// //       <div className="row g-4">
// //         <div className="col-md-4">
// //           <div className="card text-white bg-primary h-100">
// //             <div className="card-body">
// //               <h5 className="card-title">Manage Recipes</h5>
// //               <p className="card-text">Add, update, or delete recipe posts.</p>
// //               <Link to="/admin/recipes" className="btn btn-light">Go</Link>
// //             </div>
// //           </div>
// //         </div>

       

       
// //       </div>
// //     </div>
// //   );
// // };

// // export default Admin;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Admin.css'; // optional for styling
// import { Link } from 'react-router-dom';


// const Admin = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
    
//     // Optional: Add actual authentication check here
//     if (username === 'admin' && password === 'admin') {
//       navigate('/admin/recipes');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="container py-5 d-flex flex-column align-items-center">
//       <img 
//         src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
//         alt="Admin"
//         className="mb-4" 
//         style={{ width: '120px', height: '120px' }}
//       />
//       <h2 className="text-center mb-4">Admin Login</h2>
//       <form onSubmit={handleLogin} style={{ maxWidth: '400px', width: '100%' }}>
//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">Username</label>
//           <input 
//             type="text" 
//             className="form-control" 
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required 
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input 
//             type="password" 
//             className="form-control" 
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required 
//           />
//         </div>
//         <button className="btn btn-orange w-100">Enter</button>


//       </form>
//     </div>
//   );
// };

// export default Admin;
// frontend/src/pages/Admin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css'; // Optional custom styling
import axios from 'axios';

const Admin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', {
        email,
        password
      });

      const { token } = res.data;

      // Save token to localStorage
      localStorage.setItem('adminToken', token);

      // Redirect to admin recipes/dashboard
      navigate('/admin/recipes');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid email or password');
    }
  };

  return (
    <div className="container py-5 d-flex flex-column align-items-center">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
        alt="Admin"
        className="mb-4" 
        style={{ width: '120px', height: '120px' }}
      />
      <h2 className="text-center mb-4">Admin Login</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: '400px', width: '100%' }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button type="submit" className="btn btn-orange w-100">Login</button>
      </form>
    </div>
  );
};

export default Admin;
