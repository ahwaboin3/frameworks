//components/EditCar.js

import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { useState } from "react"
import { SERVER_URL } from './constants';

function EditCar({fetchCars,data}){
    const[open,setOpen]=useState(false)
    const[car,setCar]=useState({
        brand:"",model:"",color:"",
        year:"",price:""
    })
    const handleClickOpen=()=>{
        setOpen(true)
        console.log(data)
    }
    const handleClose=()=>{
        setOpen(false)
        setCar({
            brand: "",model: "",color: "",
            year: "",price: "",
          });
    }

    const handleChange=(event)=>{
        setCar({...car,[event.target.name]:event.target.value})
    }

    //자동차를 업데이트하고 모달 폼을 닫음
    const handleSave=()=>{

    }

    //자동차 업데이트
    const updateCar=(link)=>{
        fetch(SERVER_URL+"/api/cars",
            {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(car)
            }
        )
        .then(reponse=>{
            if(reponse.ok){
                fetchCars();
            }else{
                alert("Something went wrong!")
            }
        })
        .catch(err=>console.error(err))

    }

    return(
        <div>
            <button onClick={handleClickOpen}>Edit</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit car</DialogTitle>
                <DialogContent>
                    <input placeholder="Brand" name="brand"
                            value={car.brand} onChange={handleChange} />
                    <br/>
                    <input placeholder="Model" name="model"
                        value={car.model} onChange={handleChange} />
                    <br/>
                    <input placeholder="Color" name="color"
                        value={car.color} onChange={handleChange} />
                    <br/>
                    <input placeholder="Year" name="year"
                        value={car.year} onChange={handleChange} />
                    <br/>
                    <input placeholder="Price" name="price"
                        value={car.price} onChange={handleChange} />
                </DialogContent>
            </Dialog>
        </div>
    )

}

export default EditCar