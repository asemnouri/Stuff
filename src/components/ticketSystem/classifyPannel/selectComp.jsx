import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from "react-redux";
import {setSelectedGoal} from "../../../Redux/ticket/ticketActions"


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function NativeSelects({setSelectedGoal,pressed,handleGoalSet}) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        goal: ''
    });

    React.useEffect(()=>{
        setState({goal: ''})
    },[pressed])

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
        setSelectedGoal(event.target.value)
        handleGoalSet(event.target.value)
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel>Select</InputLabel>
                <Select
                    native
                    value={state.goal}
                    onChange={handleChange}
                    inputProps={{
                        name: 'goal'
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={"Buy a product"}>Buy a product</option>
                    <option value={"Cancel an account"}>Cancel an account</option>
                    <option value={"Buy and Recommend a gift"}>Buy and Recommend a gift</option>
                    <option value={"Ask for the business"}>Ask for the business</option>

                </Select>
            </FormControl>
        </div>
    );
}
const mapDispatchToProps=dispatch=>{
    return{
        setSelectedGoal:goal=>dispatch(setSelectedGoal(goal))
    }
}

const mapStateToProps=({user:{pressed}})=>{
    return{
        pressed
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NativeSelects)