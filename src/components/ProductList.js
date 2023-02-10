import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './style.css';
function ProductList() {
    const [productdata, setProductData] = useState([]);
    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const res = await fetch('/displayproductdata');
                const data = await res.json();
                console.log("coming data", data);
                setProductData(data.data);

            }
            catch (error) {
                console.log("API Error is", error);
            }

        }
        fetchProductData();
    }, [productdata]);
    const handleDelete = async (id) => {
        const res = await fetch(`/deletedata/${id}`, { method: "POST" });
        const status = await res.status;
        if (status === 201) {
            window.alert("Product data deleted");
        }
        else {
            window.alert("data not saved");
        }

    }

    return (
        <div className='bg-color'>
            <h2 className='text-primary mt-2 pt-3 text-dark'>Product Details </h2>
            <table class="container table table-striped bg-white">
                <thead>
                    <tr>
                        <th scope="col" className='column-width'>Serial No. </th>
                        <th scope="col" className='column-width'>Product Image</th>
                        <th scope="col" className='column-width'>Product Name</th>
                        <th scope="col" className='column-width'>Category </th>
                        <th scope="col" className='column-width'>Price</th>
                        <th scope="col" className='column-width'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {productdata.map((product, index) => {
                        return (
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td><img src={product.imageurl} alt="loading" className='cartimage' /></td>
                                <td>{product.productname}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td className='btn-action'>
                                <NavLink to={`/productedit/${product._id}`} > <button type="button" class="btn btn-primary">
                                        Edit
                                    </button></NavLink>
                                    
                                    <button type="submit" className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete</button>
                                </td>

                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    );
}

export default ProductList;