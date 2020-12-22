import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        goal: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
         setState({
            ...state,
            [name]: event.target.value,
        });
        
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
                    <option value={"Goal one"}>Goal one</option>
                    <option value={"Goal two"}>Goal two</option>
                    <option value={"Goal three"}>Goal three</option>
                </Select>
            </FormControl>
        </div>
    );
}