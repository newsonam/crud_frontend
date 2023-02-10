import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

function ProductEdit(){
    let { _id } = useParams();
    const [proddata, setProdData] = useState([]);
    const [editData,setEditData]=useState({productName:'',category:'',price:''})
    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const res = await fetch(`/productedit/${_id}`);
                const data = await res.json();
                console.log("coming data", data);
                setProdData(data.data);

            }
            catch (error) {
                console.log("API Error is", error);
            }

        }
        fetchProductData();
    }, [_id]);
    const handleInputs=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setEditData({...editData,[name]:value})
    }
return(
<div class="container w-50 mt-5">
    <h3 className='text-center mt-3 mb-3'>Product Edit Form</h3>
<form method='post'>
    <div class="mb-3">
        <label for="exampleInputProductName" class="form-label d-flex justify-content-start">Product Name</label>
        <input type="text" name="productname" class="form-control" id="exampleInputProductName" aria-describedby="emailHelp" value={proddata.productname}  onChange={handleInputs} autoComplete="off" />
    </div>
    <div class="mb-3">
        <label for="exampleInputCategory" class="form-label d-flex justify-content-start">Category</label>
        <input type="text" name="category" class="form-control" id="exampleInputCategory" aria-describedby="emailHelp" value={proddata.category} onChange={handleInputs} autoComplete="off" />
    </div>
    <div class="mb-3">
        <label for="exampleInputPrice" class="form-label d-flex justify-content-start">Price</label>
        <input type="text" name="price" class="form-control" id="exampleInputPrice" value={proddata.price} onChange={handleInputs} autoComplete="off" />
    </div>
     <div class="d-grid gap-2">
        <button type="submit" value="submit" name="submit" class="btn btn-primary" >Sign Up</button>
    </div>
</form>

</div>
);
}
export default ProductEdit;