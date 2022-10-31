// import React, { useEffect, useState } from "react";

// const EmpList = () => {
//   const [Empdata, empdatachange] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:8080/api/getProjectByActivelist")
//       .then((response) => {
//         return response.json();
//       })
//       .then((response) => {
//         console.log(response);
//         empdatachange(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div className="container">
//       <div className="card">
//         <h1>Employee List</h1>
//         <table className="table">
//           <thead className="bg-dark text-white">
//             <tr>
//               <td>ID</td>
//               <td>Project Name</td>
//               <td>Status</td>
//             </tr>
//           </thead>
//           <tbody>
//             {Empdata &&
//               Empdata.map((item) => {
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.projectName}</td>
//                   <td>{item.status}</td>
//                 </tr>;
//               })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EmpList;
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const EmpList = (props) => {
  const [Empdata, Empdatacahange] = useState([]);
  const navigate=useNavigate()
const loadDetail=(id)=>{
  navigate('/employee/detail/'+id)
}
const editview=(id)=>{
  navigate('/employee/edit/'+id)

}
const deleteView=(id)=>{
if(window.confirm("do you remove?")){
  fetch("http://localhost:8080/api/delete/"+id,{
    method:"Put",
   
  })
 
  .then((responce) => {
alert("remove successfully")     
window.location.reload() 
  })
      
        .catch((error) => {
          console.log(error.message);
        });
}
}
  useEffect(() => {
    fetch("http://localhost:8080/api/getProjectByActivelist")
.then((responce) => {
        return responce.json();
      })
      .then((responce) => {
       Empdatacahange(responce.data);
       
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Emloyee Listings</h2>
          <Link to="employee/create" className="btn btn-success">Add (+) </Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Project Name</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {Empdata &&
                Empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.projectName}</td>
                    <td>{item.status}</td>
                    <td>
                      <a className="btn btn-primary me-1" onClick={()=>{editview(item.id)}}>Edit</a>
                      <a className="btn btn-danger me-1" onClick={()=>{deleteView(item.id)}}>Remove</a>
                      <a className="btn btn-primary" onClick={()=>{loadDetail(item.id)}}>Details</a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

EmpList.propTypes = {};

export default EmpList;
