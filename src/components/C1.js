import Axios from "axios";
import { useEffect, useState } from "react";

export function C1() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get("https://dummyjson.com/users")
            .then((res) => {
                if (res.status === 200) {
                    setData(res.data.users);
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }, []);

    const ListUserData = () => {
        return data.map((val) => {
            return (
                <tr className="row" key={val.id}>
                    <td className="col">{val.id}</td>
                    <td className="col text-start"><img src={val.image} style={{ width: "50px", height: "50px" }} alt={val.firstName} /></td>
                    <td className="col text-start">{val.firstName}</td>
                    <td className="col text-start">{val.lastName}</td>
                    <td className="col text-start">{val.gender}</td>
                    <td className="col text-start">{val.email}</td>
                    <td className="col text-start">{val.username}</td>
                    <td className="col text-start">{val.domain}</td>
                    <td className="col text-start">{val.ip}</td>
                    <td className="col text-start">{val.university}</td>
                </tr>
            );
        });
    }

    return (
        <div style={{backgroundColor:"#1B1B1B"}}>
            <p className="h1 text-light text-center" style={{ fontWeight: "bold" }}>Dummy data</p>
            <div className="m-3" style={{ border: "1px solid white", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>
                <table className="text-light" style={{ fontWeight: "bold", width: "100%" }}>
                    <thead>
                        <tr className="row">
                            <th className="col">Sno</th>
                            <th className="col">Profile Pic</th>
                            <th className="col">First Name</th>
                            <th className="col">Last Name</th>
                            <th className="col">Gender</th>
                            <th className="col">Email</th>
                            <th className="col">Username</th>
                            <th className="col">Domain</th>
                            <th className="col">IP</th>
                            <th className="col">University</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListUserData()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
