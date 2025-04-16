import React, { useState, useRef, DragEvent } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { formatFileSize } from '../utils/fileUtils';

const DropZone = styled(Box)(({ theme }) => ({
  border: `1px dashed ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
  },
}));

const FileItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  backgroundColor: theme.palette.grey[50],
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(1),
}));

export interface AttachmentsProps {
  onFilesSelected: (files: File[]) => void;
  onFileRemove?: (file: File) => void;
  files?: File[];
  maxFileSize?: number; // in bytes
}

export const Attachments: React.FC<AttachmentsProps> = ({
  onFilesSelected,
  onFileRemove,
  files = [],
  maxFileSize = 50 * 1024 * 1024, // 50MB default
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(file => file.size <= maxFileSize);
    
    if (validFiles.length > 0) {
      onFilesSelected(validFiles);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const validFiles = selectedFiles.filter(file => file.size <= maxFileSize);
      
      if (validFiles.length > 0) {
        onFilesSelected(validFiles);
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Attachments
      </Typography>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        multiple
      />

      <DropZone
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        sx={{
          backgroundColor: isDragging ? 'grey.100' : 'background.paper',
        }}
      >
        <Typography>
          Drag files here or <span style={{ color: '#1976d2' }}>click to browse</span>.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Individual file size limit is {formatFileSize(maxFileSize)}
        </Typography>
      </DropZone>

      {files.map((file, index) => (
        <FileItem key={`${file.name}-${index}`}>
          <InsertDriveFileIcon sx={{ mr: 1 }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2" noWrap>
              {file.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {formatFileSize(file.size)}
            </Typography>
          </Box>
          {onFileRemove && (
            <IconButton
              size="small"
              onClick={() => onFileRemove(file)}
              sx={{ ml: 1 }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
        </FileItem>
      ))}
    </Box>
  );
}; 