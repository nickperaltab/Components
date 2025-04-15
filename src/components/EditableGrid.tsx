import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  styled,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  maxHeight: '500px',
  '& .MuiTableCell-root': {
    padding: '8px 16px',
  },
  '& .MuiTableCell-head': {
    backgroundColor: theme.palette.grey[50],
    fontWeight: 600,
  },
}));

export interface Column {
  field: string;
  headerName: string;
  width?: number;
  editable?: boolean;
  type?: 'text' | 'number' | 'select';
  options?: string[];
}

export interface Row {
  id: string | number;
  [key: string]: any;
}

interface EditableGridProps {
  columns: Column[];
  rows: Row[];
  onRowUpdate?: (newRow: Row) => void;
  onRowDelete?: (id: string | number) => void;
  isReadOnly?: boolean;
}

export const EditableGrid: React.FC<EditableGridProps> = ({
  columns,
  rows,
  onRowUpdate,
  onRowDelete,
  isReadOnly = false,
}) => {
  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [editedRow, setEditedRow] = useState<Row | null>(null);

  const handleEditClick = (row: Row) => {
    setEditingId(row.id);
    setEditedRow({ ...row });
  };

  const handleSaveClick = () => {
    if (editedRow && onRowUpdate) {
      onRowUpdate(editedRow);
    }
    setEditingId(null);
    setEditedRow(null);
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setEditedRow(null);
  };

  const handleFieldChange = (field: string, value: any) => {
    if (editedRow) {
      setEditedRow({ ...editedRow, [field]: value });
    }
  };

  const renderCell = (row: Row, column: Column) => {
    const isEditing = row.id === editingId;
    const value = row[column.field];

    if (isEditing && column.editable) {
      if (column.type === 'select' && column.options) {
        return (
          <select
            value={editedRow?.[column.field] || ''}
            onChange={(e) => handleFieldChange(column.field, e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          >
            {column.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      }
      return (
        <TextField
          fullWidth
          size="small"
          value={editedRow?.[column.field] || ''}
          onChange={(e) => handleFieldChange(column.field, e.target.value)}
          type={column.type || 'text'}
        />
      );
    }
    return value;
  };

  return (
    <Paper>
      <StyledTableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  style={{ width: column.width }}
                >
                  {column.headerName}
                </TableCell>
              ))}
              {!isReadOnly && <TableCell align="right">Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={`${row.id}-${column.field}`}>
                    {renderCell(row, column)}
                  </TableCell>
                ))}
                {!isReadOnly && (
                  <TableCell align="right">
                    {row.id === editingId ? (
                      <>
                        <IconButton
                          size="small"
                          onClick={handleSaveClick}
                          color="primary"
                        >
                          <SaveIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={handleCancelClick}
                          color="default"
                        >
                          <CancelIcon />
                        </IconButton>
                      </>
                    ) : (
                      <>
                        <IconButton
                          size="small"
                          onClick={() => handleEditClick(row)}
                          color="primary"
                        >
                          <EditIcon />
                        </IconButton>
                        {onRowDelete && (
                          <IconButton
                            size="small"
                            onClick={() => onRowDelete(row.id)}
                            color="error"
                          >
                            <DeleteIcon />
                          </IconButton>
                        )}
                      </>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Paper>
  );
}; 