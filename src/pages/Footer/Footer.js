import React from 'react';
import { Table } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer mt-4 p-3'>
            <div className='container'>
            <div className="row">
                <div className="col-md-4">
                <h2>Dream House</h2>
                <p>Address: 6500 International Pkwy Suite 1100, Plano, TX 75093
                Email: abolireoffice@domain.com
                <span>Phone: (+844) 1900 444 336</span></p>
                </div>
                <div className="col-md-4">
  <p className='text-center'>Opening Hours</p>
                <Table className='text-white' bordered size="sm">
  <thead>
    <tr>
      <th>Monday–Thursday</th>
      <th>Friday–Saturday</th>
      <th>Sunday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>10AM to 6PM</td>
      <td>11AM to 4PM</td>
      <td>Close</td>
    </tr>
  </tbody>
</Table>
                </div>
                <div className="col-md-4">
                <h4>Subscribe Newsletter</h4>
                <p>Subscribe to our newsletter & always be aware of all the latest updates</p>
                <input type="email" placeholder="email" name="" id="" />
                <input type="submit" value="subscribe" />
                </div>
            </div>
        </div>
            <hr />
            <p>DreamHouse © 2021. All rights reserved.</p>
        </div>
    );
};

export default Footer;