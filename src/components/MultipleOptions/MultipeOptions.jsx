import "./multipleOptions.css"
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import React, { useEffect } from "react"

let mydata = [
    {
        "name": "Budget",
        "icon": false
    },
    {
        "name": "Food Alergies",
        "icon": false
    },
    {
        "name": "Number of people",
        "icon": false
    },
    {
        "name": "Special restrections",
        "icon": false
    },
    
]

function MultipleOptions() {
    const [data, setData] = React.useState(mydata)
    const [res, setRes] = React.useState(false)


    useEffect(() => {
        console.log("called")
    }, [res, data])

    const handleTextChange = (e) => {
        let inputValue = e.target.value
        console.log("mydata", mydata)
        let myData = mydata.slice("")
        let newData = myData.filter(element => element['name'].toLowerCase().includes(inputValue))
        setData(newData)
    }
    const handleIconClick = (recievedData) => {
        let index2 = mydata.findIndex(ele => ele['name'] === recievedData);
        mydata[index2]["icon"] = true
        console.log(mydata)
        let index = data.findIndex(ele => ele['name'] === recievedData);
        let newData = data
        newData[index]["icon"] = true
        setData(newData)

        setRes(!res)
    }
    return (
        <div className="container">
            <div className="container__left">02.08.MultipleOptions</div>
            <div className="container__right">
                <div className="right__comp" >
                    <TextField onChange={handleTextChange} style={{ width: "100%", marginBottom: "10px" }} id="standard-basic" label="Search Questions" />
                    <div className="task-list">
                        {
                            data && data.map((element, i) => {
                                return (
                                    <div className={`${element['icon'] ? 'no-style' : "element-color"}`} key={i}>
                                        { element['icon'] ?
                                            <div className="search_data" style={{ color: "gray" }}>
                                                <h3>{element['name']}</h3>
                                                <CheckIcon />
                                            </div>
                                            :
                                            <div className="search_data">
                                                <h3>{element['name']}</h3>
                                                <AddIcon onClick={(e) => { e.preventDefault(); handleIconClick(element['name']) }} />
                                            </div>}
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}



export default MultipleOptions;
