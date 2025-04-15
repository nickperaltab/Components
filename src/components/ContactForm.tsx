import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Box, 
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  status: string;
}

export interface ContactFormProps {
  initialData?: Partial<ContactFormData>;
  onSubmit: (data: ContactFormData) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  initialData = {}, 
  onSubmit 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    status: 'active',
    ...initialData,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validateForm = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | { value: unknown }>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Contact Information
      </Typography>
      
      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr 1fr' }}>
        <TextField
          label="First Name"
          value={formData.firstName}
          onChange={handleChange('firstName')}
          error={!!errors.firstName}
          helperText={errors.firstName}
          fullWidth
        />
        
        <TextField
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange('lastName')}
          error={!!errors.lastName}
          helperText={errors.lastName}
          fullWidth
        />
        
        <TextField
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
        />
        
        <TextField
          label="Phone"
          value={formData.phone}
          onChange={handleChange('phone')}
          error={!!errors.phone}
          helperText={errors.phone}
          fullWidth
        />
        
        <TextField
          label="Company"
          value={formData.company}
          onChange={handleChange('company')}
          fullWidth
        />
        
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={formData.status}
            label="Status"
            onChange={handleChange('status')}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
        <Button variant="outlined" type="button">
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Save Contact
        </Button>
      </Box>
    </Box>
  );
}; 