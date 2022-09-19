import { Stack, Link } from "@mui/material"

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
    <Link href="#">Link1</Link>
    <Link href="#" color='secondary' underline='hover'>Link2</Link>
    <Link href="#" underline='none'>Link3</Link>
    </Stack>
  )
}
