import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const ViewTutorials = () => {
  const [tutorials, settutorials] = useState([]);

  var naviigate = useNavigate();

  const getAllTutorials = async () => {
    await axios
      .get("http://localhost:8080/tutorial")
      .then((res) => {
        settutorials(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  var name ="";
  useEffect(() => {
   // getAllTutorials();
    name = localStorage.getItem("name");
  }, []);

  const deleteTutorial = async (id) => {
    await axios
      .delete("http://localhost:8080/tutorial/" + id)
      .then((res) => {
        getAllTutorials();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
        
      
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Published</th>
              <th scope="col">Fees</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map((tut) => {
              return (
                <tr>
                  <td>{tut.id}</td>
                  <td>{tut.title}</td>
                  <td>{tut.description}</td>
                  <td>{tut.published ? "published" : "not published"}</td>
                  <td>{tut.fees}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteTutorial(tut.id);
                      }}
                    >
                      DELETE
                    </button>
                    <Link
                      to={`/updatutorial/${tut.id}`}
                      className="btn btn-primary"
                    >
                      UPDATE
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
     
    </div>
  );
};