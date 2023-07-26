import React, { useEffect, useState } from 'react';
import {
  Box,
  TableCell,
  TableRow,
  TableContainer,
  TableBody,
  TablePagination,
  Table,
  TableHead,
  TableSortLabel,
  Tab,
  Pagination
} from '@mui/material';

import ImportExportTwoToneIcon from '@mui/icons-material/ImportExportTwoTone';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListTwoToneIcon from '@mui/icons-material/FilterListTwoTone';
import { createSvgIcon } from '@mui/material/utils';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import TimerIcon from '@mui/icons-material/Timer';
import BadgeIcon from '@mui/icons-material/Badge';
import QuizIcon from '@mui/icons-material/Quiz';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import deleteGif from '../assets/delete.gif';
import EmployeeAssessment from './EmployeeAssessment';
import '../AssessmentHistory/EmployeeAssessment.css'

// import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import kaniniLogo from '../assets/formlogo.png';
import Navbars from '../NavBar/Navbars';
import dayjs from 'dayjs';
import TickGif from '../assets/updatedsuccessfully.gif'

/*style*/

const tablefetch = {
  border: 'none', textAlign: 'center', fontSize: '12px',
  color: '#0C1116',
  fontFamily: 'Manrope',
  fontSize: '12.5px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal'
}

const tablehead = {
  border: 'none', position: 'relative',
  color: '#0C1116',
  fontFamily: 'Manrope',
  fontSize: '13px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '21px',
  width: '252px',
  height: '48px'
}

//slider
const PrettoSlider = styled(Slider)({
  color: '#1589CC',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 10,
    width: 10,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});


