import React, { Children, useState } from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ChildCareIcon from '@material-ui/icons/ChildCare';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
  
export default function Hotel() {
    const [ rooms, setRooms ] = useState(1)
    const [ adults, setAdults ] = useState(1)
    const [ children, setChildren ] = useState(0)

    const Rooms = () => {
        window.alert("adding and removing")
    }
    const Adults = () => {

    }
    const Childrens = ( ) => {

    }
    return (
        <div>
            <h1 className="title"> <PeopleIcon /> Choose number of People</h1>
            <Paper border={1} >
            <Table   aria-label="simple table">
                <TableRow>
                    <TableCell>
                        <p> <AirlineSeatIndividualSuiteIcon />Rooms</p>
                    </TableCell>
                    <TableCell>
                        <div className="button-group" >
                            <Fab onClick={Rooms} size="small" color="primary" aria-label="add">
                                        <AddIcon  />
                            </Fab> 
                            <span>{rooms}</span>
                            <Fab onClick={Rooms}  size="small" color="secondary" aria-label="add">
                                        <RemoveIcon />
                            </Fab> 
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <p> < AccessibilityIcon/> Adults</p>
                    </TableCell>
                    <TableCell>
                        <div className="button-group" >
                            <Fab onClick={Adults}  size="small" color="primary" aria-label="add">
                                        <AddIcon />
                            </Fab> 
                            <span>{adults}</span>
                            <Fab onClick={Adults}  size="small" color="secondary" aria-label="add">
                                        <RemoveIcon />
                            </Fab> 
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow >
                    <TableCell>
                        <p> <ChildCareIcon />  Children</p>
                    </TableCell>
                    <TableCell>
                        <div className="button-group" >
                            <Fab onClick={Childrens} size="small" color="primary" aria-label="add">
                                        <AddIcon />
                            </Fab> 
                            <span>{children}</span>
                            <Fab onClick={Children} size="small" color="secondary" aria-label="add">
                                        <RemoveIcon />
                            </Fab> 
                        </div>
                    </TableCell>
                </TableRow>
            </Table>
            </Paper>
        </div>
    )
}
