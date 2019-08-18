import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    panel: {
        width: '100%'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function InputTask() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    // function handleChange(event) {
    //     setValues(oldValues => ({
    //         ...oldValues,
    //         [event.target.name]: event.target.value,
    //     }));
    // }

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const inputLabel = React.useRef(null);

    // const handleChange = name => event => {
    //     setState({
    //         ...state,
    //         [name]: event.target.value,
    //     });
    // };

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    return (
        <div className={classes.root}>
            <ExpansionPanel className={classes.panel} defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <IconButton className={classes.iconButton} aria-label="add">
                        <AddIcon />
                    </IconButton>
                    <InputBase
                        className={classes.input}
                        placeholder="Nova tarefa"
                        inputProps={{ 'aria-label': 'nova tarefa' }}
                    />
                    <div className={classes.column}>
                        <Typography className={classes.heading}></Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}></Typography>
                    </div>
                    <Divider className={classes.divider} />
                    <Button variant="contained" color="primary" className={classes.button}>
                        Adicionar</Button>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={clsx(classes.column, classes.helper)}>
                        <form className={classes.container} noValidate autoComplete="off">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Data limite"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    className={classes.textField}
                                    // fullWidth
                                    variant="outlined"
                                />
                            </MuiPickersUtilsProvider >
                            <FormControlLabel
                                value="repetir"
                                control={<Switch color="primary" />}
                                label="Repetir"
                                labelPlacement="start"
                            />
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">Recorrência</InputLabel>
                                <Select
                                    value={state.age}
                                    onChange={handleChange('age')}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-native-simple',
                                    }}
                                >
                                    <MenuItem value="" />
                                    <MenuItem value="diariamente">Diariamente</MenuItem>
                                    <MenuItem value="dias-uteis">Dias úteis</MenuItem>
                                    <MenuItem value="semanalmente">Toda semana</MenuItem>
                                    <MenuItem value="mensalmente">Todo mês</MenuItem>
                                    <MenuItem value="anualmente">Anualmente</MenuItem>
                                    <MenuItem value="personalizado">Personalizado</MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    </div>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions>
                    <Button size="small">Cancel</Button>
                    <Button size="small" color="primary">Save</Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
        </div>
    );
}