const topics = [
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


const names = [
  { name: 'Oliver Hansen', avatar: 'O' },
  { name: 'Van Henry', avatar: 'V' },
  { name: 'April Tucker', avatar: 'A' },
  { name: 'Ralph Hubbard', avatar: 'R' },
  { name: 'Omar Alexander', avatar: 'O' },
  { name: 'Carlos Abbott', avatar: 'C' },
  { name: 'Miriam Wagner', avatar: 'M' },
  { name: 'Bradley Wilkerson', avatar: 'B' },
  { name: 'Virginia Andrews', avatar: 'V' },
  { name: 'Kelly Snyder', avatar: 'K' },
];

const EmpAssessment = () => {

  const [employee, setEmployee] = useState([]);
  const [history, setHistory] = useState(
    {
      "empCode": "",
      "name": "",
      "assessmentId": "",
      "department": "",
      "designation": "",
      "skill": "",
      "numberOfQuestion": 0,
      "userEmail": "",
      "numberOfTopics": 0,
      "creatingOn": "",
      "completedOn": "",
      "score": 0,
      "correctAnswer": 0,
      "wrongAnswer": 0,
      "skippedAnswer": 0,
      "points": 0
    }
  );
  const [progressValue, setProgressValue] = useState(0);
  const [latestProgressValue, setLatestProgressValue] = useState(0); // Add new state variable
  const [getAllDept, setNewDept] = useState([]);
  const [selectDept, setSelectDept] = useState([]);//store the checked id of the department
  const [getTopic, setNewTopic] = useState([]);
  const [getSkill, setNewSkill] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [filteredRows, setFilteredRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [value, setValue] = React.useState('1');//Tab
  const [open3, setOpen3] = React.useState(false);//Filter
  const [modalPosition2, setModalPosition2] = useState({ top: 0, left: 0 });//Filter  
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);//Accessories
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });//Accessories
  const [open4, setOpen4] = React.useState(false);//Delete
  const [open5, setOpen5] = React.useState(false);//Edit Successfully
  const [isFilterVisible, setIsFilterVisible] = useState(true);//hide filter
  const [toggleclick, setToggleClick] = useState(true);//toggle in filter
  const [click, setClick] = useState(true); // Toggle for Department section
  const [click2, setClick2] = useState(true); // Toggle for Topic section
  const [click3, setClick3] = useState(true); // Toggle for Skill section
  const [anchor, setAnchor] = React.useState('right');//Edit Button
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);//Edit Button
  const [isDrawerOpen2, setIsDrawerOpen2] = React.useState(false);//Accessories Button 
  const [topicToggleclick, setTopicToggleClick] = useState(true);//toggle in filter
  const [skillToggleclick, setSkillToggleClick] = useState(true);//toggle in filter
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [showPaginationDiv, setShowPaginationDiv] = useState(true);
  const [filteredOutput, setFilteredOutput] = useState([]);
  const [selectedRow, setSelectedRow] = useState({});//select particular table row to delete/edit
  const [afterDelete, setAfterDelete] = useState([]);
  const [afterDeleteRecord, setAfterDeleteRecord] = useState([]);
  const [isEmployeeDrawerOpen, setIsEmployeeDrawerOpen] = useState(false);
  const [getAllEmp, setNewEmp] = useState([]);
  const [removeSelected, setRemoveSelected] = useState(false)
  const [formValues, ] = useState({
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

  const empFetch = () => {
    fetch("https://localhost:7281/HistoryTable/HistoryDetails?roleName=Employee", {
      method: "GET"
    })
      .then(async (data) => {
        const myData = await data.json();
        console.log(myData);
        setEmployee(myData);
        console.log(employee);
      });
  };

  //fetch all the values in a table
  useEffect(() => {
    empFetch();
  }, []);

  //history


  const fetchData = (userAssessmentId) => {
    fetch(`https://localhost:7281/TestHistory/History?UserAssessmentId=${userAssessmentId}`, {
      method: "GET"
    })
      .then(async (data) => {
        const myData = await data.json();
        console.log(myData);
        if (typeof myData === "object" && myData !== null) {
          setHistory(myData);
          setLatestProgressValue(myData.score); // Store the latest progress value
        } else {
          console.error("Invalid data format for history");
        }
        console.log(history);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

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

  const getAllSkill = () => {
    fetch(`https://localhost:7281/HistoryTable/GetAllSkill`, {
      method: "GET"
    })
      .then(async (data) => {
        const myData = await data.json();
        console.log(myData);
        setNewSkill(myData)
        console.log(getSkill);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

  const deleteRecord = (selectedRow, histId) => {
    //Delete in UserAssessment Table
    fetch(`https://localhost:7281/HistoryTable/DeleteAssessment?UserAssessId=${selectedRow}&roleName=Employee`, {
      method: "DELETE"
    })
      .then(async (data) => {
        const myData = await data.json();
        console.log(myData);
        setAfterDelete(myData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    //Delete in History Table
    fetch(`https://localhost:7281/HistoryTable/DeleteAssessmentHistory?HistId=${histId}`, {
      method: "DELETE"
    })
      .then(async (data) => {
        const myData = await data.json();
        console.log(myData);
        setAfterDeleteRecord(myData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    window.location.reload();
  }
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

  useEffect(() => {
    fetchData(history.userAssessmentId); // Fetch data when history.userAssessmentId changes
  }, [history.userAssessmentId]);

  useEffect(() => {
    setProgressValue(latestProgressValue); // Update progressValue with the latest value
  }, [latestProgressValue]);

  useEffect(() => {
    fetchDepartment();
  }, []);

  useEffect(() => {
    getAllSkill();
  }, [])


  //convert to date format
  const formatDate = (dateString) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatDate2 = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
  };
  const formatDate3 = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
  };


  const handleSortClick = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrderBy(property);
    setOrder(isAsc ? 'desc' : 'asc');
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getComparator = (order, orderBy) => {
    return (a, b) => {
      const valueA = a[orderBy] || '';
      const valueB = b[orderBy] || '';
      if (order === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    };
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  //Display the table in sorted manner
  const sortedRows = stableSort(employee, getComparator(order, orderBy));
  //For no of rows equal to pagination part
  const slicedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  //Display the table in sorted manner
  const sortedFilteredRows = stableSort(filteredOutput, getComparator(order, orderBy));
  //For no of rows equal to pagination part
  const slicedFilteredRows = sortedFilteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  //Tab Change
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Additional logic for handleTabChange
    if (newValue === '2') {
      setIsFilterVisible(false);
    } else {
      setIsFilterVisible(true);
    }
  };

  //select 
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };


  //plus icon
  const PlusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 35 35"
      strokeWidth={2.0}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );

  //test-result modal

  const handleOpen = (userAssessmentId) => () => {
    console.log('Open modal for userAssessmentId:', userAssessmentId);
    fetchData(userAssessmentId);
    // Handle modal opening logic here
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  //Accessories-Box Model
  const [editRow, setEditRow] = useState({});
  const [histId, setHistId] = useState();

  const handleOpen2 = (event, row, histId) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const position = {
      top: rect.bottom,
      left: rect.right
    };
    setModalPosition(position);
    setOpen2(true);
    setSelectedRow(row);
    console.log(row);
    console.log(selectedRow);
    //assesshist
    setHistId(histId);
    console.log(histId)
    //edit sidebar values api fetch
    fetch(`https://localhost:7281/HistoryTable/GetSideBarDetails?id=${row}`, {
      method: "GET"
    })
      .then(async (data) => {
        const myData = await data.json();
        console.log(myData);
        setEditRow(myData);
        console.log(editRow);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    if (Object.keys(editRow).length > 0) {
      console.log(editRow);
    }
  }, [editRow]);

  const handleClose2 = () => {
    setOpen2(false);
  };

  // FilterButton Modal

  const handleOpen3 = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const position = {
      top: rect.bottom,
      left: rect.right
    };
    setModalPosition2(position);
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  //delete
  const handleClose4 = () => {
    setOpen4(false);
  }

  //updated successfully
  const handleClose5 = () => {
    setOpen5(false);
  }

  //EditButton

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
    setOpen2(false);
    fetchDepartment();
  };

  //AccessedButton

  const toggleDrawer2 = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen2(open);
    setOpen2(false);
    fetchDepartment();
    fetchEmployee();
  };

  //Delete button
  const handleDelete = () => {
    handleClose2();
    // Perform the deletion logic
    console.log(selectedRow);
    setOpen4(true);
  };

  const confirmDelete = () => {
    deleteRecord(selectedRow, histId);
    handleClose4();
  }
  //select button for department
  const theme = useTheme();
  const [departmentName, setdepartmentName] = React.useState([]);

  const departmentChange = (event) => {
    const {
      target: { value },
    } = event;
    setdepartmentName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  //filter
  // Toggle Department section and set active paragraph
  const toggle = () => {
    if (topicToggleclick == false) {
      setTopicToggleClick(true)
      setClick2(false)
    }
    if (skillToggleclick == false) {
      setSkillToggleClick(true);
      setClick3(false)
    }
    setToggleClick(!toggleclick); // Toggle Employee section
    setClick(true); // Hide Questions section
  };

  //To Get Total Checked in Department
  const [prevSelectedDepts, setPrevSelectedDepts] = useState([]);

  const handleCheckboxChange = (event, id) => {
    const updatedDept = getAllDept.map((dept) =>
      dept.id === id ? { ...dept, checked: event.target.checked } : dept
    );
    setSelectDept(updatedDept);

    const selectedDepts = updatedDept
      .filter((dept) => dept.checked)
      .map((dept) => dept.departmentName);
    console.log(selectedDepts);



    // Fetch topics for checked departments
    if (!event.target.checked) {
      // If unchecked, find the department name of the unchecked department
      const uncheckedDeptName = getAllDept.find((dept) => dept.id === id).departmentName;
      console.log("unchecked deptName:", uncheckedDeptName);
      // Filter out the unchecked department name from the previously checked names
      const prevSelectedDeptNames = selectedDepts.indexOf(deptName => deptName === uncheckedDeptName);
      console.log("prevSelectedDeptName", prevSelectedDeptNames);
      // Fetch topics for previously checked departments (if there are any)
      if (selectedDepts.length > 0) {
        const url = `https://localhost:7281/HistoryTable/GetTopicsByDepartment?deptlist=${prevSelectedDeptNames}`;
        fetch(url, {
          method: "GET",
        })
          .then(async (data) => {
            const myData = await data.json();
            console.log(myData);
            setNewTopic(myData);
            console.log(getTopic);
          })
          .catch((error) => {
            console.log("Error:", error);
          });
      }
    }
    else {
      const url = `https://localhost:7281/HistoryTable/GetTopicsByDepartment?deptlist=${selectedDepts}`;
      fetch(url, {
        method: "GET",
      })
        .then(async (data) => {
          const myData = await data.json();
          console.log(myData);
          setNewTopic((prevTopics) => [...prevTopics, ...myData]);
          console.log(getTopic);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }

  };

  useEffect(() => {
    console.log("checked values: ", getTopic);
  }, [getTopic]);

  // Handle checkbox change for topics
  const handleTopicCheckboxChange = (event, topic) => {
    const updatedTopics = [...selectedTopics];
    if (event.target.checked) {
      updatedTopics.push(topic);
    } else {
      const index = updatedTopics.indexOf(topic);
      if (index !== -1) {
        updatedTopics.splice(index, 1);
      }
    }
    setSelectedTopics(updatedTopics);
    console.log(selectedTopics);
  };

  // Handle skill change
  const handleSkillChange = event => {
    setSelectedSkill(event.target.value);
  };

  // Update getTopic state and remove topics for unchecked departments
  useEffect(() => {
    // Fetch topics based on checked departments
    const selectedDepts = getAllDept.filter(dept => dept.checked);
    const deptList = selectedDepts.map(dept => dept.departmentName);
    fetch(`https://localhost:7281/HistoryTable/GetTopicsByDepartment?deptlist=${deptList}`)
      .then(response => response.json())
      .then(data => {
        setNewTopic(data);
      })
      .catch(error => {
        console.error('Error fetching topics:', error);
      });
  }, [getAllDept]);

  //count of checked department
  const checkedDeptCount = getAllDept.filter((dept) => dept.checked).length;

  //Toggle Topic
  const TopicToggle = () => {
    if (toggleclick == false) {
      setToggleClick(true)
      setClick(false)
    }
    if (skillToggleclick == false) {
      setSkillToggleClick(true);
      setClick3(false)
    }

    setTopicToggleClick(!topicToggleclick); // Toggle Employee section
    setClick2(true); // Hide Questions section
  };
  //Toggle Skill
  const SkillToggle = () => {
    if (toggleclick == false) {
      setToggleClick(true)
      setClick(false)
    }
    if (topicToggleclick == false) {
      setTopicToggleClick(true)
      setClick2(false)
    }
    getAllSkill();
    setSkillToggleClick(!skillToggleclick); // Toggle Skill section
    setClick3(true); // Hide Other section
  };

  // Clear All
  const clearAllCheckboxes = () => {
    const updatedDept = getAllDept.map((dept) => ({ ...dept, checked: false }));
    setNewDept(updatedDept);

    setSelectedSkill('');
  };

  //Apply Filter
  const applyFilters = () => {
    handleClose3();//closing the filterBox
    setIsFilterApplied(true);//Hide all values in table
    setShowPaginationDiv(false);//Hide its corresponding Pagination


    const selectedTopicParams = selectedTopics.join('&topiclist=');
    const url = `https://localhost:7281/HistoryTable/FilterByTopic?topiclist=${selectedTopicParams}&skillLevel=${selectedSkill}&roleName=Employee`;
    fetch(url, {
      method: "GET"
    })
      .then(async (data) => {
        const myData = await data.json();
        console.log(myData);
        setFilteredOutput(myData)
        console.log(filteredOutput);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

  };

  //remove Filter
  const removeFilter = () => {
    setIsFilterApplied(false);//Hide all values in table
    window.location.reload();
    setShowPaginationDiv(true);//Hide its corresponding Pagination
  }

  //Create Assessment
  const handleEmployeeDrawerOpen = () => {
    setIsEmployeeDrawerOpen(true);
  };

  const handleEmployeeDrawerClose = () => {
    setIsEmployeeDrawerOpen(false);
  };

  // Edit Button Page

  const [isInputActive2, setIsInputActive2] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const handleInputMouseDown2 = () => {
    setIsInputActive2(true);
  };
  const handleInputBlur2 = () => {
    setIsInputActive2(true);
  };
  const [department, setDepartment] = React.useState('');
  const [isTextFieldClicked, setIsTextFieldClicked] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const edithandleChange = (event) => {
    setDepartment(event.target.value);
  };




  const handleClick = (event) => {
    event.stopPropagation();
    setIsTextFieldClicked(true);
  };

  const edithandleOpen2 = () => {
    setEditOpen(true);
  };

  const edithandleClose2 = () => {
    setEditOpen(false);
  };

  const handleAdd = () => {
    // Perform the logic for adding the department here
    console.log('Adding department:', department);
  };
  const [personName, setPersonName] = React.useState([]);
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);//id of selected employee

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

    return `${selected.slice(0, 2).join(', ')} & ${selected.length - 2} more (${selected.length})`;
  };
  const [topicName, setTopicName] = React.useState([]);
  const [newTopicName, setNewTopicName] = React.useState('');

  const handleTopicChange = (event) => {    
    const {
      target: { value },
    } = event;
    setTopicName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleApplyTopic = () => {
    setRemoveSelected(false)
  }

  const handleCloseTopic = () => {
    setTopicName([])
    setRemoveSelected(false)
  }


  const handleNewTopicNameChange = (event) => {
    setNewTopicName(event.target.value);
  };

  const handleAddTopicName = () => {
    if (newTopicName.trim() !== '') {
      setTopicName((prevNames) => [...prevNames, newTopicName]);
      setNewTopicName('');
      console.log(newTopicName)
    }
  };

  //PUT => UPDATE DATE
  const [updateDateValue, setUpdateDateValue] = useState('')
  const [editFinish, setEditFinish] = useState({})

  const handleDateChange = (newValue) => {
    setUpdateDateValue(dayjs(newValue).format('YYYY-MM-DD'));
  };

  //edit sidebar =>send mail
  const updateDate = () => {
    console.log(selectedRow);
    console.log(updateDateValue);
    fetch(`https://localhost:7281/HistoryTable/PutCompletionDate?userassessId=${selectedRow}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateOfCompletion: updateDateValue, // Include the updateDateValue in the request body
      }),
    })
      .then(response => response.json())
      .then(data => {
        setEditFinish(data);
        console.log("Updated Successfully");

      })
      .catch(error => {
        console.error('Error fetching topics:', error);
      });
    setOpen5(true);
  }

  // useEffect(() => {
  //   updateDate();
  // }, [updateDateValue])

  const closeEdit = () => {
    toggleDrawer(false)
    window.location.reload();
  }

  const updateClose = () => {
    handleClose5()
    toggleDrawer(false)
  }

  //posting an assessment
  useEffect(() => {
    console.log("FormValues Updated: ", formValues);
  }, [formValues]);

  const currentDate = new Date().toISOString().slice(0, 10);
  const [questionNo, setQuestionNo] = useState('');
  const [formValuesList, setFormValuesList] = useState([]);

  const postUserAssessment = () => {

    const updatedFormValuesList = [];
    for (let i = 0; i < selectedEmployeeIds.length; i++) {
      const id = selectedEmployeeIds[i];
      const formValues = {
        userId: id, // Use selectedEmployeeIds array to populate the userId
        assessmentId: editRow.assessmentId,
        numberOfTopics: editRow.numberOfTopic,
        numberOfQuestions: questionNo,
        totalTime: questionNo * 1.5,
        dateOfCreation: currentDate,
        dateOfCompletion: updateDateValue,
        description: editRow.description,
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
          console.log("Updated Successfully");

        })
        .catch(error => {
          console.error('Error fetching topics:', error);
        });
    }
  }



  const handleQuestionNoChange = (event) => {
    setQuestionNo(event.target.value);
  };



  return (
    <>
      <Navbars title="Employee Assessment Data" desc="View completed details of all assessed and its corresponding details of employee"></Navbars>
      <div className='alignment'>
        <TabContext value={value}>
          <div>
            <div className='flexproperty'>
              <div>
                <Box sx={{ borderBottom: 0 }}>
                  <TabList onChange={handleChange}
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: '#1589CC', // Set the desired background color for the indicator
                        height: '4px', // Set the desired height of the indicator
                        borderRadius: '10px'
                      },
                    }}
                  >
                    <Tab label="Assessment List" value="1"
                      aria-label="styled tabs example"
                      sx={{
                        textTransform: 'none',
                        fontSize: '18px',
                        fontWeight: '400',
                        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',

                        '&.Mui-selected': {
                          color: '#0C1116',
                          fontSize: '18px',
                          fontWeight: '500',
                          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'
                        }
                        //borderBottom: '5px solid #1A9CE0', // Set the desired border style
                      }}
                    />
                    <Tab label="Available Assessment" value="2"
                      sx={{
                        textTransform: 'none',
                        fontSize: '18px',
                        fontWeight: '400',
                        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',

                        '&.Mui-selected': {
                          color: '#0C1116',
                          fontSize: '18px',
                          fontWeight: '500',
                          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'
                        }
                        //borderBottom: '5px solid #1A9CE0', // Set the desired border style
                      }}
                    />
                  </TabList>
                </Box>
              </div>
              <div className='flexpropertys'>
                {isFilterVisible && (
                  <div className='filterbox' onClick={(event) => handleOpen3(event)}>
                    <span>
                      <FilterListTwoToneIcon />
                    </span>
                  </div>
                )}
                <div className='create-assess' onClick={handleEmployeeDrawerOpen}><span className='plus'> <PlusIcon /></span>Create Assessment
                </div>
              </div>
            </div>

          </div>

          <TabPanel value="1">
            <TableContainer>
              <Table sx={{ border: '1px solid #ccc' }}>
                <TableHead sx={{ backgroundColor: '#DFF3FB' }}>
                  <TableRow >
                    <TableCell align="center" sx={tablehead}>
                      <TableSortLabel
                        active={orderBy === 'name'}
                        direction={orderBy === 'name' ? order : 'asc'}
                        onClick={() => handleSortClick('name')}
                        IconComponent={ImportExportTwoToneIcon}
                        sx={{
                          '& .MuiTableSortLabel-icon': {
                            opacity: 1,
                            color: 'blue',
                            marginLeft: '15px',// Set the desired color
                          },
                        }}
                      >
                        Employee Name & ID
                      </TableSortLabel>
                      <div className='right-border'></div>
                    </TableCell>

                    <TableCell align="center" sx={tablehead}>
                      <TableSortLabel
                        active={orderBy === 'department'}
                        direction={orderBy === 'department' ? order : 'asc'}
                        onClick={() => handleSortClick('department')}
                        IconComponent={ImportExportTwoToneIcon}
                        sx={{
                          '& .MuiTableSortLabel-icon': {
                            opacity: 1,
                            color: 'blue',
                            marginLeft: '15px' // Set the desired color
                          },
                        }}
                      >
                        Department
                      </TableSortLabel>
                      <div className='right-border'></div>
                    </TableCell>

                    <TableCell align="center" sx={tablehead}>
                      <TableSortLabel
                        active={orderBy === 'skills'}
                        direction={orderBy === 'skills' ? order : 'asc'}
                        onClick={() => handleSortClick('skills')}
                        IconComponent={ImportExportTwoToneIcon}
                        sx={{
                          '& .MuiTableSortLabel-icon': {
                            opacity: 1,
                            color: 'blue',
                            marginLeft: '15px' // Set the desired color
                          },

                        }}
                      >
                        Level
                      </TableSortLabel>
                      <div className='right-border'></div>
                    </TableCell>

                    <TableCell align="center" sx={tablehead}>
                      <TableSortLabel
                        active={orderBy === 'assessmentId'}
                        direction={orderBy === 'assessmentId' ? order : 'asc'}
                        onClick={() => handleSortClick('assessmentId')}
                        IconComponent={ImportExportTwoToneIcon}
                        sx={{
                          '& .MuiTableSortLabel-icon': {
                            opacity: 1,
                            color: 'blue', // Set the desired color
                            marginLeft: '15px'
                          },
                        }}
                      >
                        Assessment ID
                      </TableSortLabel>
                      <div className='right-border'></div>
                    </TableCell>

                    <TableCell align="center" sx={tablehead}>
                      No. of Topics
                      <div className='right-border'></div>
                    </TableCell>

                    <TableCell align="center" sx={tablehead}>
                      <TableSortLabel
                        active={orderBy === 'status'}
                        direction={orderBy === 'status' ? order : 'asc'}
                        onClick={() => handleSortClick('status')}
                        IconComponent={ImportExportTwoToneIcon}
                        sx={{
                          '& .MuiTableSortLabel-icon': {
                            opacity: 1,
                            color: 'blue', // Set the desired color
                            marginLeft: '15px'
                          },
                        }}
                      >
                        Status
                      </TableSortLabel>
                      <div className='right-border'></div>
                    </TableCell>

                    <TableCell align="center" sx={tablehead}>
                      <TableSortLabel
                        active={orderBy === 'dateOfCompletion'}
                        direction={orderBy === 'dateOfCompletion' ? order : 'asc'}
                        onClick={() => handleSortClick('dateOfCompletion')}
                        IconComponent={ImportExportTwoToneIcon}
                        sx={{
                          '& .MuiTableSortLabel-icon': {
                            opacity: 1,
                            color: 'blue', // Set the desired color
                            marginLeft: '15px'
                          },
                        }}
                      >
                        Completion Date
                      </TableSortLabel>
                      <div className='right-border'></div>
                    </TableCell>

                    <TableCell align="center" sx={tablehead}>
                      Results
                      <div className='right-border'></div>
                    </TableCell>

                    <TableCell align="center" sx={tablehead}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {isFilterApplied ? (
                    slicedFilteredRows.map((row) => (
                      <TableRow key={row.userAssessmentId}>
                        <TableCell sx={{ border: 'none', fontSize: '12px' }}>
                          <div className='flex-prop'>
                            <div className='imageDiv'><img src={require(`../assets/${row.name}.jpg`)} className='image'></img></div>
                            <div>
                              <div className='EmpName'>{row.name}</div>
                              <div className='float viewResult'>{row.empId}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell sx={tablefetch}>{row.department}</TableCell>
                        <TableCell sx={tablefetch}>{row.skills}</TableCell>
                        <TableCell sx={tablefetch}>{row.assessmentId}</TableCell>
                        <TableCell sx={tablefetch}>{row.numberOfTopic}</TableCell>
                        <TableCell sx={tablefetch}>
                          <Typography sx={{
                            backgroundColor:
                              row.status === 'Completed' ? '#D6F3E9' : '#fde1e1',
                            width: 'fit-content',
                            padding: '5px 5px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '600',
                            fontFamily: 'Manrope',
                            fontStyle: 'normal',
                            lineHeight: 'normal',
                            color:
                              row.status === 'Completed' ? '#039855' : '#bb251a'
                          }}>{row.status}</Typography> </TableCell>
                        <TableCell sx={tablefetch}>
                          {row.status === 'Completed' ? formatDate(row.dateOfCompletion) : '-'}
                        </TableCell>
                        <TableCell sx={tablefetch} className='viewResult'>
                          {row.status === 'Completed' ? (
                            <p className='result' onClick={handleOpen(row.historyId)}>VIEW RESULT</p>
                          ) : (
                            <p className='result disabled'>VIEW RESULT</p>
                          )}
                        </TableCell>
                        <TableCell sx={{ border: 'none', textAlign: 'center' }}>
                          <MoreVertIcon sx={{ cursor: 'pointer' }} onClick={(event) => handleOpen2(event, row.userAssessmentId, row.historyId)} />

                        </TableCell>
                      </TableRow>
                    ))
                  ) : (


                    slicedRows.map((row) => (
                      <TableRow key={row.userAssessmentId}>
                        <TableCell sx={{ border: 'none', fontSize: '12px' }}>
                          <div className='flex-prop'>
                            <div className='imageDiv'><img src={require(`../assets/${row.name}.jpg`)} className='image'></img></div>
                            <div>
                              <div className='EmpName'>{row.name}</div>
                              <div className='float viewResult'>{row.empId}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell sx={tablefetch}>{row.department}</TableCell>
                        <TableCell sx={tablefetch}>{row.skills}</TableCell>
                        <TableCell sx={tablefetch}>{row.assessmentId}</TableCell>
                        <TableCell sx={tablefetch}>{row.numberOfTopic}</TableCell>
                        <TableCell sx={tablefetch}>
                          <Typography sx={{
                            backgroundColor:
                              row.status === 'Completed' ? '#D6F3E9' : '#fde1e1',
                            width: 'fit-content',
                            padding: '5px 5px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '600',
                            fontFamily: 'Manrope',
                            fontStyle: 'normal',
                            lineHeight: 'normal',
                            color:
                              row.status === 'Completed' ? '#039855' : '#bb251a'
                          }}>{row.status}</Typography> </TableCell>
                        <TableCell sx={tablefetch}>
                          {row.status === 'Completed' ? formatDate(row.dateOfCompletion) : '-'}
                        </TableCell>
                        <TableCell sx={tablefetch} className='viewResult'>
                          {row.status === 'Completed' ? (
                            <p className='result' onClick={handleOpen(row.userAssessmentId)}>VIEW RESULT</p>
                          ) : (
                            <p className='result disabled'>VIEW RESULT</p>
                          )}
                        </TableCell>
                        <TableCell sx={{ border: 'none', textAlign: 'center' }}>
                          <MoreVertIcon sx={{ cursor: 'pointer' }} onClick={(event) => handleOpen2(event, row.userAssessmentId, row.historyId)} />
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
              {isFilterApplied ? (
                <div className='flex-propt'>
                  <div>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      component="div"
                      count={filteredOutput.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      labelDisplayedRows={() => ''} // Hide the displayed rows information
                      backIconButtonProps={{ style: { display: 'none' } }} // Hide the back button
                      nextIconButtonProps={{ style: { display: 'none' } }} // Hide the next button

                      sx={{
                        marginTop: 5,
                        '& .MuiToolbar-root.MuiTablePagination-toolbar': {
                          width: '160px'
                        }
                      }}
                    />
                  </div>
                  <div>
                    <Pagination
                      count={Math.ceil(filteredOutput.length / rowsPerPage)}
                      page={page + 1}
                      onChange={(event, newPage) => handleChangePage(event, newPage - 1)}

                      backIconButtonProps={{ style: { display: 'none' } }} // Hide the back button
                      nextIconButtonProps={{ style: { display: 'none' } }} // Hide the next button

                      sx={{
                        marginTop: 6
                      }}
                    />
                  </div>
                  <div className='flex-prop1'>
                    <div className='margin'>Go to page ----</div>
                    <div>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={filteredOutput.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        labelRowsPerPage={null} // Hide the "Rows per page" label
                        labelDisplayedRows={() => ''} // Hide the displayed rows information
                        backIconButtonProps={{ style: { display: 'none' } }} // Hide the back button
                        nextIconButtonProps={{ style: { display: 'block' } }} // Show the next button
                        SelectProps={{ style: { display: 'none' } }} // Hide the select dropdown
                        sx={{
                          '& .MuiTablePagination-toolbar.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular':
                          {
                            paddingLeft: 0
                          },
                          '& .MuiTablepagination':
                          {
                            marginLeft: 0
                          },
                          marginTop: 5
                        }}
                      />
                    </div>
                  </div>
                  <div onClick={removeFilter} className='reqProceed gback'>Go Back</div>
                </div>

              ) : (
                <div className='flex-propt'>
                  <div>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      component="div"
                      count={employee.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      labelDisplayedRows={() => ''} // Hide the displayed rows information
                      backIconButtonProps={{ style: { display: 'none' } }} // Hide the back button
                      nextIconButtonProps={{ style: { display: 'none' } }} // Hide the next button

                      sx={{
                        marginTop: 5,
                        '& .MuiToolbar-root.MuiTablePagination-toolbar': {
                          width: '160px'
                        }
                      }}
                    />
                  </div>
                  <div>
                    <Pagination
                      count={Math.ceil(employee.length / rowsPerPage)}
                      page={page + 1}
                      onChange={(event, newPage) => handleChangePage(event, newPage - 1)}

                      backIconButtonProps={{ style: { display: 'none' } }} // Hide the back button
                      nextIconButtonProps={{ style: { display: 'none' } }} // Hide the next button

                      sx={{
                        marginTop: 6
                      }}
                    />
                  </div>
                  <div className='flex-prop1'>
                    <div className='margin'>Go to page ----</div>
                    <div>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={employee.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        labelRowsPerPage={null} // Hide the "Rows per page" label
                        labelDisplayedRows={() => ''} // Hide the displayed rows information
                        backIconButtonProps={{ style: { display: 'none' } }} // Hide the back button
                        nextIconButtonProps={{ style: { display: 'block' } }} // Show the next button
                        SelectProps={{ style: { display: 'none' } }} // Hide the select dropdown
                        sx={{
                          '& .MuiTablePagination-toolbar.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular':
                          {
                            paddingLeft: 0
                          },
                          '& .MuiTablepagination':
                          {
                            marginLeft: 0
                          },
                          marginTop: 5
                        }}

                      />
                    </div>

                  </div>

                </div>
              )}

            </TableContainer>
          </TabPanel>
        </TabContext>
        <TabContext value="2">

        </TabContext>
        {/* Result Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className='resultbox resultcolor'>
            <div>
              <div className='flexing'>
                <div className='fontsize'>Assessment Result</div>
                <div onClick={handleClose} className='cancel paddnone'><CancelIcon /></div>
              </div>
              <div className='line'></div>
              <div className='flex-propt2'>
                <div className='width'>
                  <div className='flex'>
                    <div><BadgeIcon style={{ color: '#1589CC' }} /></div>
                    <div className='moveright'>
                      <div className='head'>Employee Details</div>
                      <div className='name'>{history.name}</div>
                      <table>
                        <tr>
                          <td className='heading'>Emp Code</td>
                          <td className='response'>{history.empCode}</td>
                        </tr>
                        <tr>
                          <td className='heading'>Email Address</td>
                          <td className='response'>{history.userEmail}</td>
                        </tr>
                        <tr>
                          <td className='heading'>Department</td>
                          <td className='response'>{history.department}</td>
                        </tr>
                        <tr>
                          <td className='heading'>Designation</td>
                          <td className='response'>{history.designation}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>

                <div className='width'>
                  <div className='flex'>
                    <div><QuizIcon style={{ color: '#1589CC' }} /></div>
                    <div className='moveright'>
                      <div className='head'>Assessment Details</div>
                      <div className='name'>{history.assessmentId}</div>
                      <div>
                        <table>
                          <tr>
                            <td className='heading'>Level</td>
                            <td className='response'>{history.skill}</td>
                          </tr>
                          <tr>
                            <td className='heading'>No of Topics</td>
                            <td className='response'>{history.numberOfTopics}</td>
                          </tr>
                          <tr>
                            <td className='heading'>No of Questions</td>
                            <td className='response'>{history.numberOfQuestion}</td>
                          </tr>
                          <tr>
                            <td className='heading'>Created On</td>
                            <td className='response'>{formatDate2(history.creatingOn)}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className='white'>
                <br></br>
                <div className='flex-prop'>
                  <div className="rectangle">
                    <div className='resultname'>Result</div>
                    <div className='flex'>
                      <div><CheckBoxIcon style={{ color: '#039855' }} /></div>
                      <div className='margleft'>
                        <div className='passed'>Assessment Passed</div>
                        <div className='answer'>Correct Answer</div>
                        <div className='margbot answer'><span className='score'>{history.correctAnswer}</span>/{history.numberOfQuestion}</div>
                        <div className='answer'>Wrong Answer</div>
                        <div className='margbot answer'><span className='score'>{history.wrongAnswer}</span>/{history.numberOfQuestion}</div>
                        <div className='answer'>Skipped Answer</div>
                        <div className='answer'><span className='score'>{history.skippedAnswer}</span>/{history.numberOfQuestion}</div>
                      </div>
                      <div className='mark'>
                        <Example>
                          <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={progressValue}
                            duration={2.5}
                            easingFunction={easeQuadInOut}
                            no-repeat
                          >
                            {value => {
                              const roundedValue = Math.round(progressValue);
                              return (
                                <CircularProgressbar
                                  value={value}
                                  text={`${roundedValue}%`}
                                  strokeWidth={6}
                                  text2={history.points}
                                  styles={buildStyles({
                                    pathTransition: "",
                                    textColor: '#039855',
                                    trailColor: '#d6d6d6',
                                    pathColor: "#039855",
                                  })}
                                />
                              );
                            }}
                          </AnimatedProgressProvider>
                        </Example>

                      </div>
                    </div>
                    <div className='position'>
                      <div className='flex2'>
                        {/* <div className='percent'><span className='bigpresent'>{history.score}</span>%</div>
                        <div className='points'>60 Points</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="rectangle marg">
                    <div className='resultname'>Timer</div>
                    <div className='flex'>
                      <div><TimerIcon style={{ color: '#1589CC' }} /></div>
                      <div className='margleft'>
                        <div className='timer'>Total Time</div>
                        <div className='start'>00:00:12 &nbsp;&nbsp;&nbsp; /  &nbsp;&nbsp;&nbsp;<span className='end'>00:27:21</span></div>
                        <div className='margboth'>
                          <PrettoSlider
                            valueLabelDisplay="none"
                            aria-label="pretto slider"
                            defaultValue={5}
                            sx={{
                              width: '300px',
                              '@media (max-width: 1024px)': {
                                width: '200px', // Adjust width for screens up to 1024px
                                marginBottom: '0px'
                              },
                              '@media (max-width: 820px)': {
                                width: '200px', // Adjust width for screens up to 820px
                              },
                              '@media (max-width: 420px)': {
                                width: '100%', // Adjust width for screens up to 420px
                              }
                            }}
                          />
                        </div>
                        <div>
                          <table>
                            <tr>
                              <td className='answer'>Start Time</td>
                              <td className='time'>05:35pm</td>
                              <td className='answer'>Questions</td>
                              <td className='time'>01</td>
                            </tr>
                            <tr>
                              <td className='answer margboth'>End Time</td>
                              <td className='time margboth' >06:02pm</td>
                              <td className='answer margboth'>Date of Completion</td>
                              <td className='time margboth'>{formatDate2(history.completedOn)}</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Modal>

        {/* Accessories Modal */}
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{
            position: 'absolute',
            top: modalPosition.top,
            right: modalPosition.left,
          }}
        >
          <div className='accessoriesBox'>
            <div className='flexbox'>
              <div className='comman' onClick={toggleDrawer("right", true)}>Edit</div>
              <div className='comman' onClick={handleDelete}>Delete</div>
              <div className='comman' onClick={toggleDrawer2("right", true)}>Accessed to</div>
            </div>
          </div>
        </Modal>

        {/* FilterButton */}

        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{
            position: 'absolute',
            top: modalPosition2.top,
            right: modalPosition2.left,
          }}
        >
          <div className='filterBoxpop'>
            <div className="flexouter">
              <div className='filterflex'>
                <div className='filterhead'>Filters</div>
                <div className='filterflex2'>
                  <div className='filtercomman clearAll' onClick={clearAllCheckboxes}>Clear All</div>
                  <div className='filtercomman apply' onClick={applyFilters}>Apply</div>
                </div>
              </div>
              <div className='filterline'></div>
              <div className='filterflex' onClick={toggle}>
                <div className='filterBased'>
                  Department
                </div>
                <div className='filterflex2'>
                  <div> {checkedDeptCount}</div>
                  <div><FontAwesomeIcon icon={toggleclick ? faChevronDown : faChevronUp} /></div>
                </div>
              </div>
              {/* Department dropdown */}
              <div className={toggleclick ? "dept hidden" : "dept"} id="ques">
                {/* Add Questions link */}
                {getAllDept.map((name) => (
                  <p>
                    <input type='checkbox'
                      value={name.departmentName}
                      checked={name.checked}
                      onChange={(event) => handleCheckboxChange(event, name.id)} /> {name.departmentName}
                  </p>
                ))}
              </div>

              <div className='filterline'></div>
              {/* Topics */}
              <div className='filterflex' onClick={TopicToggle}>
                <div className='filterBased'>
                  Topic
                </div>
                <div className='filterflex2'>
                  <div>No</div>
                  <div><FontAwesomeIcon icon={topicToggleclick ? faChevronDown : faChevronUp} /></div>
                </div>
              </div>
              {/* Topic dropdown */}
              <div className={topicToggleclick ? "dept hidden" : "dept"} id="ques">
                {/* Add Questions link */}
                {getTopic.map((topics, index) => (
                  <p key={index}>
                    <input type='checkbox' value={topics} checked={selectedTopics.includes(topics)}
                      onChange={(event) => handleTopicCheckboxChange(event, topics)} /> {topics}
                  </p>
                ))}
              </div>
              <div className='filterline'></div>

              {/* Skill Level */}
              <div className='filterflex' onClick={SkillToggle}>
                <div className='filterBased'>
                  Skill
                </div>
                <div className='filterflex2 height'>
                  <div>No</div>
                  <div><FontAwesomeIcon icon={skillToggleclick ? faChevronDown : faChevronUp} /></div>
                </div>
              </div>
              {/* Topic dropdown */}
              <div className={skillToggleclick ? "dept hidden" : "dept"} id="ques">
                {/* Add skill link */}
                {getSkill.map((name) => (
                  <p key={name.id}>

                    <input type='checkbox' value={name.skillLevel} checked={selectedSkill === name.skillLevel}
                      onChange={handleSkillChange} /> {name.skillLevel}

                  </p>
                ))}
              </div>
              <div className='filterline'></div>
            </div>
          </div>
        </Modal>

        {/* Do you want to delete */}

        <Modal
          open={open4}
          onClose={handleClose4}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className='deleteBox'>
            <div className='floatRight' onClick={handleClose4}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2ZM16 14.302L12.748 11.05C12.5228 10.8248 12.2174 10.6983 11.899 10.6983C11.5806 10.6983 11.2752 10.8248 11.05 11.05C10.8248 11.2752 10.6983 11.5806 10.6983 11.899C10.6983 12.2174 10.8248 12.5228 11.05 12.748L14.302 16L11.05 19.252C10.9385 19.3635 10.8501 19.4959 10.7897 19.6415C10.7294 19.7872 10.6983 19.9433 10.6983 20.101C10.6983 20.2587 10.7294 20.4148 10.7897 20.5605C10.8501 20.7061 10.9385 20.8385 11.05 20.95C11.1615 21.0615 11.2939 21.1499 11.4395 21.2103C11.5852 21.2706 11.7413 21.3017 11.899 21.3017C12.0567 21.3017 12.2128 21.2706 12.3585 21.2103C12.5041 21.1499 12.6365 21.0615 12.748 20.95L16 17.698L19.252 20.95C19.3635 21.0615 19.4959 21.1499 19.6415 21.2103C19.7872 21.2706 19.9433 21.3017 20.101 21.3017C20.2587 21.3017 20.4148 21.2706 20.5605 21.2103C20.7061 21.1499 20.8385 21.0615 20.95 20.95C21.0615 20.8385 21.1499 20.7061 21.2103 20.5605C21.2706 20.4148 21.3017 20.2587 21.3017 20.101C21.3017 19.9433 21.2706 19.7872 21.2103 19.6415C21.1499 19.4959 21.0615 19.3635 20.95 19.252L17.698 16L20.95 12.748C21.0615 12.6365 21.1499 12.5041 21.2103 12.3585C21.2706 12.2128 21.3017 12.0567 21.3017 11.899C21.3017 11.7413 21.2706 11.5852 21.2103 11.4395C21.1499 11.2939 21.0615 11.1615 20.95 11.05C20.8385 10.9385 20.7061 10.8501 20.5605 10.7897C20.4148 10.7294 20.2587 10.6983 20.101 10.6983C19.9433 10.6983 19.7872 10.7294 19.6415 10.7897C19.4959 10.8501 19.3635 10.9385 19.252 11.05L16 14.302Z" fill="#242D35" />
              </svg>
            </div>
            <div className='deleteCentre'>
              <div><img src={deleteGif} alt='Delete' className='dustBin'></img></div>
              <div className='deleteHead'>Do you Want to Delete</div>
              <div className='deleteBody'>Do you want to delete this name from the assessment List</div>
              <div className='deleteBody marginbottom'>Click Confirm to Delete</div>
            </div>
            <div className='delLine'></div>
            <div className='deleteflex'>
              <div className='cancelDelete' onClick={handleClose4}>Cancel</div>
              <div className='confirmDelete' onClick={confirmDelete}>Confirm</div>
            </div>
          </div>
        </Modal>

        {/* Edit Button */}

        <div>
          <Drawer
            anchor="right" // Set the anchor to "right" for the drawer to appear from the right side
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiBackdrop-root.MuiModal-backdrop': {
                backgroundColor: '#143b6f48',
              },
            }}
          >
            <div className='EditSidebar'>
              <div className='createFlex'>
                <div className='create'>Update Employee Assessment</div>
                <div onClick={closeEdit} className='cursor'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2ZM16 14.302L12.748 11.05C12.5228 10.8248 12.2174 10.6983 11.899 10.6983C11.5806 10.6983 11.2752 10.8248 11.05 11.05C10.8248 11.2752 10.6983 11.5806 10.6983 11.899C10.6983 12.2174 10.8248 12.5228 11.05 12.748L14.302 16L11.05 19.252C10.9385 19.3635 10.8501 19.4959 10.7897 19.6415C10.7294 19.7872 10.6983 19.9433 10.6983 20.101C10.6983 20.2587 10.7294 20.4148 10.7897 20.5605C10.8501 20.7061 10.9385 20.8385 11.05 20.95C11.1615 21.0615 11.2939 21.1499 11.4395 21.2103C11.5852 21.2706 11.7413 21.3017 11.899 21.3017C12.0567 21.3017 12.2128 21.2706 12.3585 21.2103C12.5041 21.1499 12.6365 21.0615 12.748 20.95L16 17.698L19.252 20.95C19.3635 21.0615 19.4959 21.1499 19.6415 21.2103C19.7872 21.2706 19.9433 21.3017 20.101 21.3017C20.2587 21.3017 20.4148 21.2706 20.5605 21.2103C20.7061 21.1499 20.8385 21.0615 20.95 20.95C21.0615 20.8385 21.1499 20.7061 21.2103 20.5605C21.2706 20.4148 21.3017 20.2587 21.3017 20.101C21.3017 19.9433 21.2706 19.7872 21.2103 19.6415C21.1499 19.4959 21.0615 19.3635 20.95 19.252L17.698 16L20.95 12.748C21.0615 12.6365 21.1499 12.5041 21.2103 12.3585C21.2706 12.2128 21.3017 12.0567 21.3017 11.899C21.3017 11.7413 21.2706 11.5852 21.2103 11.4395C21.1499 11.2939 21.0615 11.1615 20.95 11.05C20.8385 10.9385 20.7061 10.8501 20.5605 10.7897C20.4148 10.7294 20.2587 10.6983 20.101 10.6983C19.9433 10.6983 19.7872 10.7294 19.6415 10.7897C19.4959 10.8501 19.3635 10.9385 19.252 11.05L16 14.302Z" fill="#242D35" />
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
                label={!isInputActive2 ? 'Enter Assessment ID' : ''}
                InputLabelProps={{
                  shrink: true,
                }}
                value={editRow.assessmentId || ''}
                disabled
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
                  <InputLabel id="demo-simple-select-label" shrink={!isInputActive2}>Department</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={editRow.department || ''}
                    label={!isInputActive2 ? 'Department' : ''}
                    // label={!editRow.department ? 'Department' : ''}
                    onChange={edithandleChange}
                    open={editOpen}
                    onOpen={edithandleOpen2}
                    onClose={edithandleClose2}
                    sx={{ width: '654px' }}
                    disabled
                  >
                    {editRow.department && (
                      <MenuItem value={editRow.department}>
                        {editRow.department}
                      </MenuItem>
                    )}
                    <MenuItem value="">
                      <TextField
                        sx={{ width: '100%', border: 'none', '& .MuiInputBase-input.MuiOutlinedInput-input': { padding: '0px 10px', color: '#1589CC' } }}
                        placeholder="+ Enter new department"
                        value={department}
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
                        value={name}
                        style={getStyles(name, departmentName, theme)}
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
                    checked={editRow.skills === "Basic"}
                    disabled
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
                    checked={editRow.skills === "Intermediate"}
                    labelPlacement='start'
                    disabled
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
                    checked={editRow.skills === "Advanced"}
                    disabled
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
                    checked={editRow.skills === "upskill"}
                    disabled
                  />
                </RadioGroup>
              </FormControl>

              <div>
                <FormControl sx={{ marginLeft: '48px', width: '654px', marginTop: '36px' }}>
                  <InputLabel id="demo-multiple-checkbox-label" shrink={!isInputActive2}>Employee profile</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    value={editRow.name || ''}
                    label={!isInputActive2 ? 'Employee profile' : ''}
                    onChange={handlePersonChange}
                    input={<OutlinedInput label="Employee profile" />}
                    renderValue={renderValue}
                    MenuProps={MenuProps}
                    disabled
                  >
                    {editRow.name &&
                      editRow.name.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          {/* Add additional components for each name if needed */}
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    {getAllEmp.map((option) => (
                      <MenuItem key={option.name} value={option.name}>
                        <Checkbox checked={personName.indexOf(option.name) > -1} />
                        <ListItemAvatar>
                          <div className='imageDiv'><img src={require(`../assets/${option.name}.jpg`)} className='image'></img></div>
                        </ListItemAvatar>
                        <ListItemText primary={option.name} />
                      </MenuItem>
                    ))}
                  </Select>

                </FormControl>
              </div>
              <div>
                <FormControl sx={{ marginLeft: '48px', width: '654px', marginTop: '36px' }}>
                  <InputLabel id="demo-multiple-checkbox-label" shrink={!isInputActive2}>Topics</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    value={editRow.topicName || []}
                    label={!isInputActive2 ? 'Topics' : ''}
                    onChange={handleTopicChange}
                    onOpen={() => setRemoveSelected(true)}
                    onClose={() => setRemoveSelected(false)}
                    input={<OutlinedInput label="Topics" />}
                    renderValue={renderValue}
                    MenuProps={MenuProps}
                    disabled
                  >
                    <MenuItem>
                      <TextField
                        sx={{ width: '100%', border: 'none', '& .MuiInputBase-input.MuiOutlinedInput-input': { padding: '0px 15px', color: '#1589CC' } }}
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
                    {topics.map((name) => (
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
                    <TextField id="outlined-basic" label={'Number of Questions'} variant="outlined" value={editRow.numberOfQuestion} disabled />

                  </Box>
                  <p className='questionsPara'>Time alloted for a question is 90 sec.</p>

                </div>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ width: '310px', marginTop: '36px' }}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label={!editRow.dateOfCompletion ? formatDate3(editRow.dateOfCompletion) : 'Date of Completion'}
                        sx={{ width: '300px', marginTop: '28px', marginLeft: '54px' }}
                        format="DD/MM/YYYY"
                        value={updateDateValue}
                        onChange={handleDateChange}
                        multiple
                      />
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
                  multiline
                  rows={5}
                  variant="outlined"
                  value={editRow.description} // Make sure to use value prop for TextField
                  disabled
                />
              </Box>
              <div className='mailButtons'>
                <Stack spacing={2} direction="row">
                  <Button className='cancelButton' onClick={toggleDrawer(false)} variant="text">Cancel</Button>
                  <Button className='sendButton' variant="outlined" onClick={updateDate}>Update</Button>
                </Stack>
              </div>
              <img src={kaniniLogo} className='formLogo' height='240px' width='240px' alt="Kanini Logo" />


            </div>
          </Drawer>
        </div>
        {/* Updated Successfully */}
        <Modal
          open={open5}
          onClose={handleClose5}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className='updateBody'>
            <div onClick={updateClose} className='crossUp'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2ZM16 14.302L12.748 11.05C12.5228 10.8248 12.2174 10.6983 11.899 10.6983C11.5806 10.6983 11.2752 10.8248 11.05 11.05C10.8248 11.2752 10.6983 11.5806 10.6983 11.899C10.6983 12.2174 10.8248 12.5228 11.05 12.748L14.302 16L11.05 19.252C10.9385 19.3635 10.8501 19.4959 10.7897 19.6415C10.7294 19.7872 10.6983 19.9433 10.6983 20.101C10.6983 20.2587 10.7294 20.4148 10.7897 20.5605C10.8501 20.7061 10.9385 20.8385 11.05 20.95C11.1615 21.0615 11.2939 21.1499 11.4395 21.2103C11.5852 21.2706 11.7413 21.3017 11.899 21.3017C12.0567 21.3017 12.2128 21.2706 12.3585 21.2103C12.5041 21.1499 12.6365 21.0615 12.748 20.95L16 17.698L19.252 20.95C19.3635 21.0615 19.4959 21.1499 19.6415 21.2103C19.7872 21.2706 19.9433 21.3017 20.101 21.3017C20.2587 21.3017 20.4148 21.2706 20.5605 21.2103C20.7061 21.1499 20.8385 21.0615 20.95 20.95C21.0615 20.8385 21.1499 20.7061 21.2103 20.5605C21.2706 20.4148 21.3017 20.2587 21.3017 20.101C21.3017 19.9433 21.2706 19.7872 21.2103 19.6415C21.1499 19.4959 21.0615 19.3635 20.95 19.252L17.698 16L20.95 12.748C21.0615 12.6365 21.1499 12.5041 21.2103 12.3585C21.2706 12.2128 21.3017 12.0567 21.3017 11.899C21.3017 11.7413 21.2706 11.5852 21.2103 11.4395C21.1499 11.2939 21.0615 11.1615 20.95 11.05C20.8385 10.9385 20.7061 10.8501 20.5605 10.7897C20.4148 10.7294 20.2587 10.6983 20.101 10.6983C19.9433 10.6983 19.7872 10.7294 19.6415 10.7897C19.4959 10.8501 19.3635 10.9385 19.252 11.05L16 14.302Z" fill="#242D35" />
              </svg>
            </div>
            <div className='divcenter'>
              <img src={TickGif} className='imgtick'></img>
            </div>
            <div className='updated'>Updated Successfully</div>
          </div>
        </Modal>

        {/* Accessed To */}
        <div>
          <Drawer
            anchor="right" // Set the anchor to "right" for the drawer to appear from the right side
            open={isDrawerOpen2}
            onClose={toggleDrawer2(false)}
            sx={{
              '& .MuiBackdrop-root.MuiModal-backdrop': {
                backgroundColor: '#143b6f48',
              },
            }}
          >
            <div className='EditSidebar'>
              <div className='createFlex'>
                <div className='create'>Create Employee Assessment</div>
                <div onClick={closeEdit} className='cursor'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2ZM16 14.302L12.748 11.05C12.5228 10.8248 12.2174 10.6983 11.899 10.6983C11.5806 10.6983 11.2752 10.8248 11.05 11.05C10.8248 11.2752 10.6983 11.5806 10.6983 11.899C10.6983 12.2174 10.8248 12.5228 11.05 12.748L14.302 16L11.05 19.252C10.9385 19.3635 10.8501 19.4959 10.7897 19.6415C10.7294 19.7872 10.6983 19.9433 10.6983 20.101C10.6983 20.2587 10.7294 20.4148 10.7897 20.5605C10.8501 20.7061 10.9385 20.8385 11.05 20.95C11.1615 21.0615 11.2939 21.1499 11.4395 21.2103C11.5852 21.2706 11.7413 21.3017 11.899 21.3017C12.0567 21.3017 12.2128 21.2706 12.3585 21.2103C12.5041 21.1499 12.6365 21.0615 12.748 20.95L16 17.698L19.252 20.95C19.3635 21.0615 19.4959 21.1499 19.6415 21.2103C19.7872 21.2706 19.9433 21.3017 20.101 21.3017C20.2587 21.3017 20.4148 21.2706 20.5605 21.2103C20.7061 21.1499 20.8385 21.0615 20.95 20.95C21.0615 20.8385 21.1499 20.7061 21.2103 20.5605C21.2706 20.4148 21.3017 20.2587 21.3017 20.101C21.3017 19.9433 21.2706 19.7872 21.2103 19.6415C21.1499 19.4959 21.0615 19.3635 20.95 19.252L17.698 16L20.95 12.748C21.0615 12.6365 21.1499 12.5041 21.2103 12.3585C21.2706 12.2128 21.3017 12.0567 21.3017 11.899C21.3017 11.7413 21.2706 11.5852 21.2103 11.4395C21.1499 11.2939 21.0615 11.1615 20.95 11.05C20.8385 10.9385 20.7061 10.8501 20.5605 10.7897C20.4148 10.7294 20.2587 10.6983 20.101 10.6983C19.9433 10.6983 19.7872 10.7294 19.6415 10.7897C19.4959 10.8501 19.3635 10.9385 19.252 11.05L16 14.302Z" fill="#242D35" />
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
                label={!isInputActive2 ? 'Enter Assessment ID' : ''}
                InputLabelProps={{
                  shrink: true,
                }}
                value={editRow.assessmentId || ''}
                disabled
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
                  <InputLabel id="demo-simple-select-label" shrink={!isInputActive2}>Department</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={editRow.department || ''}
                    label={!isInputActive2 ? 'Department' : ''}
                    // label={!editRow.department ? 'Department' : ''}
                    onChange={edithandleChange}
                    open={editOpen}
                    onOpen={edithandleOpen2}
                    onClose={edithandleClose2}
                    sx={{ width: '654px' }}
                    disabled
                  >
                    {editRow.department && (
                      <MenuItem value={editRow.department}>
                        {editRow.department}
                      </MenuItem>
                    )}
                    <MenuItem value="">
                      <TextField
                        sx={{ width: '100%', border: 'none', '& .MuiInputBase-input.MuiOutlinedInput-input': { padding: '0px 10px', color: '#1589CC' } }}
                        placeholder="+ Enter new department"
                        value={department}
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
                        value={name}
                        style={getStyles(name, departmentName, theme)}
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
                    checked={editRow.skills === "Basic"}
                    disabled
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
                    checked={editRow.skills === "Intermediate"}
                    labelPlacement='start'
                    disabled
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
                    checked={editRow.skills === "Advanced"}
                    disabled
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
                    checked={editRow.skills === "upskill"}
                    disabled
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
                  </Select>

                </FormControl>
              </div>
              <div>
                <FormControl sx={{ marginLeft: '48px', width: '654px', marginTop: '36px' }}>
                  <InputLabel id="demo-multiple-checkbox-label" shrink={!isInputActive2}>Topics</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={editRow.topicName || []}
                    label={!isInputActive2 ? 'Topics' : ''}
                    onChange={handleTopicChange}
                    input={<OutlinedInput label="Topics" />}
                    renderValue={renderValue}
                    MenuProps={MenuProps}
                    disabled
                  >
                    <MenuItem>
                      <TextField
                        sx={{ width: '100%', border: 'none', '& .MuiInputBase-input.MuiOutlinedInput-input': { padding: '0px 15px', color: '#1589CC' } }}
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
                    {topics.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={topicName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
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
                    <TextField id="outlined-basic" label={'Total Questions'} variant="outlined" value={questionNo} onChange={handleQuestionNoChange} />
                  </Box>
                  <p className='questionsPara'>Time alloted for a question is 90 sec.</p>

                </div>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ width: '310px', marginTop: '36px' }}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label={'Date of Completion'}
                        sx={{ width: '300px', marginTop: '28px', marginLeft: '54px' }}
                        format="DD/MM/YYYY"
                        value={updateDateValue}
                        onChange={handleDateChange}
                        multiple
                      />
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
                  multiline
                  rows={5}
                  variant="outlined"
                  value={editRow.description} // Make sure to use value prop for TextField
                  disabled
                />
              </Box>
              <div className='mailButtons'>
                <Stack spacing={2} direction="row">
                  <Button className='cancelButton' onClick={toggleDrawer2(false)} variant="text">Cancel</Button>
                  <Button className='sendButton' variant="outlined" onClick={postUserAssessment}>Send Mail</Button>
                </Stack>
              </div>
              <img src={kaniniLogo} className='formLogo' height='240px' width='240px' alt="Kanini Logo" />
            </div>
          </Drawer>
        </div>


        {/* Image bottom */}
        <div className='bottomImage'>
          <svg xmlns="http://www.w3.org/2000/svg" width="179" height="208" viewBox="0 0 179 208" fill="none">
            <path d="M43.4851 1.82167C33.9795 4.36869 25.4406 9.66943 18.9481 17.0536C12.4556 24.4377 8.30117 33.5737 7.01016 43.3061C5.71914 53.0385 7.34952 62.9302 11.6951 71.7304C16.0407 80.5306 22.9064 87.8441 31.4239 92.7459C39.9414 97.6477 49.7281 99.9178 59.5466 99.2691C69.3651 98.6203 78.7742 95.0818 86.5842 89.1011C94.3943 83.1205 100.254 74.9661 103.423 65.6694C106.593 56.3726 106.928 46.351 104.388 36.8717C100.982 24.1604 92.6524 13.3265 81.2308 6.75337C69.8092 0.180218 56.2317 -1.59377 43.4851 1.82167ZM64.0327 78.5064C58.3294 80.0346 52.3022 79.842 46.7133 77.9528C41.1245 76.0636 36.225 72.5628 32.6345 67.893C29.0439 63.2232 26.9236 57.5942 26.5415 51.7178C26.1595 45.8414 27.533 39.9815 30.4882 34.8792C33.4435 29.7769 37.8478 25.6613 43.1443 23.0528C48.4407 20.4444 54.3914 19.4603 60.2438 20.2249C66.0962 20.9896 71.5875 23.4687 76.0233 27.3487C80.459 31.2287 83.64 36.3353 85.164 42.0229C87.2076 49.6497 86.1293 57.7781 82.1665 64.6201C78.2036 71.4621 71.6807 76.4572 64.0327 78.5064ZM178.796 160.768L176.227 151.182C171.459 133.386 159.797 118.219 143.807 109.016C127.816 99.814 108.808 97.3304 90.9625 102.112L52.5136 112.414C34.6684 117.196 19.4483 128.851 10.2015 144.816C0.954788 160.78 -1.56113 179.747 3.20724 197.543L5.77569 207.128L25.0001 201.977L22.4317 192.391C19.0257 179.68 20.8228 166.133 27.4276 154.729C34.0324 143.326 44.9039 135.001 57.6505 131.586L96.0994 121.283C108.846 117.868 122.424 119.642 133.845 126.215C145.267 132.788 153.597 143.622 157.003 156.333L159.571 165.919L178.796 160.768Z" fill="url(#paint0_linear_142_4301)" />
            <defs>
              <linearGradient id="paint0_linear_142_4301" x1="43.4851" y1="1.82167" x2="107.319" y2="235.862" gradientUnits="userSpaceOnUse">
                <stop stop-color="#BAD881" />
                <stop offset="1" stop-color="#48B8E6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Create Assessment call */}
        <div>{isEmployeeDrawerOpen && <EmployeeAssessment onClose={handleEmployeeDrawerClose} />}</div>
      </div>
    </>
  );
};

export default EmpAssessment;


function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ marginLeft: '20px', display: "flex" }}>
        <div className='circularBar' style={{}}>{props.children}</div>
        {/* <div style={{ width: "70%" }}>
          <p>{props.description}</p>
        </div> */}
      </div>
    </div>
  );
}



function getStyles(getAllDept, departmentName, theme) {
  return {
    fontWeight:
      departmentName.indexOf(getAllDept) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}