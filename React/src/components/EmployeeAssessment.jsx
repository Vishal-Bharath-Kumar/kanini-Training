import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import kaniniLogo from '../assets/formlogo.png';
import Drawer from '@mui/material/Drawer';
import '../AssessmentHistory/EmployeeAssessment.css';
import { useState, useEffect } from 'react';



const ITEM_HEIGHT = 58;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: '654px',
        },
    },
};

const EmployeeAssessment = ({ onClose }) => {

    const [getAllDept, setNewDept] = useState([]);
    const [getAllEmp, setNewEmp] = useState([]);
    const [department, setDepartment] = React.useState('');//getting name of dept and pass to get topics in it
    const [TopicName, setTopicName] = React.useState([]);//store the topics from dept
    const [state, setState] = React.useState({
        right: true,
    });
    const [formValues, setFormValues] = useState({
        userId: '',
        assessmentId: '',
        numberOfTopics: 0,
        numberOfQuestions: 0,
        totalTime: 0,
        dateOfCreation: '',
        dateOfCompletion: '',
        description: '',
        assessmentHistoryId: null
    });
    const currentDate = new Date().toISOString().slice(0, 10);
    const [questionNo, setQuestionNo] = useState('');
    const [description, setDescription] = useState('');
    const [assessmentId, setAssessmentId] = useState('');
    const [topicNumber, setTopicNumber] = useState('');
    const [formValuesList, setFormValuesList] = useState([]);
    const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);//id of selected employee





    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'left' ? 'auto' : 750,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, true)}
        >
            <List></List>
        </Box>
    );
    const [isInputActive2, setIsInputActive2] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const handleInputMouseDown2 = () => {
        setIsInputActive2(true);
    };
    const handleInputBlur2 = () => {
        setIsInputActive2(true);
    };

    const [isTextFieldClicked, setIsTextFieldClicked] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    //getting the name of department selected
    const handleChange = (event) => {
        setDepartment(event.target.value);
        console.log('department');
        //api call
        const url = `https://localhost:7281/HistoryTable/GetTopicsByDepartment?deptlist=${event.target.value}`;
        fetch(url, {
            method: "GET",
        })
            .then(async (data) => {
                const myData = await data.json();
                console.log(myData);
                setTopicName(myData);
                console.log(TopicName);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    };

    useEffect(() => {
        if (Object.keys(department).length > 0) {
            console.log(department);
        }
    }, [department]);

    const handleChangeAddNewDept = (event) => {
        console.log("new dwpt:" + event.target.value)
    }



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

    const handleAdd = () => {
        // Perform the logic for adding the department here
        console.log('Adding department:', department);
    };
    const [personName, setPersonName] = React.useState([]);

    const handlePersonChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );

        const selectedNames = Array.isArray(value) ? value : [value]; // Convert value to an array if it's a single value
        console.log('sn:', selectedNames)
        const selectedIds = selectedNames.map((name) => {
            console.log(name);
            // Assuming `getAllEmp` contains objects with `firstName` and `lastName` properties
            // const fullName = name.replace(/\s+/g, ' ').trim(); // Ensure the name has consistent spacing
            const employee = getAllEmp.find(
                (emp) => emp.name === name
            );
            console.log('check:', employee)

            if (employee) {
                console.log('if', employee.empId)
                return employee.empId;
            } else {
                return null; // Handle the case when the employee is not found
            }
        });

        setSelectedEmployeeIds(selectedIds);

    };
    const renderValue = (selected) => {
        if (selected.length === 0) {
            return 'Select';
        }

        if (selected.length <= 2) {
            return selected.join(', ');
        }
        setTopicNumber(selected);
        return `${selected.slice(0, 2).join(', ')} & ${selected.length - 2} more (${selected.length})`;
    };

    const [TopicNameComma, setTopicNameComma] = useState([]);
    const [removeSelected, setRemoveSelected] = useState(false)
    const [removeSelected2, setRemoveSelected2] = useState(false)
    const handleTopicChange = (event) => {
        const {
            target: { value },
        } = event;
        setTopicNameComma(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    //Topic
    const handleApplyTopic = () => {
        setRemoveSelected(false)
    }

    const handleCloseTopic = () => {
        setTopicNameComma([])
        setRemoveSelected(false)
    }
    //Employee
    const handleApplyEmp = () => {
        setRemoveSelected2(false)
    }

    const handleCloseEmp = () => {
        setPersonName([])
        setRemoveSelected2(false)
    }

    // const handleNewTopicNameChange = (event) => {
    //     setNewTopicName(event.target.value);
    // };

    // const handleAddTopicName = () => {
    //     if (newTopicName.trim() !== '') {
    //         setTopicName((prevNames) => [...prevNames, newTopicName]);
    //         setNewTopicName('');
    //         console.log(newTopicName)
    //     }
    // };

    //fetch department

    const fetchDepartment = () => {
        fetch(`https://localhost:7281/HistoryTable/GetAllDepartment`, {
            method: "GET"
        })
            .then(async (data) => {
                const myData = await data.json();
                console.log(myData);
                setNewDept(myData)
                console.log(getAllDept);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }

    useEffect(() => {
        fetchDepartment();
    }, []);

    //get all employee

    const fetchEmployee = () => {
        fetch(`https://localhost:7281/HistoryTable/HistoryDetails?roleName=Employee`, {
            method: "GET"
        })
            .then(async (data) => {
                const myData = await data.json();
                console.log(myData);
                setNewEmp(myData)
                console.log(getAllEmp);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }

    useEffect(() => {
        fetchEmployee();
    }, []);

    // Post Assessment

    const [updateDateValue, setUpdateDateValue] = useState('')

    const postAssessment = () => {
        const updatedFormValuesList = [];
        for (let i = 0; i < selectedEmployeeIds.length; i++) {
            const id = selectedEmployeeIds[i];
            const formValues = {
                userId: id, // Use selectedEmployeeIds array to populate the userId
                assessmentId: assessmentId,
                numberOfTopics: TopicNameComma.length,
                numberOfQuestions: questionNo,
                totalTime: questionNo * 1.5,
                dateOfCreation: currentDate,
                dateOfCompletion: updateDateValue,
                description: description,
                assessmentHistoryId: null,
            };
            updatedFormValuesList.push(formValues);
        }

        setFormValuesList(updatedFormValuesList);
        console.log(formValuesList)

    }


    useEffect(() => {
        console.log("FormValuesList Updated: ", formValuesList);
        PostData()
    }, [formValuesList]);

    //Post through api for assessed to
    const PostData = () => {
        //POST
        for (let i = 0; i < formValuesList.length; i++) {
            fetch(`https://localhost:7281/HistoryTable/PostExistingAssessment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValuesList[i]),
            })
                .then(response => response.json())
                .then(data => {
                    console.log("Posted Successfully");

                })
                .catch(error => {
                    console.error('Error fetching topics:', error);
                });
        }
    }

    const handleDateChange = (newValue) => {
        setUpdateDateValue(dayjs(newValue).format('YYYY-MM-DD'));
    };

    const handleQuestionNoChange = (event) => {
        setQuestionNo(event.target.value);
    };

    const handleAssessmentChange = (event) => {
        setAssessmentId(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
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
                        <form className='employeeForm'>
                            <div className="formHead">
                                <div>
                                    <h2 className="createHead">Create Employee Assessment</h2>
                                </div>
                                <div className='crossleft'>
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

                            <TextField
                                helperText="Please enter the title of assessment that help you to manage"
                                id="outlined-basic"
                                variant="outlined"
                                className="assessmentId"
                                onMouseDown={handleInputMouseDown2}
                                onBlur={handleInputBlur2}
                                label={!isInputActive2 ? 'Enter Assessment ID' : 'Assessment ID'}
                                value={assessmentId}
                                onChange={handleAssessmentChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    margin: '0px 40px 0px 48px',
                                    maxWidth: '654px',
                                    height: '27px',
                                    marginBottom: '60px',
                                    marginTop: '36px',

                                    '& .MuiOutlinedInput-root': {
                                        width: '654px'
                                    }
                                }}
                            />

                            <Box sx={{ marginLeft: '48px', width: '654px', marginTop: '36px' }}>
                                <FormControl className="departmentBox">
                                    <InputLabel id="demo-simple-select-label" >Department</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={department}
                                        label="Department"
                                        onChange={handleChange}
                                        open={open}
                                        onOpen={handleOpen}
                                        onClose={handleClose}
                                        sx={{ width: '654px' }}
                                    >
                                        <MenuItem value="">
                                            <TextField
                                                sx={{ width: '100%', border: 'none', '& .MuiInputBase-input.MuiOutlinedInput-input': { padding: '0px 10px', color: '#1589CC' } }}
                                                placeholder="+ Enter new department"
                                                value={department}
                                                onChange={handleChangeAddNewDept}
                                                onClick={handleClick}
                                                InputProps={{
                                                    endAdornment: (
                                                        <>
                                                            {isTextFieldClicked && department && (
                                                                <Button variant="text" onClick={handleAdd}>
                                                                    Add
                                                                </Button>
                                                            )}
                                                        </>
                                                    ),
                                                }}
                                                onFocus={(e) => e.stopPropagation()} // Prevent closing when clicking on TextField
                                            />
                                        </MenuItem>
                                        {getAllDept.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name.departmentName}
                                                sx={{
                                                    width: '654px',
                                                    height: '22px'
                                                }}
                                            >
                                                {name.departmentName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>

                            <h3 className='selectLevel'>Select Levels</h3>
                            <FormControl>
                                <RadioGroup row sx={{ marginLeft: '48px', width: '654px' }}>
                                    <FormControlLabel
                                        value="Basic"
                                        control={<Radio color="default" />}
                                        label={
                                            <React.Fragment>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="6" viewBox="0 0 3 6" fill="none">
                                                    <path d="M1.5 6C1.08333 6 0.729334 5.854 0.438 5.562C0.146 5.27067 0 4.91667 0 4.5V1.5C0 1.08333 0.146 0.729333 0.438 0.438C0.729334 0.146 1.08333 0 1.5 0C1.91667 0 2.27067 0.146 2.562 0.438C2.854 0.729333 3 1.08333 3 1.5V4.5C3 4.91667 2.854 5.27067 2.562 5.562C2.27067 5.854 1.91667 6 1.5 6Z" fill="#0C1116" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="4 0 15 16" fill="none">
                                                    <path d="M13.5 16C13.0833 16 12.7293 15.854 12.438 15.562C12.146 15.2707 12 14.9167 12 14.5V1.5C12 1.08333 12.146 0.729334 12.438 0.438C12.7293 0.146 13.0833 0 13.5 0C13.9167 0 14.2707 0.146 14.562 0.438C14.854 0.729334 15 1.08333 15 1.5V14.5C15 14.9167 14.854 15.2707 14.562 15.562C14.2707 15.854 13.9167 16 13.5 16ZM1.5 16C1.3 16 1.10833 15.9623 0.925 15.887C0.741667 15.8123 0.579334 15.704 0.438 15.562C0.296 15.4207 0.187667 15.2583 0.113 15.075C0.0376666 14.8917 0 14.7 0 14.5V11.5C0 11.0833 0.146 10.7293 0.438 10.438C0.729334 10.146 1.08333 10 1.5 10C1.91667 10 2.27067 10.146 2.562 10.438C2.854 10.7293 3 11.0833 3 11.5V14.5C3 14.7 2.96267 14.8917 2.888 15.075C2.81267 15.2583 2.704 15.4207 2.562 15.562C2.42067 15.704 2.25833 15.8123 2.075 15.887C1.89167 15.9623 1.7 16 1.5 16ZM7.5 16C7.08333 16 6.72933 15.854 6.438 15.562C6.146 15.2707 6 14.9167 6 14.5V6.5C6 6.08333 6.146 5.72933 6.438 5.438C6.72933 5.146 7.08333 5 7.5 5C7.91667 5 8.27067 5.146 8.562 5.438C8.854 5.72933 9 6.08333 9 6.5V14.5C9 14.9167 8.854 15.2707 8.562 15.562C8.27067 15.854 7.91667 16 7.5 16Z" fill="#A8B0B9" />
                                                </svg>&nbsp;
                                                Basic
                                            </React.Fragment>
                                        }
                                        labelPlacement='start'
                                    />
                                    <FormControlLabel
                                        value="Intermediate"
                                        control={<Radio color="default" />}
                                        sx={{ marginRight: '20px', marginLeft: '50px' }}
                                        label={
                                            <React.Fragment>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
                                                    <path d="M1.5 11C1.08333 11 0.729334 10.854 0.438 10.562C0.146 10.2707 0 9.91667 0 9.5V6.5C0 6.08333 0.146 5.72933 0.438 5.438C0.729334 5.146 1.08333 5 1.5 5C1.91667 5 2.27067 5.146 2.562 5.438C2.854 5.72933 3 6.08333 3 6.5V9.5C3 9.91667 2.854 10.2707 2.562 10.562C2.27067 10.854 1.91667 11 1.5 11ZM7.5 11C7.08333 11 6.72933 10.854 6.438 10.562C6.146 10.2707 6 9.91667 6 9.5V1.5C6 1.08333 6.146 0.729333 6.438 0.438C6.72933 0.146 7.08333 0 7.5 0C7.91667 0 8.27067 0.146 8.562 0.438C8.854 0.729333 9 1.08333 9 1.5V9.5C9 9.91667 8.854 10.2707 8.562 10.562C8.27067 10.854 7.91667 11 7.5 11Z" fill="#0C1116" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="9 0 15 16" fill="none">
                                                    <path d="M13.5 16C13.0833 16 12.7293 15.854 12.438 15.562C12.146 15.2707 12 14.9167 12 14.5V1.5C12 1.08333 12.146 0.729334 12.438 0.438C12.7293 0.146 13.0833 0 13.5 0C13.9167 0 14.2707 0.146 14.562 0.438C14.854 0.729334 15 1.08333 15 1.5V14.5C15 14.9167 14.854 15.2707 14.562 15.562C14.2707 15.854 13.9167 16 13.5 16ZM1.5 16C1.3 16 1.10833 15.9623 0.925 15.887C0.741667 15.8123 0.579334 15.704 0.438 15.562C0.296 15.4207 0.187667 15.2583 0.113 15.075C0.0376666 14.8917 0 14.7 0 14.5V11.5C0 11.0833 0.146 10.7293 0.438 10.438C0.729334 10.146 1.08333 10 1.5 10C1.91667 10 2.27067 10.146 2.562 10.438C2.854 10.7293 3 11.0833 3 11.5V14.5C3 14.7 2.96267 14.8917 2.888 15.075C2.81267 15.2583 2.704 15.4207 2.562 15.562C2.42067 15.704 2.25833 15.8123 2.075 15.887C1.89167 15.9623 1.7 16 1.5 16ZM7.5 16C7.08333 16 6.72933 15.854 6.438 15.562C6.146 15.2707 6 14.9167 6 14.5V6.5C6 6.08333 6.146 5.72933 6.438 5.438C6.72933 5.146 7.08333 5 7.5 5C7.91667 5 8.27067 5.146 8.562 5.438C8.854 5.72933 9 6.08333 9 6.5V14.5C9 14.9167 8.854 15.2707 8.562 15.562C8.27067 15.854 7.91667 16 7.5 16Z" fill="#A8B0B9" />
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
                                                    <path d="M13.5 16C13.0833 16 12.7293 15.854 12.438 15.562C12.146 15.2707 12 14.9167 12 14.5V1.5C12 1.08333 12.146 0.729334 12.438 0.438C12.7293 0.146 13.0833 0 13.5 0C13.9167 0 14.2707 0.146 14.562 0.438C14.854 0.729334 15 1.08333 15 1.5V14.5C15 14.9167 14.854 15.2707 14.562 15.562C14.2707 15.854 13.9167 16 13.5 16ZM1.5 16C1.3 16 1.10833 15.9623 0.925 15.887C0.741667 15.8123 0.579334 15.704 0.438 15.562C0.296 15.4207 0.187667 15.2583 0.113 15.075C0.0376666 14.8917 0 14.7 0 14.5V11.5C0 11.0833 0.146 10.7293 0.438 10.438C0.729334 10.146 1.08333 10 1.5 10C1.91667 10 2.27067 10.146 2.562 10.438C2.854 10.7293 3 11.0833 3 11.5V14.5C3 14.7 2.96267 14.8917 2.888 15.075C2.81267 15.2583 2.704 15.4207 2.562 15.562C2.42067 15.704 2.25833 15.8123 2.075 15.887C1.89167 15.9623 1.7 16 1.5 16ZM7.5 16C7.08333 16 6.72933 15.854 6.438 15.562C6.146 15.2707 6 14.9167 6 14.5V6.5C6 6.08333 6.146 5.72933 6.438 5.438C6.72933 5.146 7.08333 5 7.5 5C7.91667 5 8.27067 5.146 8.562 5.438C8.854 5.72933 9 6.08333 9 6.5V14.5C9 14.9167 8.854 15.2707 8.562 15.562C8.27067 15.854 7.91667 16 7.5 16Z" fill="#0C1116" />
                                                </svg>&nbsp;
                                                Advanced
                                            </React.Fragment>
                                        }
                                        sx={{ marginRight: 'px', marginLeft: '20px' }}
                                        labelPlacement='start'
                                    />
                                    <FormControlLabel
                                        value="upskill"
                                        control={<Radio color="default" />}
                                        sx={{ marginRight: '0px', marginLeft: '50px' }}
                                        label={
                                            <React.Fragment>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                                    <path d="M4.3425 14.4L0 10.0575L4.3425 5.715L5.2875 6.66L2.565 9.3825H9.675V10.7325H2.565L5.2875 13.455L4.3425 14.4ZM13.6575 8.685L12.7125 7.74L15.435 5.0175H8.325V3.6675H15.435L12.7125 0.945L13.6575 0L18 4.3425L13.6575 8.685Z" fill="#0C1116" />
                                                </svg>&nbsp;
                                                upskill
                                            </React.Fragment>
                                        }
                                        labelPlacement='start'
                                    />
                                </RadioGroup>
                            </FormControl>

                            <div>
                                <FormControl sx={{ marginLeft: '48px', width: '654px', marginTop: '36px' }}>
                                    <InputLabel id="demo-multiple-checkbox-label">Employee profile</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple
                                        value={personName}
                                        onChange={handlePersonChange}
                                        open={removeSelected2}
                                        onOpen={() => setRemoveSelected2(true)}
                                        onClose={() => setRemoveSelected2(false)}
                                        input={<OutlinedInput label="Employee profile" />}
                                        renderValue={renderValue}
                                        MenuProps={MenuProps}
                                    >
                                        {getAllEmp.map((option) => (
                                            <MenuItem key={option.name} value={option.name}>
                                                <Checkbox checked={personName.indexOf(option.name) > -1} />
                                                <ListItemAvatar>
                                                    <div className='imageDiv'><img src={require(`../assets/${option.name}.jpg`)} className='image'></img></div>
                                                </ListItemAvatar>
                                                <ListItemText primary={option.name} />
                                            </MenuItem>
                                        ))}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                padding: '8px',
                                            }}
                                        >
                                            <Button onClick={handleCloseEmp}>Close</Button>
                                            <Button onClick={handleApplyEmp}>Apply</Button>
                                        </Box>
                                    </Select>

                                </FormControl>
                            </div>
                            <div>
                                <FormControl sx={{ marginLeft: '48px', width: '654px', marginTop: '36px' }}>
                                    <InputLabel id="demo-multiple-checkbox-label">Topics</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple
                                        value={TopicNameComma}
                                        onChange={handleTopicChange}
                                        open={removeSelected}
                                        onOpen={() => setRemoveSelected(true)}
                                        onClose={() => setRemoveSelected(false)}
                                        input={<OutlinedInput label="Topics" />}
                                        renderValue={renderValue}
                                        MenuProps={MenuProps}
                                    >
                                        <MenuItem>
                                            <TextField
                                                sx={{ width: '100%', border: 'none', '& .MuiInputBase-input.MuiOutlinedInput-input': { padding: '0px 15px', color: '#1589CC' } }}
                                                // value={newTopicName}
                                                // onChange={handleNewTopicNameChange}
                                                placeholder="+ Enter new topic"
                                                variant="outlined"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            {/* {newTopicName.trim() !== '' && (
                                                                <Button variant="text" onClick={handleAddTopicName}>
                                                                    Add
                                                                </Button>
                                                            )} */}
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </MenuItem>
                                        {TopicName.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={TopicNameComma.indexOf(name.name) > -1} />
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
                                            <Button onClick={handleCloseTopic}>Close</Button>
                                            <Button onClick={handleApplyTopic}>Apply</Button>
                                        </Box>

                                    </Select>
                                </FormControl>
                            </div>
                            <div className='divideBox'>
                                <div>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { marginLeft: '48px', width: '300px', marginTop: '36px' },
                                        }}
                                        Validate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="No.ofQuestions" value={questionNo} onChange={handleQuestionNoChange} variant="outlined" />

                                    </Box>
                                    <p className='questionsPara'>Time alloted for a question is 90 sec.</p>

                                </div>
                                <div>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ width: '310px', marginTop: '36px' }}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker label="Date of completion" sx={{ width: '300px', marginTop: '28px', marginLeft: '54px' }} format="DD/MM/YYYY"
                                                value={updateDateValue}
                                                onChange={handleDateChange}
                                                multiple />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <p className='datePara'>Valid till 11:59PM on the selected date</p>
                                </div>
                            </div>
                            <Box
                                sx={{
                                    '& .MuiTextField-root': { marginLeft: '48px', width: '654px', marginTop: '36px', marginBottom: '36px' },
                                }}
                            >
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    multiline
                                    rows={5}
                                />
                            </Box>
                            <div className='mailButtons'>
                                <Stack spacing={2} direction="row">
                                    <Button className='cancelButton' onClick={onClose} variant="text">Cancel</Button>
                                    <Button className='sendButton' variant="outlined" onClick={postAssessment}>Send Mail</Button>
                                </Stack>
                            </div>
                        </form>
                        <img src={kaniniLogo} className='formLogo' height='240px' width='240px' alt="Kanini Logo" />
                    </Drawer>
                </React.Fragment>
            ))
            }
        </div >
    )
}

export default EmployeeAssessment