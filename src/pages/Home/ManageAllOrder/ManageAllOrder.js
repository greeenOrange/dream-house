import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState();

      useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
  }, []);
  
  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
        const url = `http://localhost:5000/allOrders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingUsers = orders.filter(order => order._id !== id);
                    setOrders(remainingUsers);
                }
            });
    }
}
    return (
        <div>
            <h2>Mange All Orders: {orders?.length}</h2>
            <div className='container'>
            <div className="row">
                <div className="col-md-12 mx-auto">
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>

    {orders?.map((pd, index) => (
                <tbody>
                <tr>
        <td>{index}</td>
         <td>{pd.name}</td>
            <td>{pd.description}</td>
            <td>{pd.image}</td>
            <td>{pd.status}</td>
            <button className='btn btn-dark' onClick={() => handleDelete(orders._id)}>Delete</button>
        </tr>
                </tbody>
            ))}
    </Table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ManageAllOrder;