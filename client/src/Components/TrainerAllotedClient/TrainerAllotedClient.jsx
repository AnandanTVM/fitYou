import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
import { getAllClientInfo } from '../../axios/serives/TrainerServices'

function TrainerAllotedClient() {
    const [ClientDetails, setClientDetails] = useState('')
    const [err, seterr] = useState('')
    const navigate=useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('trainertoken');
        featchData()
        async function featchData() {

            let Details = await getAllClientInfo(token);
            console.log(Details);
            if (Details.status) {
                setClientDetails(Details.clientDetails)
            } else {
                seterr('Bad Request...')
            }
        }
    }, [])
    const columns = [
        {
            name: "Name",
            selector: (row) => row.Clientdetails.fname + "  " + row.Clientdetails.lname,
        },
        {
            name: "DOB",
            selector: (row) => row.Clientdetails.dob,
        },
        {
            name: "Gender",
            selector: (row) => row.Clientdetails.gender,
        },
        {
            name: "Plan Validtill",
            selector: (row) => row.validtill,
        },
        {
            name: "Time Alloted",
            selector: (row) => row.Time,
        },
        {
            name: "Status",
            selector: (row) => { return (<div style={{ color: 'green' }}>{row.paymentStatus}</div>) },
        },

        {
            name: "View More",
            selector: (row) => {
                return (<div>  <button
                    className="btn btn-info"
                    onClick={() => {
                        navigate(`/trainer/clientDetails/view/${row._id}`);



                    }}
                >
                    More Details
                </button></div>)
            },
        },

    ];
    return (
        <div>
          {err?{err}:  (<div className="container">
                <div className="row mt-4">
                    <h1> Client Info</h1>
                </div>

                <DataTable columns={columns} data={ClientDetails} fixedHeader fixedHeaderScrollHeight='400px' selectableRows selectableRowsHighlight highlightOnHover pagination />

            </div>)}
        </div>
    )
}

export default TrainerAllotedClient