//components/AddCar.js
import { Dialog,DialogTitle,DialogContent,DialogActions } from '@mui/material';
import { useState } from 'react';
import { SERVER_URL } from './constants';

function AddCar({fetchCars}){
    const[open,setOpen]=useState(false)
    const[car,setCar]=useState({
        brand:"",
        model:"",
        color:"",
        year:"",
        price:""
    })

    //대화상자 폼을 닫고 여는 두 함수를 추가해야 한다.
    const handleClickOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
        setCar({
            brand: "",
            model: "",
            color: "",
            year: "",
            price: "",
          });
    }

    const handleChange=(event)=>{
        // console.log(event.target.value)
        setCar({...car,[event.target.name]:event.target.value})
    }

    //새로운 자동차 추가
    const addCar=(car)=>{
        fetch(SERVER_URL+"/api/cars",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(car)
            }
        )
        .then(reponse=>{
            if(reponse.ok){
                fetchCars();
            }
        })
    }

    //자동차를 저장하고 모달 폼을 닫음
    const handleSave=()=>{
        addCar(car)
        handleClose()
    }

    return(
        <div>
            <button onClick={handleClickOpen}>New Car</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New car</DialogTitle>
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
                <DialogActions>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </DialogActions>
            </Dialog>
        </div>
    )

}
export default AddCar
