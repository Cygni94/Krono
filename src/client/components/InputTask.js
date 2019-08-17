import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
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

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

export default function InputTask() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    return (
        <div className={classes.root}>
            <ExpansionPanel className={classes.panel}>
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
                            <TextField
                                id="outlined-name"
                                label="Name"
                                className={classes.textField}
                                value={values.name}
                                onChange={handleChange('name')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-uncontrolled"
                                label="Uncontrolled"
                                defaultValue="foo"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="Hello World"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                error
                                id="outlined-error"
                                label="Error"
                                defaultValue="Hello World"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                disabled
                                id="outlined-disabled"
                                label="Disabled"
                                defaultValue="Hello World"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                className={classes.textField}
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                className={classes.textField}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Read Only"
                                defaultValue="Hello World"
                                className={classes.textField}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-dense"
                                label="Dense"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-dense-multiline"
                                label="Dense multiline"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                variant="outlined"
                                multiline
                                rowsMax="4"
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                multiline
                                rowsMax="4"
                                value={values.multiline}
                                onChange={handleChange('multiline')}
                                className={classes.textField}
                                margin="normal"
                                helperText="hello"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows="4"
                                defaultValue="Default Value"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-helperText"
                                label="Helper text"
                                defaultValue="Default Value"
                                className={classes.textField}
                                helperText="Some important text"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-with-placeholder"
                                label="With placeholder"
                                placeholder="Placeholder"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-textarea"
                                label="Multiline Placeholder"
                                placeholder="Placeholder"
                                multiline
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-number"
                                label="Number"
                                value={values.age}
                                onChange={handleChange('age')}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-search"
                                label="Search field"
                                type="search"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                className={classes.textField}
                                value={values.currency}
                                onChange={handleChange('currency')}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                helperText="Please select your currency"
                                margin="normal"
                                variant="outlined"
                            >
                                {currencies.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="outlined-select-currency-native"
                                select
                                label="Native select"
                                className={classes.textField}
                                value={values.currency}
                                onChange={handleChange('currency')}
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                helperText="Please select your currency"
                                margin="normal"
                                variant="outlined"
                            >
                                {currencies.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                            <TextField
                                id="outlined-full-width"
                                label="Label"
                                style={{ margin: 8 }}
                                placeholder="Placeholder"
                                helperText="Full width!"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="outlined-bare"
                                className={classes.textField}
                                defaultValue="Bare"
                                margin="normal"
                                variant="outlined"
                                inputProps={{ 'aria-label': 'bare' }}
                            />
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
