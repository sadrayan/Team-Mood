import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider";

function createData(id, name, energyLevel, moodImg) {
  return { id, name, energyLevel, moodImg };
}

const pics = {
  happy: "img/png/001-happy.png",
  sad: "img/png/002-sad.png",
  "happy-1": "img/png/003-happy-1.png",
  confused: "img/png/004-confused.png",
  wink: "img/png/005-wink.png",
  surprised: "img/png/006-surprised.png",
  "sad-1": "img/png/007-sad-1.png",
};

// add data
const rows = [
  createData(1000, "John", 3, moodMap(3)),
  createData(1001, "Mary", 9, moodMap(9)),
  createData(1002, "Nick", 8, moodMap(8)),
  createData(1003, "Sunil", 6, moodMap(6)),
  createData(1004, "Rebecca", 6, moodMap(6)),
];

function moodMap(value) {
  if (value === 1) return pics["sad-1"];
  else if (value <= 3) return pics["sad"];
  else if (value <= 5) return pics["confused"];
  else if (value <= 7) return pics["wink"];
  else if (value <= 9) return pics["happy-1"];
  else return pics["happy"];
}

export default function UserTable() {
  const [userList, setUserList] = React.useState(rows);
  const [energy, setEnergy] = React.useState(0);
  const [mood, setMood] = React.useState("happy");

  const handleChange = (event, newValue) => {
    setEnergy(newValue);
    setMood(moodMap(newValue));
  };

  const handleRowClick = (id) => {
    userList.find((user) => user.id == id).moodImg = mood;
    userList.find((user) => user.id == id).energyLevel = energy;
    setUserList([...userList]);
  };

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Energy</TableCell>
            <TableCell aling="right">Mood</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell onClick={() => handleRowClick(row.id)} align="right">
                <Slider
                  name={`row.id`}
                  key={`row.id`}
                  defaultValue={row.energyLevel}
                  value={row.energyLevel || ""}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  style={{ width: 300 }}
                  onChangeCommitted={handleChange}
                  step={1}
                  marks
                  min={1}
                  max={10}
                />
              </TableCell>
              <TableCell align="right">
                <img src={row.moodImg} alt="BigCo Inc. logo" />
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
    minWidth: 600,
  },
});
