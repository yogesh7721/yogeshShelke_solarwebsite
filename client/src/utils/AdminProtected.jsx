// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// const AdminProtected = ({ compo }) => {
//     const { admin } = useSelector(state => state.auth)

//     return <>
//         {
//             admin ? <>{compo}</> : <>
//                 <div className='container 100-vh flex justify-content-center items-center'>
//                     <div className='row'>
//                         <div className='col-sm-6 offset-sm-3'>
//                             <div>
//                                 <h1>Admin Not Login</h1>
//                                 <p>Please Login to access Admin Dashboard</p>
//                                 <Link to="/login" type="button" className='btn btn-primary'>Login</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         }
//     </>
// }
// export default AdminProtected




// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const AdminProtected = ({ compo }) => {
//     const { admin } = useSelector(state => state.auth);
//     console.log(admin, "adminnnnnnnnnnnn");

//     return admin ? (
//         <>{compo}</>
//     ) : (
//         <div className="container vh-100 d-flex justify-content-center align-items-center">
//             <div className="row">
//                 <div className="col-sm-6 offset-sm-3 text-center">
//                     <h1>Admin Not Login</h1>
//                     <p>Please Login to access Admin Dashboard</p>
//                     <Link to="/login" className="btn btn-primary">Login</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminProtected;



// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// const AdminProtected = ({ compo }) => {
//     const { admin } = useSelector(state => state.auth);
//     console.log(admin, "adminnnnnnnnnnnn");
//     return < >
//         {
//             admin ? <>{compo}</> : <>
//                 <div className='container 100-vh'>
//                     <div className='row'>
//                         <div className='col-sm-6 offset-sm-3'>
//                             <div>
//                                 <h1>admin Not Login</h1>
//                                 <p>Please Login to access Admin Dashboard</p>
//                                 <Link to="/login" type="button" className='btn btn-primary'>Login</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         }

//     </>
// }

// export default AdminProtected



import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminProtected = ({ compo }) => {
    const { admin } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!admin) {
            navigate("/login");
        }
    }, [admin, navigate]);

    return admin ? compo : null;
};

export default AdminProtected;
