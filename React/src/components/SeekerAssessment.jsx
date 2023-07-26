import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import './SeekerAssessment.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import kaniniLogo from '../assets/formlogo.png'
import dayjs from 'dayjs';
import Modal from '@mui/material/Modal';
import successGif from '../assets/Sent Successfully.gif'
import copy from "copy-to-clipboard";


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 580,
  height:280,
  bgcolor: 'background.paper',
  borderRadius:"15px",
  boxShadow: 24,
  p: 4,
};

const today = dayjs();
const ITEM_HEIGHT = 58;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 540,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const SeekerAssessment = ({ onClose }) => {
  const [state, setState] = React.useState({
    right: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'left' ? 'auto' : 620,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List></List>
    </Box>
  );

  const [chips, setChips] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [inputValue1,] = React.useState('');
  const [isInputActive, setIsInputActive] = React.useState(false);
  const [isInputActive1, setIsInputActive1] = React.useState(false);

  const handleAddChip = () => {
    if (inputValue.trim() !== '') {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        // Invalid email, handle accordingly (e.g., show an error message)
        console.log('Invalid email');
        return;
      }
      console.log(inputValue);
      const trimmedLabel = inputValue.split('@')[0].trim();
      const newChip = {
        id: Date.now(),
        label: trimmedLabel,
        imageUrl: '/static/images/avatar/1.jpg',
      };
      setChips((prevChips) => [...prevChips, newChip]);
      setInputValue('');
    }
  };

  const handleDeleteChip = (chipId) => {
    setChips((prevChips) => prevChips.filter((chip) => chip.id !== chipId));
  };

  const handleInputMouseDown = () => {
    setIsInputActive(true);
  };

  const handleInputBlur = () => {
    setIsInputActive(true);
  };

  const handleInputMouseDown1 = () => {
    setIsInputActive1(true);
  };
  const handleInputBlur1 = () => {
    setIsInputActive1(true);
  };

  const [department, setDepartment] = React.useState('');
  const [isTextFieldClicked, setIsTextFieldClicked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleTextFieldClick = (event) => {
    event.stopPropagation();
    setIsTextFieldClicked(true);
  };

  const handleClick = (event) => {
    event.stopPropagation();
    setIsTextFieldClicked(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeptAdd = () => {
    // Perform the logic for adding the department here
    console.log('Adding department:', department);
    setDepartment(''); // Clear the text field after adding the department
  };

  const [topicName, setTopicName] = React.useState([]);
  const [newTopicName, setNewTopicName] = React.useState('');
  const [removeSelected, setRemoveSelected] = React.useState(false)

  const handleTopicChange = (event) => {
    const {
      target: { value },
    } = event;
    setTopicName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleNewTopicNameChange = (event) => {
    setNewTopicName(event.target.value);
  };

  const handleAddTopicName = () => {
    if (newTopicName.trim() !== '') {
      setTopicName((prevNames) => [...prevNames, newTopicName]);
      setNewTopicName('');
      console.log(newTopicName);
    }
  };
  const renderValue = (selected) => {
    if (selected.length === 0) {
      return 'Select';
    }

    if (selected.length <= 2) {
      return selected.join(', ');
    }

    return `${selected.slice(0, 2).join(', ')} & ${selected.length - 2} more  (${selected.length})`;
  };
  const handleCloseTopic = () => {
    setTopicName([]); // Clear the selected topics
  };

  const handleApplyTopic = () => {
    // Perform any desired actions with the selected topics
    // You can access the selected topics using the 'topicName' state variable
  
    // Example: Log the selected topics to the console
    console.log(topicName);
    setRemoveSelected(false)
  };

  const [modalopen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  
    const [copyText, setCopyText] = React.useState('');
 
    const handleCopyText = (e) => {
        setCopyText(e.target.value);
    }
 
    const copyToClipboard = () => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
    }
    
  return (
    <div className='drawerForm'>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={onClose}
            onOpen={toggleDrawer(anchor, true)}
            sx={{
              
              '& .MuiBackdrop-root.MuiModal-backdrop': {
                backgroundColor: '#143b6f48',

              },
            }}
          >
            {list(anchor)}
            <form className="seekerForm">
              <div className="formHead">
                <div>
                  <h2 className="createHead">Create Jobseeker Assessment</h2>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="closeImg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    onClick={onClose}
                  >
                    <path
                      d="M16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2ZM16 14.302L12.748 11.05C12.5228 10.8248 12.2174 10.6983 11.899 10.6983C11.5806 10.6983 11.2752 10.8248 11.05 11.05C10.8248 11.2752 10.6983 11.5806 10.6983 11.899C10.6983 12.2174 10.8248 12.5228 11.05 12.748L14.302 16L11.05 19.252C10.9385 19.3635 10.8501 19.4959 10.7897 19.6415C10.7294 19.7872 10.6983 19.9433 10.6983 20.101C10.6983 20.2587 10.7294 20.4148 10.7897 20.5605C10.8501 20.7061 10.9385 20.8385 11.05 20.95C11.1615 21.0615 11.2939 21.1499 11.4395 21.2103C11.5852 21.2706 11.7413 21.3017 11.899 21.3017C12.0567 21.3017 12.2128 21.2706 12.3585 21.2103C12.5041 21.1499 12.6365 21.0615 12.748 20.95L16 17.698L19.252 20.95C19.3635 21.0615 19.4959 21.1499 19.6415 21.2103C19.7872 21.2706 19.9433 21.3017 20.101 21.3017C20.2587 21.3017 20.4148 21.2706 20.5605 21.2103C20.7061 21.1499 20.8385 21.0615 20.95 20.95C21.0615 20.8385 21.1499 20.7061 21.2103 20.5605C21.2706 20.4148 21.3017 20.2587 21.3017 20.101C21.3017 19.9433 21.2706 19.7872 21.2103 19.6415C21.1499 19.4959 21.0615 19.3635 20.95 19.252L17.698 16L20.95 12.748C21.0615 12.6365 21.1499 12.5041 21.2103 12.3585C21.2706 12.2128 21.3017 12.0567 21.3017 11.899C21.3017 11.7413 21.2706 11.5852 21.2103 11.4395C21.1499 11.2939 21.0615 11.1615 20.95 11.05C20.8385 10.9385 20.7061 10.8501 20.5605 10.7897C20.4148 10.7294 20.2587 10.6983 20.101 10.6983C19.9433 10.6983 19.7872 10.7294 19.6415 10.7897C19.4959 10.8501 19.3635 10.9385 19.252 11.05L16 14.302Z"
                      fill="#242D35"
                    />
                  </svg>
                </div>
              </div>
              <br />
              <Stack direction="column" spacing={1}>
                <TextField
                  className="seekerEmail"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddChip();
                    }
                  }}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {chips.map((chip) => (
                          <Chip
                            key={chip.id}
                            avatar={<Avatar alt="Avatar" src={chip.value} />}
                            label={chip.label}
                            variant="outlined"
                            onDelete={() => handleDeleteChip(chip.id)}
                          />
                        ))}
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: isInputActive || inputValue.trim() !== '',
                  }}
                  onMouseDown={handleInputMouseDown}
                  onBlur={handleInputBlur}
                  label={!isInputActive ? 'Enter Jobseeker Mail ID' : 'Email ID'}
                  onClick={handleTextFieldClick}
                />
              </Stack>
              <br />
              <h2 className="assessmentHead">Assessment Detail</h2>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="assessmentId"
                onMouseDown={handleInputMouseDown1}
                onBlur={handleInputBlur1}
                label={!isInputActive1 ? 'Add Assessment ID' : 'Assessment ID'}
                InputLabelProps={{
                  shrink: isInputActive1 || inputValue1.trim() !== '',
                }}
              />
              <p className="assessmentIdPara">
                Please enter the title of employee assessment that helps you manage.
              </p>
              
              <Box sx={{ minWidth: 120 }}>
                <FormControl className="departmentBox">
                  <InputLabel id="demo-simple-select-label">Department</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={department}
                    label="Department"
                    onChange={handleChange}
                    open={open}
                    onOpen={handleOpen}
                    onClose={handleClose}
                    
                  >
                    <MenuItem>
                      <TextField
                        sx={{ width: '100%', border: 'none', '& .MuiInputBase-input.MuiOutlinedInput-input': { padding: '10px 10px', color: '#1589CC' } }}
                        placeholder="+ Enter new department"
                        value={department}
                        onChange={handleChange}
                        onClick={handleClick}
                        InputProps={{
                          endAdornment: (
                            <>
                              {isTextFieldClicked && department && (
                                <Button variant="text" onClick={handleDeptAdd}>
                                  Add
                                </Button>
                              )}
                            </>
                          ),
                        }}
                        onFocus={(e) => e.stopPropagation()} // Prevent closing when clicking on TextField
                      />
                    </MenuItem>
                    <MenuItem value="Data Architect">Data Architect</MenuItem>
                    <MenuItem value="UI/UX Designer">UI/UX Designer</MenuItem>
                    <MenuItem value="Java Developer">Java Developer</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <h3 className='selectLevel'>Select Levels</h3>
              <FormControl>
                <RadioGroup row>
                  <FormControlLabel
                    value="Beginner"
                    control={<Radio color="default" />}
                    label={
                      <React.Fragment>
                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="6" viewBox="0 0 3 6" fill="none">
                        <path d="M1.5 6C1.08333 6 0.729334 5.854 0.438 5.562C0.146 5.27067 0 4.91667 0 4.5V1.5C0 1.08333 0.146 0.729333 0.438 0.438C0.729334 0.146 1.08333 0 1.5 0C1.91667 0 2.27067 0.146 2.562 0.438C2.854 0.729333 3 1.08333 3 1.5V4.5C3 4.91667 2.854 5.27067 2.562 5.562C2.27067 5.854 1.91667 6 1.5 6Z" fill="#0C1116"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="4 0 15 16" fill="none">
                          <path d="M13.5 16C13.0833 16 12.7293 15.854 12.438 15.562C12.146 15.2707 12 14.9167 12 14.5V1.5C12 1.08333 12.146 0.729334 12.438 0.438C12.7293 0.146 13.0833 0 13.5 0C13.9167 0 14.2707 0.146 14.562 0.438C14.854 0.729334 15 1.08333 15 1.5V14.5C15 14.9167 14.854 15.2707 14.562 15.562C14.2707 15.854 13.9167 16 13.5 16ZM1.5 16C1.3 16 1.10833 15.9623 0.925 15.887C0.741667 15.8123 0.579334 15.704 0.438 15.562C0.296 15.4207 0.187667 15.2583 0.113 15.075C0.0376666 14.8917 0 14.7 0 14.5V11.5C0 11.0833 0.146 10.7293 0.438 10.438C0.729334 10.146 1.08333 10 1.5 10C1.91667 10 2.27067 10.146 2.562 10.438C2.854 10.7293 3 11.0833 3 11.5V14.5C3 14.7 2.96267 14.8917 2.888 15.075C2.81267 15.2583 2.704 15.4207 2.562 15.562C2.42067 15.704 2.25833 15.8123 2.075 15.887C1.89167 15.9623 1.7 16 1.5 16ZM7.5 16C7.08333 16 6.72933 15.854 6.438 15.562C6.146 15.2707 6 14.9167 6 14.5V6.5C6 6.08333 6.146 5.72933 6.438 5.438C6.72933 5.146 7.08333 5 7.5 5C7.91667 5 8.27067 5.146 8.562 5.438C8.854 5.72933 9 6.08333 9 6.5V14.5C9 14.9167 8.854 15.2707 8.562 15.562C8.27067 15.854 7.91667 16 7.5 16Z" fill="#A8B0B9"/>
                        </svg>&nbsp;
                        Beginner
                      </React.Fragment>
                      
                    }
                    labelPlacement='start'
                  />
                  <FormControlLabel
                    value="Intermediate"
                    control={<Radio color="default" />}
                    sx={{ marginRight: '30px',marginLeft: '30px' }}
                    label={
                      <React.Fragment>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
                          <path d="M1.5 11C1.08333 11 0.729334 10.854 0.438 10.562C0.146 10.2707 0 9.91667 0 9.5V6.5C0 6.08333 0.146 5.72933 0.438 5.438C0.729334 5.146 1.08333 5 1.5 5C1.91667 5 2.27067 5.146 2.562 5.438C2.854 5.72933 3 6.08333 3 6.5V9.5C3 9.91667 2.854 10.2707 2.562 10.562C2.27067 10.854 1.91667 11 1.5 11ZM7.5 11C7.08333 11 6.72933 10.854 6.438 10.562C6.146 10.2707 6 9.91667 6 9.5V1.5C6 1.08333 6.146 0.729333 6.438 0.438C6.72933 0.146 7.08333 0 7.5 0C7.91667 0 8.27067 0.146 8.562 0.438C8.854 0.729333 9 1.08333 9 1.5V9.5C9 9.91667 8.854 10.2707 8.562 10.562C8.27067 10.854 7.91667 11 7.5 11Z" fill="#0C1116"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="9 0 15 16" fill="none">
                          <path d="M13.5 16C13.0833 16 12.7293 15.854 12.438 15.562C12.146 15.2707 12 14.9167 12 14.5V1.5C12 1.08333 12.146 0.729334 12.438 0.438C12.7293 0.146 13.0833 0 13.5 0C13.9167 0 14.2707 0.146 14.562 0.438C14.854 0.729334 15 1.08333 15 1.5V14.5C15 14.9167 14.854 15.2707 14.562 15.562C14.2707 15.854 13.9167 16 13.5 16ZM1.5 16C1.3 16 1.10833 15.9623 0.925 15.887C0.741667 15.8123 0.579334 15.704 0.438 15.562C0.296 15.4207 0.187667 15.2583 0.113 15.075C0.0376666 14.8917 0 14.7 0 14.5V11.5C0 11.0833 0.146 10.7293 0.438 10.438C0.729334 10.146 1.08333 10 1.5 10C1.91667 10 2.27067 10.146 2.562 10.438C2.854 10.7293 3 11.0833 3 11.5V14.5C3 14.7 2.96267 14.8917 2.888 15.075C2.81267 15.2583 2.704 15.4207 2.562 15.562C2.42067 15.704 2.25833 15.8123 2.075 15.887C1.89167 15.9623 1.7 16 1.5 16ZM7.5 16C7.08333 16 6.72933 15.854 6.438 15.562C6.146 15.2707 6 14.9167 6 14.5V6.5C6 6.08333 6.146 5.72933 6.438 5.438C6.72933 5.146 7.08333 5 7.5 5C7.91667 5 8.27067 5.146 8.562 5.438C8.854 5.72933 9 6.08333 9 6.5V14.5C9 14.9167 8.854 15.2707 8.562 15.562C8.27067 15.854 7.91667 16 7.5 16Z" fill="#A8B0B9"/>
                        </svg>
                        Intermediate
                      </React.Fragment>
                    }
                    labelPlacement='start'
                  />
                  <FormControlLabel
                    value="Advanced"
                    control={<Radio color="default" />}
                    label={
                      <React.Fragment>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                          <path d="M13.5 16C13.0833 16 12.7293 15.854 12.438 15.562C12.146 15.2707 12 14.9167 12 14.5V1.5C12 1.08333 12.146 0.729334 12.438 0.438C12.7293 0.146 13.0833 0 13.5 0C13.9167 0 14.2707 0.146 14.562 0.438C14.854 0.729334 15 1.08333 15 1.5V14.5C15 14.9167 14.854 15.2707 14.562 15.562C14.2707 15.854 13.9167 16 13.5 16ZM1.5 16C1.3 16 1.10833 15.9623 0.925 15.887C0.741667 15.8123 0.579334 15.704 0.438 15.562C0.296 15.4207 0.187667 15.2583 0.113 15.075C0.0376666 14.8917 0 14.7 0 14.5V11.5C0 11.0833 0.146 10.7293 0.438 10.438C0.729334 10.146 1.08333 10 1.5 10C1.91667 10 2.27067 10.146 2.562 10.438C2.854 10.7293 3 11.0833 3 11.5V14.5C3 14.7 2.96267 14.8917 2.888 15.075C2.81267 15.2583 2.704 15.4207 2.562 15.562C2.42067 15.704 2.25833 15.8123 2.075 15.887C1.89167 15.9623 1.7 16 1.5 16ZM7.5 16C7.08333 16 6.72933 15.854 6.438 15.562C6.146 15.2707 6 14.9167 6 14.5V6.5C6 6.08333 6.146 5.72933 6.438 5.438C6.72933 5.146 7.08333 5 7.5 5C7.91667 5 8.27067 5.146 8.562 5.438C8.854 5.72933 9 6.08333 9 6.5V14.5C9 14.9167 8.854 15.2707 8.562 15.562C8.27067 15.854 7.91667 16 7.5 16Z" fill="#0C1116"/>
                        </svg>&nbsp;
                        Advanced
                      </React.Fragment>
                    }
                    labelPlacement='start'
                  />
                </RadioGroup>
              </FormControl>
              <div>
                <FormControl sx={{ m: 1, width: 540 }}>
                  <InputLabel id="demo-multiple-checkbox-label">Topics</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={topicName}
                    onChange={handleTopicChange}
                    input={<OutlinedInput label="Topics" />}
                    renderValue={renderValue}
                    open={removeSelected}
                    onOpen={() => setRemoveSelected(true)}
                    onClose={() => setRemoveSelected(false)}
                    MenuProps={{MenuProps,
                      PaperProps: {
                        style: { maxHeight: 300 },
                      },
                      MenuListProps: {
                        style: { padding: 0 },
                      },
                      classes: {
                        paper: 'custom-scrollbar',
                      },
                    }}
                  >
                    <MenuItem value=''> 
                      <TextField
                        sx={{ width: '100%', border: 'none', '& .MuiInputBase-input.MuiOutlinedInput-input': { padding: '10px 15px', color: '#1589CC' } }}
                        value={newTopicName}
                        onChange={handleNewTopicNameChange}
                        placeholder="+ Enter new topic"
                        variant="outlined"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {newTopicName.trim() !== '' && (
                                <Button variant="text" onClick={handleAddTopicName}>
                                  Add
                                </Button>
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </MenuItem>
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={topicName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                    <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              padding: '8px',
                            }}
                          >
                            <Button onClick={handleCloseTopic}>Clear All</Button>
                            <Button onClick={handleApplyTopic}>Apply</Button>
                          </Box>
                  </Select>
                </FormControl>
              </div>
              <br />
              <div className='divideBox'>
                <div>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '260px' },
                  }}
                  Validate
                  autoComplete="off"
                >
                  <TextField id="outlined-basic" label="No.ofQuestions" variant="outlined" />
                  
                </Box>
                <p className='questionsPara'>Time alloted for a question is 90 sec.</p>
               
                </div>
                <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Date of completion" 
                    minDate={today}
                    sx={{width:275}}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <p className='datePara'>Valid till 11:59PM on the selected date</p>
                </div>
              </div>
              <Box
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '540px' },
                }}
              >
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={3}
              />
              </Box>
              <br />
              <div className='mailButtons'>
              <Stack spacing={2} direction="row">
                <Button className='cancelButton'onClick={onClose} variant="text">Cancel</Button>
                <div>
                <Button className='sendButton' variant="outlined" onClick={handleModalOpen}>Send Mail</Button>
                
                </div>
              </Stack>
              </div>
            </form>
            <img src={kaniniLogo} className='formLogo' height='240px' width='240px' alt="Kanini Logo" />
          </SwipeableDrawer>
        </React.Fragment>
      ))}
      <div>
      <Modal
        open={modalopen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
        <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="closeIcon"
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    onClick={onClose}
                  >
                    <path
                      d="M16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2ZM16 14.302L12.748 11.05C12.5228 10.8248 12.2174 10.6983 11.899 10.6983C11.5806 10.6983 11.2752 10.8248 11.05 11.05C10.8248 11.2752 10.6983 11.5806 10.6983 11.899C10.6983 12.2174 10.8248 12.5228 11.05 12.748L14.302 16L11.05 19.252C10.9385 19.3635 10.8501 19.4959 10.7897 19.6415C10.7294 19.7872 10.6983 19.9433 10.6983 20.101C10.6983 20.2587 10.7294 20.4148 10.7897 20.5605C10.8501 20.7061 10.9385 20.8385 11.05 20.95C11.1615 21.0615 11.2939 21.1499 11.4395 21.2103C11.5852 21.2706 11.7413 21.3017 11.899 21.3017C12.0567 21.3017 12.2128 21.2706 12.3585 21.2103C12.5041 21.1499 12.6365 21.0615 12.748 20.95L16 17.698L19.252 20.95C19.3635 21.0615 19.4959 21.1499 19.6415 21.2103C19.7872 21.2706 19.9433 21.3017 20.101 21.3017C20.2587 21.3017 20.4148 21.2706 20.5605 21.2103C20.7061 21.1499 20.8385 21.0615 20.95 20.95C21.0615 20.8385 21.1499 20.7061 21.2103 20.5605C21.2706 20.4148 21.3017 20.2587 21.3017 20.101C21.3017 19.9433 21.2706 19.7872 21.2103 19.6415C21.1499 19.4959 21.0615 19.3635 20.95 19.252L17.698 16L20.95 12.748C21.0615 12.6365 21.1499 12.5041 21.2103 12.3585C21.2706 12.2128 21.3017 12.0567 21.3017 11.899C21.3017 11.7413 21.2706 11.5852 21.2103 11.4395C21.1499 11.2939 21.0615 11.1615 20.95 11.05C20.8385 10.9385 20.7061 10.8501 20.5605 10.7897C20.4148 10.7294 20.2587 10.6983 20.101 10.6983C19.9433 10.6983 19.7872 10.7294 19.6415 10.7897C19.4959 10.8501 19.3635 10.9385 19.252 11.05L16 14.302Z"
                      fill="#717D8A"
                    />
                  </svg>
                </div>
         <img src={successGif} className='successGIF' alt="Sent Successfully" height='120px' width='120px' />
         <h1 className='modalHeading'>Assessment assigned Successfully</h1>
         <p className='modalPara'>The jobseeker assessment has been successfully sent through their respectful email id</p>
        <div className="linkBox">
          <div className='linkField'>
          <TextField id="outlined-basic" label="Assessment link" variant="outlined"  
          sx={{width:'380px'}}
          value={copyText}
          onChange={handleCopyText}
          />
          </div>
          <div className='copyButton'>
          <Button variant="outlined" onClick={copyToClipboard}
          sx={{padding:1.7,color:'#717D8A',borderColor:'#717D8A',textTransform:'none'}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
            <path d="M1.5 20C1.1 20 0.75 19.85 0.45 19.55C0.15 19.25 0 18.9 0 18.5V3.425H1.5V18.5H13.35V20H1.5ZM4.5 17C4.1 17 3.75 16.85 3.45 16.55C3.15 16.25 3 15.9 3 15.5V1.5C3 1.1 3.15 0.75 3.45 0.45C3.75 0.15 4.1 0 4.5 0H15.5C15.9 0 16.25 0.15 16.55 0.45C16.85 0.75 17 1.1 17 1.5V15.5C17 15.9 16.85 16.25 16.55 16.55C16.25 16.85 15.9 17 15.5 17H4.5ZM4.5 15.5H15.5V1.5H4.5V15.5ZM4.5 15.5V1.5V15.5Z" fill="#717D8A"/>
            </svg>&nbsp;
          Copy Link</Button>
          </div>
        </div> 
        </Box>
      </Modal>
    </div>
    </div>
  );
};

export default SeekerAssessment;
