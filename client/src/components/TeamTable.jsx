import { useState, useEffect } from "react";
import { Button } from "@mui/material";
function TeamTable(){
    const [tableItems, setTableItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/admin")
        .then(res => res.json())
        .then(tableItems => setTableItems(tableItems))
    },[])


    return(
      <div>
      <h1 className="text-4xl overflow-hidden m-3 font-bold">TEAM</h1>
      <h3 className="text-emerald-500 m-3 ">Managing the team</h3>
      <table className="min-w-full border m-3  border-gray-800">
        <thead>
          <tr className="bg-sky-950">
            <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">Id</th>
            <th className="py-2  border-gray-500 px-4 text-slate-200 border-r">Name</th>
            <th className="py-2  border-gray-500 px-4 text-slate-200 border-r">Email</th>
            <th className="py-2  border-gray-500 px-4 text-slate-200 border-r">Contact no.</th>
            <th className="py-2  border-gray-500 px-4 text-slate-200 border-r">Address 1</th>
            <th className="py-2  border-gray-500 px-4 text-slate-200 border-r">Availability</th>
            <th className="py-2  border-gray-500 px-4 text-slate-200">Position</th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((tableItem) => (
            <tr key={tableItem.id} className="border-t  border-gray-800">
              <td className="py-2  border-gray-500 px-4 border-r">{tableItem.id}</td>
              <td className="py-2  border-gray-500 px-4 text-emerald-500 border-r">{`${tableItem.first_name} ${tableItem.last_name}`}</td>
              <td className="py-2  border-gray-500 px-4 border-r">{tableItem.email}</td>
              <td className="py-2  border-gray-500 px-4 border-r">{tableItem.phone_number}</td>
              <td className="py-2  border-gray-500 px-4 border-r">{tableItem.address}</td>
              <td className="py-2  border-gray-500 px-4 border-r">{tableItem.availability}</td>
              <Button className="py-2 f bg-emerald-800 text-slate-300 w-full pr-15 pt-pl-15 1 pb-1">{tableItem.position}</Button>
            </tr>
          ))}
        </tbody>
      </table></div>
        
    )
}

export default TeamTable;