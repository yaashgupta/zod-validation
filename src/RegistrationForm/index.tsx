import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  import { useCallback } from "react";
  import { useForm, Controller } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { RegistrationSchema, registrationSchema } from "./schema";
  
  export default function RegistrationForm() {
    const {
      handleSubmit,
      control,
      formState: { errors, isSubmitting },
    } = useForm({
      mode: "all",
      defaultValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        birthday: null,
        gender: "",
        termsAndConditions: false,
      },
      resolver: zodResolver(registrationSchema),
    });
  
    const onSubmit = useCallback((values: RegistrationSchema) => {
      window.alert(JSON.stringify(values, null, 4));
    }, []);
  
    return (
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "450px",
          margin: "0 auto",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  error={!!errors.name}
                  label="Name"
                  type="text"
                  variant="outlined"
                  helperText={errors.name?.message}
                  {...field}
                  sx={{
                    backgroundColor: "#ffffff",
                  }}
                />
              )}
            />
  
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  error={!!errors.email}
                  label="Email"
                  type="email"
                  variant="outlined"
                  helperText={errors.email?.message}
                  {...field}
                  sx={{
                    backgroundColor: "#ffffff",
                  }}
                />
              )}
            />
  
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  error={!!errors.password}
                  label="Password"
                  type="password"
                  variant="outlined"
                  helperText={errors.password?.message}
                  {...field}
                  sx={{
                    backgroundColor: "#ffffff",
                  }}
                />
              )}
            />
  
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  error={!!errors.confirmPassword}
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  helperText={errors.confirmPassword?.message}
                  {...field}
                  sx={{
                    backgroundColor: "#ffffff",
                  }}
                />
              )}
            />
  
            <Controller
              name="birthday"
              control={control}
              render={({ field }) => (
                <>
                  <InputLabel
                    error={!!errors.birthday}
                    id="date"
                    sx={{ marginBottom: "4px" }}
                  >
                    Birthday
                  </InputLabel>
                  <TextField
                    {...field}
                    id="date"
                    type="date"
                    variant="outlined"
                    error={!!errors.birthday}
                    helperText={errors.birthday?.message}
                    sx={{
                      backgroundColor: "#ffffff",
                    }}
                  />
                </>
              )}
            />
  
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <FormControl error={!!errors.gender}>
                  <InputLabel id="gender">Gender</InputLabel>
                  <Select
                    {...field}
                    labelId="gender"
                    id="gender"
                    label="Gender"
                    variant="outlined"
                    sx={{
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                  </Select>
                  {errors.gender && (
                    <FormHelperText>{errors.gender.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
  
            <Controller
              name="termsAndConditions"
              control={control}
              render={({ field }) => (
                <FormControl
                  error={!!errors.termsAndConditions}
                  variant="outlined"
                >
                  <FormControlLabel
                    {...field}
                    control={<Checkbox {...field} />}
                    label="Accept terms and conditions"
                    sx={{ color: "#333" }}
                  />
                  {errors.termsAndConditions && (
                    <FormHelperText>
                      {errors.termsAndConditions.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Box>
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
            disabled={isSubmitting || Object.keys(errors).length > 0}
          >
            Submit
          </Button>
        </form>
      </Box>
    );
  }
  