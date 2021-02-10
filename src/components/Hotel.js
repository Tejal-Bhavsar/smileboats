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
    const [ childrens, setChildren ] = useState(0)

    const RoomsAdd = () => {
        let total
        if (rooms < 5 ){ 
       total = rooms + 1
        setRooms(total)
        }
    }
    const RoomsRemove = () => {
        let total
        if(rooms > 0 ){
            total = rooms - 1
        
        setRooms(total)
        }

    }
    const AdultsAdd = () => {
        let total 
        if(rooms > 1 && adults < 4){ 
        total = adults + 1
        setAdults(total)
        }
    }
    const AdultsRemove = ( ) => {
        let total 
        if(adults > 0  ){
            total = adults - 1
        setAdults(total)
        }
        
    }
    const ChildrensAdd = ( ) => {
        let total 
        total = childrens + 1
        setChildren(total)
    }
    const ChildrensRemove = () => {
        let total 
        if (childrens > 0 ) {
        total = childrens - 1
        setChildren(total)
        }
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
                            <Fab onClick={RoomsAdd} size="small" color="primary" aria-label="add">
                                        <AddIcon  />
                            </Fab> 
                            <span>{rooms}</span>
                            <Fab onClick={RoomsRemove}  size="small" color="secondary" aria-label="add">
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
                            <Fab onClick={AdultsAdd}  size="small" color="primary" aria-label="add">
                                        <AddIcon />
                            </Fab> 
                            <span>{adults}</span>
                            <Fab onClick={AdultsRemove}  size="small" color="secondary" aria-label="add">
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
                            <Fab onClick={ChildrensAdd} size="small" color="primary" aria-label="add">
                                        <AddIcon />
                            </Fab> 
                            <span>{childrens}</span>
                            <Fab onClick={ChildrensRemove} size="small" color="secondary" aria-label="add">
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
