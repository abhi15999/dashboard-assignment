import React from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const TableData =(props)=>{

    

    const rows = props.data;
    return (
        <>
            <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{props.col1}</TableCell>
            <TableCell>{props.col2}</TableCell>
            <TableCell>{props.col3}</TableCell>
            <TableCell>{props.col4}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.total_amount}</TableCell>
              <TableCell>{row.total_quantity}</TableCell>
              <TableCell>{row.user_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </>
    )
}

export default TableData