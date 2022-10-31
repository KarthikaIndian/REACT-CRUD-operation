import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
  const [id, idchange] = useState("");
  const [projectName, projectchange] = useState("");
  const [status, statuschange] = useState("");
  const [validation, validationchange] = useState(false);
  const [validation1, validationchange1] = useState(false);
  const navgate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { id, projectName, status };
    fetch("http://localhost:8080/api/updateproject", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        navgate("/");
        console.log(res);
      })
      .catch((err) => {});
  };
  const { empid } = useParams();
  console.log(empid);
  const [empdata, empdatachange] = useState({});
  useEffect(() => {
    fetch("http://localhost:8080/api/getproject/" + empid)
      .then((responce) => {
        return responce.json();
      })
      .then((res) => {
        console.log(res)
        idchange(res.data.id);
        projectchange(res.data.projectName);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h2>Project Create Page</h2>
        <div className=" card  p-3 col-md-5 me-auto ms-auto">
          <input
            value={id}
            disabled
            className="form-control mt-2 col-md-4"
            placeholder="id"
          />
          <input
            required
            value={projectName}
            onMouseDown={(e) => validationchange(true)}
            className="form-control mt-2 col-md-4"
            onChange={(e) => projectchange(e.target.value)}
            placeholder="Project Name"
          />
          {projectName.length == 0 && validation && (
            <span className="text-danger">Project name is required</span>
          )}
          <input
            className="form-control mt-2 col-md-4"
            value={status}
            onMouseDown={(e) => validationchange1(true)}
            onChange={(e) => statuschange(e.target.value)}
            placeholder="Status"
          />
          {status.length == 0 && validation1 && (
            <span className="text-danger">Status is required</span>
          )}

          <div className="text-end mt-4">
            <button type="submit" className="btn btn-primary me-3">
              Save
            </button>
            <Link to="/" className="btn btn-danger">
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EmpEdit;
