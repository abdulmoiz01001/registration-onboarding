// Importing zod for validation of data 
import * as z from 'zod';

// Schema for Registering Details

export const RegisterSchema = z.object({
    name: z.string().min(2, { message: "Complete Name is Required!" }),
    email: z.string().email(1, { message: " Email is Required!" }),
    password: z.string().min(8, { message: "Minimum 8 characters of Password is required!" })
});

// Schema for Residency Details

export const ResidencySchema = z.object({
    phone: z.string().min(10, { message: "Phone Number is Required!" }),
    address: z.string().min(2, { message: "Address is Required!" }),
    country: z.string().min(2, { message: "City is Required!" })
});