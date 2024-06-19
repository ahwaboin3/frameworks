//component/Carlist.js
import {useState,useEffect} from "react"
import { SERVER_URL } from "./constants"

function Carlist(){
    //REST API에서 가져온 자동차 정보를 담을 상태 객체가 필요하다
    //비어 있는 배열을 기본값으로 cars라는 상태를 선언한다
    const [cars,setCars]=useState([])
    
    //useEffect 훅에서 fetch를 실행한다
    //fetch는 web server에 요청을 보내는 함수 - AJAX
    //두 번째 인수로 비어 있는 배열을 전달하므로 fetch는 첫 번째 렌더링 후에 한 번만 실행된다. JSON응답 데이터에 있는 자동차 데이터는 cars상태에 저장한다

    useEffect(()=>{
        fetch(SERVER_URL+"/api/cars")
            .then(res=>res.json())
            .then(data=>
                // console.log(data._embedded.cars)
                setCars(data._embedded.cars)
            )
            .catch(err=>console.log(err))
    },[])

    return(
        <div>
            <table>
                <tbody>
                    {cars.map((car,index)=>
                        <tr key={index}>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.color}</td>
                            <td>{car.year}</td>
                            <td>{car.price}</td>
                        </tr>    
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Carlist;
