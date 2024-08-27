import { Box, Container, Typography } from "@mui/material";
import RegistrationForm from "./RegistrationForm";

export default function(){
  return(
    <Box sx={{marginY:"40px"}}>
      <Typography variant="h3" sx={{textAlign:"center"}}>Form validation with zod and React hook form</Typography>
      <Container maxWidth="xs" sx={{marginTop:"40px"}}>
        <RegistrationForm/>
      </Container>
    </Box>
  )
}