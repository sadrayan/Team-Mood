import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';

function createData(name, energyLevel) {
    return { name, energyLevel };
}
// add data
const rows = [
    createData('John', 3),
    createData('Mary', 9),
    createData('Nick', 8),
    createData('Sunil', 6),
    createData('Rebecca', 6)
];

function valuetext(value) {
    if (value < 3)
        return 'fucked up'
    else if (value < 5)
        return 'meh'
    else if (value < 7)
        return 'good'
    else 
        return 'awesome'

  }

export default function UserTable() {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    const classes = useStyles();
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">  
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Energy</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                 {row.name}
                </TableCell>
                <TableCell align="right">
                    
                    <Slider
                        defaultValue={row.energyLevel}
                        getAriaValueText={valuetext}
                        valueLabelFormat={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={10}
                    />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

const useStyles = makeStyles({
    table: {
    //   minWidth: 300,
    },
  });
  