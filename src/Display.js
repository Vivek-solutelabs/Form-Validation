import React, { useState } from "react";
import "./Display.css";

function Display(props) {
  const { userdetails, setUserdetails, setId, setEdit, edit } = props;

  const handleEdit = (id) => {
    setId(id);
    setEdit(true);
  };

  const handleDelete = (id) => {
    setUserdetails(userdetails.filter((el) => el.id !== id));
  };

  if (edit === true) {
    console.log("In Display" + edit);
  }

  return (
    <table border="1">
      <tbody>
        <tr>
          <th>
            <div class="col">First Name </div>
          </th>
          <th>
            <div class="col">Last Name</div>
          </th>
          <th>
            <div class="col">Birth Date</div>
          </th>
          <th>
            <div class="col">Address 1</div>
          </th>
          <th>
            <div class="col">Address 2</div>
          </th>
          <th>
            <div class="col">Place Of Birth</div>
          </th>
          <th>
            <div class="col">Phone No</div>
          </th>
          <th>
            <div class="col">Edit</div>
          </th>
          <th>
            <div class="col">Delete</div>
          </th>
        </tr>

        {userdetails.map((useritem) => (
          <tr>
            <td>
              <div className="row"> {useritem.firstName} </div>
            </td>
            <td>
              <div className="row"> {useritem.lastName} </div>
            </td>
            <td>
              <div className="row"> {useritem.birthDate} </div>
            </td>
            <td>
              <div className="row"> {useritem.address1} </div>
            </td>
            <td>
              <div className="row"> {useritem.address2} </div>
            </td>
            <td>
              <div className="row"> {useritem.pob} </div>
            </td>
            <td>
              <div className="row"> {useritem.phoneno} </div>
            </td>
            <td>
              <div>
                <button type="button" onClick={() => handleEdit(useritem.id)}>
                  Edit
                </button>
              </div>
            </td>
            <td>
              <div>
                <button type="button" onClick={() => handleDelete(useritem.id)}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Display;
