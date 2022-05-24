import React from 'react';
import { toast } from 'react-toastify';

const ManageTable = ({ o, index, refetch,sendEvent,setModal }) => {

  console.log(o)

    const { _id, img, productName,userName,email, number, price, quantity, address } = o
    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>

            <td>{userName}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{address}</td>
            <td>{number}</td>
            <td>
            <label onClick={()=>setModal(o)} htmlFor="deleteModal" className="bg-primary btn modal-button">Delete</label></td>
            <td> <button className="text-white bg-cyan-700   font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">Update</button></td>
        </tr>
    );
};

export default ManageTable;