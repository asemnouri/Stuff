import "./phone.css"

import React, { useEffect } from "react"
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

let countries = [
    {
        "name": "Belgium (+32)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg"
    },
    {
        "name": "Canada (+1)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
    },
    {
        "name": "England (+44)",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
    },
    {
        "name": "France (+33)",
        "image": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
    }
    
]
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing(1)
    },
    withoutLabel: {
        marginTop: theme.spacing(3)
    },
    textField: {
        width: "30ch"
    }
}));
function Phone() {
    const [display, setDisplay] = React.useState("none")
    const [data, setData] = React.useState([])
    const classes = useStyles();


    const handleChange = (e) => {
        let inputValue = e.target.value
        let myData = countries.slice("")
        let newData = myData.filter(element => element['name'].toLowerCase().includes(inputValue))
        if (newData.length) {
            setData(newData)
        } else {
            setData(["no results"])
        }
    }
    const handleClickSearch = () => {
        if (!data.length) {
            setData(countries)
        }
    }

    return (
        <div className="container2">
            <div className="container__left2">03.05.Phone</div>
            <div className="container__right2">
                <div className={classes.root}>
                    <TextField
                        onClick={(e) => setDisplay("right__comp2")}
                        label="Type your number"
                        id="outlined-start-adornment"
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">+1</InputAdornment>,
                        }}
                        variant="outlined"
                    />
                </div>

                <div className={display} >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img style={{ width: "50px", height: "30px" }} src="https://cdn11.bigcommerce.com/s-c0w1eon/images/stencil/1280x1280/products/488/4276/us_outdoor_endura_tex_flag_3x51__58254.14593876731__33151.1578663295.jpg?c=2"
                            alt="img" />
                        <p style={{ marginLeft: "7px" }}>United states (+1)</p>
                    </div>
                    <TextField id="standard-basic" label="Search" onClick={handleClickSearch} onChange={handleChange} />

                    <div className="country-list">
                        {
                            (data[0] === "no results") ?
                                <p style={{ color: "gray" }}>No results</p>
                                :
                                data && data.map((element, i) => {
                                    return (
                                        <div style={{ display: "flex", alignItems: "center" }} key={i}>
                                            <img style={{ width: "50px", height: "30px" }} src={element.image}
                                                alt="img" />
                                            <p style={{ marginLeft: "7px" }}>{element.name}</p>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
                {/* <input type="text" />
                    <label>
                        Name
                    </label> */}
            </div>
        </div>
    );
}



export default Phone;
