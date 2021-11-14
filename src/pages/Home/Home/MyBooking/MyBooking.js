import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hook/UseAuth";

const MyBooking = () => {
const {user} = useAuth();
  const [orders, setOrders] = useState([]);
  const { register, handleSubmit } = useForm();

  const [status, setStatus] = useState("");
  const [orderId, setOrderId] = useState("");
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  console.log(orders);

  // const status = "apporved";
  const handleOrderId = (id) => {
    setOrderId(id);
  };

  const handleDelete = (id) => {
       const proceed = window.confirm('Are you sure, you want to delete?');
       window.location.reload(false);
       if(proceed){
           const url = `http://localhost:5000/orders/${id}`;
           fetch(url, {
            method: "DELETE",
           })
           .then((res) => res.json())
            .then((data) => {
            if (data.deletedCount) {
            setControl(!control);
            }
      })
      
       }
      
  };

  const onSubmit = (data) => {
    console.log(data, orderId);
    fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="container">
      <h1>All orders {orders.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Service Id</th>
            <th>Use Email</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{pd?._id}</td>
              <td>{pd.email}</td>
              <td>{pd.address}</td>
              <td>
                <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                  <select
                    onClick={() => handleOrderId(pd?._id)}
                    {...register("status")}
                  >
                    <option value={pd?.status}>{pd?.status}</option>
                    <option value="approve">approve</option>
                    <option value="done">Done</option>
                  </select>
                  <input className="btn bg-success p-2" type="submit" />
                </form>
              </td>
              <button
              onClick={() => handleDelete(pd?._id)} 
              className="btn bg-danger p-2">Delete</button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyBooking;