import { TableContainer, Table, TableHead,TableBody, TableRow, TableCell, Paper,Stack } from "@mui/material"

export const MuiTable = () => {
  return (
    <>
    <Stack mt={2}>
 <TableContainer component={Paper}  sx={{maxHeight:'300px'}}>
<Table aria-label='simple-table' stickyHeader>
<TableHead>
    <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>First name</TableCell>
        <TableCell>Last name</TableCell>
        <TableCell align='center'>Email</TableCell>
    </TableRow>
</TableHead>
<TableBody>
    {
       tableData.map(row=>(
         <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border:0}}}>
<TableCell>{row.id}</TableCell>
<TableCell>{row.first_name}</TableCell>
<TableCell>{row.last_name}</TableCell>
<TableCell align='center'>{row.email}</TableCell>
         </TableRow>
       ))
    }
</TableBody>
</Table>
 </TableContainer>
 </Stack>
 </>
  )
}

const tableData=[
    {
        "id": 1,
        "first_name": "Clifford",
        "last_name": "Wewell",
        "email": "cwewell0@netlog.com",
    },
    {
        "id": 2,
  "first_name": "Cathlene",
  "last_name": "Minillo",
  "email": "cminillo1@spotify.com",
    },
    {
        "id": 3,
  "first_name": "Annamaria",
  "last_name": "Buckoke",
  "email": "abuckoke2@unesco.org",
    },
    {
        "id": 4,
  "first_name": "Almeta",
  "last_name": "Cocklie",
  "email": "acocklie3@meetup.com",
    },
    {
        "id": 5,
        "first_name": "Malvin",
        "last_name": "Dugdale",
        "email": "mdugdale4@independent.co.uk",
    },
    {
        "id": 6,
  "first_name": "Mathew",
  "last_name": "Vassbender",
  "email": "mvassbender5@harvard.edu",
    },
    {
        "id": 7,
        "first_name": "Skippy",
        "last_name": "Vanderplas",
        "email": "svanderplas6@t.co",
    },
    {
        "id": 8,
        "first_name": "Rock",
        "last_name": "Kinkade",
        "email": "rkinkade7@phpbb.com",
    }
]