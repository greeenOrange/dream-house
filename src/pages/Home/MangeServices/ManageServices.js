import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch("http://localhost:5000/allOrders")
          .then((res) => res.json())
          .then((data) => setOrders(data));
      }, []);
      const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        window.location.reload(false);
        if(proceed){
            const url = `http://localhost:5000/deleteOrder/${id}`;
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
    return (
        <div className="container">
            <div className="row">
            {orders?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2">
                <div className="service-img">
                  <img className="w-100" src={pd?.image} alt="" />
                </div>
                <h1>{pd.name}</h1>
                <p>{pd.area}</p>
                <p>{pd.worth}</p>
                  <button
              onClick={() => handleDelete(pd?._id)} 
              className="btn bg-danger p-2">Delete</button>
        
              </div>
            </div>
          ))}
            </div>
            
        </div>
    );
};

export default ManageServices;