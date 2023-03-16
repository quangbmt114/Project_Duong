import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ManagerCards() {
    const [dataCheck, setDataCheck] = useState([])
    const token = JSON.stringify(localStorage.getItem("token"))
    const token1 = token.replace(/[^a-zA-Z0-9]/g, "")
    const navigate = useNavigate()
    const fectBlog = async () => {
        const data1 = await axios.get(`http://localhost:3000/dataToken?token=${token1}`)
        setDataCheck(data1.data)
    }
    useEffect(() => {
        fectBlog()
    }, []);
    if (dataCheck) {
        const time = new Date().getTime()
        let count = 0;
        dataCheck.map((items) => {
            if (token1 === items.token && time <= items.timetoken) {
                count++;
            }
        })
        if (count > 0) {
            return (
                <div className="wrapper" style={{ marginTop: 50 }}>
                    123
                </div>
            )
        } else {
            navigate("/admin")
        }
    }

}

export default ManagerCards;