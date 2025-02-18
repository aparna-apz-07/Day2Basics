import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Basictb = () => {
  return (
    <div>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Aparna</TableCell>
                    <TableCell>25</TableCell>
                    <TableCell>Irinjalakuda</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Sanal</TableCell>
                    <TableCell>23</TableCell>
                    <TableCell>Kothamangalam</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Athira</TableCell>
                    <TableCell>24</TableCell>
                    <TableCell>koothuparambu</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default Basictb

