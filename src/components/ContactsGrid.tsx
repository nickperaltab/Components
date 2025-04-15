import React, { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Stack,
  Menu,
  MenuItem,
  useTheme,
} from '@mui/material';
import {
  Search as SearchIcon,
  MoreVert as MoreVertIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';

// Define the contact data type
export interface Contact {
  id: string;
  name: string;
  title?: string;
  email: string;
  company: string;
  phone?: string;
  tags?: string[];
  avatar?: string;
}

// Define the component props
export interface ContactsGridProps {
  contacts: Contact[];
  onContactClick?: (contact: Contact) => void;
  onPageChange?: (page: number) => void;
  currentPage?: number;
  totalItems?: number;
  itemsPerPage?: number;
}

const ContactsGrid: React.FC<ContactsGridProps> = ({
  contacts = [],
  onContactClick,
  onPageChange,
  currentPage = 1,
  totalItems = 0,
  itemsPerPage = 10,
}) => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [viewAnchorEl, setViewAnchorEl] = useState<null | HTMLElement>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleViewClick = (event: React.MouseEvent<HTMLElement>) => {
    setViewAnchorEl(event.currentTarget);
  };

  const handleViewClose = () => {
    setViewAnchorEl(null);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {/* Header section */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        p: 2,
        borderBottom: 1,
        borderColor: 'divider'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              cursor: 'pointer'
            }}
            onClick={handleViewClick}
          >
            All Contacts
            <KeyboardArrowDownIcon fontSize="small" />
          </Typography>
          <Menu
            anchorEl={viewAnchorEl}
            open={Boolean(viewAnchorEl)}
            onClose={handleViewClose}
          >
            <MenuItem onClick={handleViewClose}>All Contacts</MenuItem>
            <MenuItem onClick={handleViewClose}>VIP</MenuItem>
            <MenuItem onClick={handleViewClose}>Recent</MenuItem>
          </Menu>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: 'white',
              textTransform: 'none',
              px: 3,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
              }
            }}
          >
            New
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              textTransform: 'none',
              px: 3
            }}
          >
            Import
          </Button>
          <TextField
            placeholder="Search"
            size="small"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" color="action" />
                </InputAdornment>
              ),
              sx: { 
                borderRadius: 1,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.divider,
                }
              }
            }}
            sx={{ width: 280 }}
          />
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Table section */}
      <TableContainer>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ 
                fontWeight: 600, 
                color: 'text.secondary',
                fontSize: '0.875rem',
                py: 1.5
              }}>
                Name
              </TableCell>
              <TableCell sx={{ 
                fontWeight: 600, 
                color: 'text.secondary',
                fontSize: '0.875rem',
                py: 1.5
              }}>
                Company
              </TableCell>
              <TableCell sx={{ 
                fontWeight: 600, 
                color: 'text.secondary',
                fontSize: '0.875rem',
                py: 1.5
              }}>
                Email
              </TableCell>
              <TableCell sx={{ 
                fontWeight: 600, 
                color: 'text.secondary',
                fontSize: '0.875rem',
                py: 1.5
              }}>
                Phone
              </TableCell>
              <TableCell sx={{ 
                fontWeight: 600, 
                color: 'text.secondary',
                fontSize: '0.875rem',
                py: 1.5
              }}>
                Tags
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow 
                key={contact.id}
                hover
                onClick={() => onContactClick?.(contact)}
                sx={{ 
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'action.hover'
                  }
                }}
              >
                <TableCell sx={{ py: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar 
                      src={contact.avatar} 
                      sx={{ 
                        width: 32, 
                        height: 32,
                        bgcolor: !contact.avatar ? theme.palette.primary.main : undefined,
                        fontSize: '0.875rem'
                      }}
                    >
                      {!contact.avatar && getInitials(contact.name)}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                        {contact.name}
                      </Typography>
                      {contact.title && (
                        <Typography variant="caption" color="text.secondary">
                          {contact.title}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ py: 1 }}>
                  <Typography variant="body2" color="text.primary">
                    {contact.company}
                  </Typography>
                </TableCell>
                <TableCell sx={{ py: 1 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: theme.palette.primary.main,
                      textDecoration: 'none'
                    }}
                    component="a"
                    href={`mailto:${contact.email}`}
                  >
                    {contact.email}
                  </Typography>
                </TableCell>
                <TableCell sx={{ py: 1 }}>
                  <Typography variant="body2" color="text.primary">
                    {contact.phone}
                  </Typography>
                </TableCell>
                <TableCell sx={{ py: 1 }}>
                  <Stack direction="row" spacing={1}>
                    {contact.tags?.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: tag === 'VIP' ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                          color: tag === 'VIP' ? theme.palette.primary.main : 'text.primary',
                          border: tag !== 'VIP' ? 1 : 0,
                          borderColor: 'divider',
                          borderRadius: '4px',
                          height: 24,
                          '& .MuiChip-label': {
                            px: 1,
                            py: 0.5,
                            fontSize: '0.75rem',
                          }
                        }}
                      />
                    ))}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination section */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        p: 2,
        borderTop: 1,
        borderColor: 'divider'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, totalItems)} of many`}
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton 
              size="small" 
              disabled={currentPage === 1}
              onClick={() => onPageChange?.(currentPage - 1)}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton 
              size="small" 
              disabled={currentPage * itemsPerPage >= totalItems}
              onClick={() => onPageChange?.(currentPage + 1)}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactsGrid; 