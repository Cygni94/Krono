import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    }
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
