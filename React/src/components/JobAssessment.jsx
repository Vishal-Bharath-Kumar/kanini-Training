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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import deleteGif from '../assets/delete.gif';


/*style*/


const tablefetch = {
  border: 'none', textAlign: 'center', fontSize: '12px',
  color: '#0C1116',
  fontFamily: 'Manrope',
  fontSize: '13px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
}


const tablehead = {
  border: 'none', position: 'relative',
  color: '#0C1116',
  fontFamily: 'Manrope',
  fontSize: '13px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '21px',
  width: '172px',
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




const JobAssessment = () => {

  const [jobseeker, setJobseeker] = useState([]);
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
  //animated circle score
  const [progressValue, setProgressValue] = useState(0);
  const [latestProgressValue, setLatestProgressValue] = useState(0); // Add new state variable 
  const [getAllDept, setNewDept] = useState([]);
  const [selectDept, setSelectDept] = useState([]);//store the checked id of the department
  const [getTopic, setNewTopic] = useState([]);
  const [getSkill, setNewSkill] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [value, setValue] = React.useState('1');//Tab Change
  const [open, setOpen] = React.useState(false);//test result model
  const [departmentName, setdepartmentName] = React.useState([]);
  const [open3, setOpen3] = React.useState(false);//Filter
  const [modalPosition2, setModalPosition2] = useState({ top: 0, left: 0 });//Filter  
  const [open2, setOpen2] = React.useState(false);//Accessories
  const [open4, setOpen4] = React.useState(false);//Delete
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });//Accessories
  const [isFilterVisible, setIsFilterVisible] = useState(true);//hide filter
  const [toggleclick, setToggleClick] = useState(true);//toggle in filter
  const [click, setClick] = useState(true); // Toggle for Department section
  const [click2, setClick2] = useState(true); // Toggle for Topic section
  const [click3, setClick3] = useState(true); // Toggle for Skill section
  const [anchor, setAnchor] = React.useState('right');//Edit Button
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);//Edit Button
  const [topicToggleclick, setTopicToggleClick] = useState(true);//toggle in filter
  const [skillToggleclick, setSkillToggleClick] = useState(true);//toggle in filter
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [showPaginationDiv, setShowPaginationDiv] = useState(true);
  const [filteredOutput, setFilteredOutput] = useState([]);
  const [selectedRow, setSelectedRow] = useState();//select particular table row to delete/edit
  const [afterDelete, setAfterDelete] = useState([]);
  const [afterDeleteRecord, setAfterDeleteRecord] = useState([]);

  const jobFetch = () => {
    fetch("https://localhost:7281/HistoryTable/HistoryDetails?roleName=JobSeeker", {
      method: "GET"
    })
      .then(async (data) => {
        const myData = await data.json();
        console.log(myData);
        setJobseeker(myData);
        console.log(jobseeker);
      });
  };

  //get all on render
  useEffect(() => {
    jobFetch();
  }, []);

  //fetch all history
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
          console.log(progressValue);
        } else {
          console.error("Invalid data format for history");
        }
        console.log(history);
      });
  };

  //fetching all department
  const fetchDepartment = () => {
    fetch(`https://localhost:7281/HistoryTable/GetAllDepartment`, {
      method: "GET"
    })
      .then(async (data) => {
        const myData = await data.json();
        console.log('mydata'+myData);
        setNewDept(myData)
        console.log(getAllDept);
      });
  }
  //get All skill
  const getAllSkill = () => {
    fetch(`https://localhost:7281/HistoryTable/GetAllSkill`, {
      method: "GET"
    })
      .then(async (data) => {
        const myData = await data.json();
        console.log(myData);
        const filteredData = myData.filter(skill => skill.skillLevel !== 'Upskill');
        setNewSkill(filteredData);
        console.log(getSkill);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

  const deleteRecord = (selectedRow) => {
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
    fetch(`https://localhost:7281/HistoryTable/DeleteAssessmentHistory?HistId=${selectedRow}`, {
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


  useEffect(() => {
    fetchData(history.userAssessmentId); // Fetch data when history.userAssessmentId changes
  }, [history.userAssessmentId]);

  useEffect(() => {
    setProgressValue(latestProgressValue); // Update progressValue with the latest value
  }, [latestProgressValue]);

  // useEffect(() => {
  //   fetchDepartment();
  // }, []);

  useEffect(() => {
    getAllSkill();
  }, [])

  //convert to date format
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };


  //format Date inside historyResultBox
  const formatDate2 = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
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
  const sortedRows = stableSort(jobseeker, getComparator(order, orderBy));
  //For no of rows equal to pagination part
  const slicedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  //Display the table in sorted manner
  const sortedFilteredRows = stableSort(filteredOutput, getComparator(order, orderBy));
  //For no of rows equal to pagination part
  const slicedFilteredRows = sortedFilteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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


  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Additional logic for handleTabChange
    if (newValue === '2') {
      setIsFilterVisible(false);
    } else {
      setIsFilterVisible(true);
    }
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

  const handleOpen2 = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const position = {
      top: rect.bottom,
      left: rect.right
    };
    setModalPosition(position);
    setOpen2(true);
  };

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
    fetchDepartment();
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  //delete
  const handleClose4 = () => {
    setOpen4(false);
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

  //Delete button
  const handleDelete = () => {
    handleClose2();
    // Perform the deletion logic
    console.log(selectedRow);
    setOpen4(true);
  };

  const confirmDelete = () => {
    deleteRecord(selectedRow);
    handleClose4();
  }

  //select button for department
  const theme = useTheme();

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

  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [checkedCount, setCheckedCount] = useState(0);

  //To Get Total Checked in Department
  const handleCheckboxChange = (event, id) => {

    // const updatedDept = getAllDept.map((dept) =>
    //   dept.id === id ? { ...dept, checked: event.target.checked } : dept
    // );
    // setSelectDept(updatedDept);

    // const selectedDepts = updatedDept
    //   .filter((dept) => dept.checked)
    //   .map((dept) => dept.departmentName);
    // console.log(selectedDepts);

    // // Fetch topics for checked departments
    // if (!event.target.checked) {
    //   const url = `https://localhost:7281/HistoryTable/GetTopicsByDepartment?deptlist=${selectedDepts}`;
    //   fetch(url, {
    //     method: "GET",
    //   })
    //     .then(async (data) => {
    //       const myData = await data.json();
    //       console.log(myData);
    //       setNewTopic(myData);
    //       console.log(getTopic);
    //     })
    //     .catch((error) => {
    //       console.log("Error:", error);
    //     });
    // } else {
    //   const url = `https://localhost:7281/HistoryTable/GetTopicsByDepartment?deptlist=${selectedDepts}`;
    //   fetch(url, {
    //     method: "GET",
    //   })
    //     .then(async (data) => {
    //       const myData = await data.json();
    //       console.log(myData);
    //       setNewTopic((prevTopics) => [...prevTopics, ...myData]);
    //       console.log(getTopic);
    //     })
    //     .catch((error) => {
    //       console.log("Error:", error);
    //     });
    // }
    console.log('in');
    const isChecked = event.target.checked;
    const department = getAllDept.find((dept) => dept.id === id);
    console.log('d'+department);

    if (isChecked) {
      // Add the department to the list if it's not already selected
      if (!selectedDepartments.find((dept) => dept.id === id)) {
        setSelectedDepartments((prevDepartments) => [...prevDepartments, department]);
        setCheckedCount((prevCount) => prevCount + 1);
        console.log('sd'+selectedDepartments);

      }
    } else {
      // Remove the department from the list
      setSelectedDepartments((prevDepartments) => prevDepartments.filter((dept) => dept.id !== id));
      setCheckedCount((prevCount) => prevCount - 1);
    }

    console.log(selectedDepartments);
  };

  useEffect(() => {
    const selectedDepartmentNames = selectedDepartments.map((dept) => dept.departmentName);
    const url = `https://localhost:7281/HistoryTable/GetTopicsByDepartment?deptlist=${encodeURIComponent(selectedDepartmentNames.join('&deptlist='))}`;
    fetch(url, {
      method: "GET",
    })
      .then(async (response) => {
        if (response.ok) {
          const myData = await response.json();
          setNewTopic((prevTopic) => [...prevTopic, ...myData]);
        } else {
          throw new Error("Error fetching data.");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [selectedDepartments]);

  // Handle checkbox change for topics
  const [topicCount, setTopicCount] = useState(0);

  const handleTopicCheckboxChange = (event, topic) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      // Add the topic to the list if it's not already selected
      if (!selectedTopics.includes(topic)) {
        setSelectedTopics((prevTopics) => [...prevTopics, topic]);
        setTopicCount((prevCount) => prevCount + 1);
      }
    } else {
      // Remove the topic from the list
      setSelectedTopics((prevTopics) => prevTopics.filter((selectedTopic) => selectedTopic !== topic));
      setTopicCount((prevCount) => prevCount - 1);
    }

    console.log(selectedTopics);
  };

  const [skillCount, setSkillCount] = useState(0);
  // Handle skill change
  const handleSkillChange = event => {
    setSelectedSkill(event.target.value);

    // Update the count of checked skills
    const isChecked = event.target.checked;
    if (isChecked) {
      setSkillCount((prevCount) => prevCount + 1);
    } else {
      setSkillCount((prevCount) => prevCount - 1);
    }
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
    const url = `https://localhost:7281/HistoryTable/FilterByTopic?topiclist=${selectedTopicParams}&skillLevel=${selectedSkill}&roleName=JobSeeker`;
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

  return (

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
            <div className='flexproperty'>
              {isFilterVisible && (
                <div className='filterbox' onClick={(event) => handleOpen3(event)}>
                  <span>
                    <FilterListTwoToneIcon />
                  </span>
                </div>
              )}
              <div className='create-assess'><span className='plus'> <PlusIcon /></span>Create Assessment</div>
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
                      active={orderBy === 'assessmentId'}
                      direction={orderBy === 'assessmentId' ? order : 'asc'}
                      onClick={() => handleSortClick('assessmentId')}
                      IconComponent={ImportExportTwoToneIcon}
                      sx={{
                        '& .MuiTableSortLabel-icon': {
                          opacity: 1,
                          color: 'blue',
                          marginLeft: '15px',// Set the desired color
                        },
                      }}
                    >
                      Assessment ID
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
                    No. of Topics
                    <div className='right-border'></div>
                  </TableCell>

                  <TableCell align="center" sx={tablehead}>
                    <TableSortLabel
                      active={orderBy === 'userEmail'}
                      direction={orderBy === 'userEmail' ? order : 'asc'}
                      onClick={() => handleSortClick('userEmail')}
                      IconComponent={ImportExportTwoToneIcon}
                      sx={{
                        '& .MuiTableSortLabel-icon': {
                          opacity: 1,
                          color: 'blue', // Set the desired color
                          marginLeft: '15px'
                        },
                      }}
                    >
                      Email ID
                    </TableSortLabel>
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
                      <TableCell sx={tablefetch}>
                        <div >
                          {row.assessmentId}
                        </div>
                      </TableCell>
                      <TableCell sx={tablefetch}>{row.department}</TableCell>
                      <TableCell sx={tablefetch}>{row.skills}</TableCell>
                      <TableCell sx={tablefetch}>{row.numberOfTopic}</TableCell>
                      <TableCell sx={tablefetch}>{row.userEmail}</TableCell>
                      <TableCell sx={tablefetch}>
                        <Typography sx={{
                          backgroundColor:
                            row.status === 'Completed' ? '#d6f3e9' : '#fde1e1',
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
                      <TableCell sx={tablefetch}>
                        {row.status === 'Completed' ? (
                          <p className='result' onClick={handleOpen(row.userAssessmentId)}>VIEW RESULT</p>
                        ) : (
                          <p className='result disabled'>VIEW RESULT</p>
                        )}
                      </TableCell>
                      <TableCell sx={{ border: 'none', textAlign: 'center' }}>
                        <MoreVertIcon sx={{ cursor: 'pointer' }} onClick={(event) => handleOpen2(event)} />
                      </TableCell>
                    </TableRow>
                  ))
                ) : (

                  slicedRows.map((row) => (
                    <TableRow key={row.userAssessmentId} >
                      <TableCell sx={tablefetch}>
                        <div >
                          {row.assessmentId}
                        </div>
                      </TableCell>
                      <TableCell sx={tablefetch}>{row.department}</TableCell>
                      <TableCell sx={tablefetch}>{row.skills}</TableCell>
                      <TableCell sx={tablefetch}>{row.numberOfTopic}</TableCell>
                      <TableCell sx={tablefetch}>{row.userEmail}</TableCell>
                      <TableCell sx={tablefetch}>
                        <Typography sx={{
                          backgroundColor:
                            row.status === 'Completed' ? '#d6f3e9' : '#fde1e1',
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
                      <TableCell sx={tablefetch}>
                        {row.status === 'Completed' ? (
                          <p className='result' onClick={handleOpen(row.userAssessmentId)}>VIEW RESULT</p>
                        ) : (
                          <p className='result disabled'>VIEW RESULT</p>
                        )}
                      </TableCell>
                      <TableCell sx={{ border: 'none', textAlign: 'center' }}>
                        <MoreVertIcon sx={{ cursor: 'pointer' }} onClick={(event) => handleOpen2(event)} />
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
                    count={jobseeker.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelDisplayedRows={() => ''} // Hide the displayed rows information
                    backIconButtonProps={{ style: { display: 'none' } }} // Hide the back button
                    nextIconButtonProps={{ style: { display: 'none' } }} // Hide the next button

                    sx={{
                      marginTop: 5
                    }}
                  />
                </div>
                <div>
                  <Pagination
                    count={Math.ceil(jobseeker.length / rowsPerPage)}
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
                      count={jobseeker.length}
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
            <div className='flex-propt'>
              <div className='width'>
                <div className='flex'>
                  <div><BadgeIcon style={{ color: '#1589CC' }} /></div>
                  <div className='moveright'>
                    <div className='head'>JobSeeker Details</div>
                    <div className='name'>{history.name}</div>
                    <table>

                      <tr>
                        <td className='heading'>Email Address</td>
                        <td className='response'>{history.userEmail}</td>
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
                          duration={0}
                          easingFunction={easeQuadInOut}
                        >
                          {value => {
                            const roundedValue = Math.round(progressValue);
                            return (
                              <CircularProgressbar
                                value={value}
                                strokeWidth={6}
                                text={`${roundedValue}%`}
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
                          sx={{ width: '300px' }}
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
            <div className='comman'>Accessed to</div>
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
                <div> {checkedCount}</div>
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
                <div>{topicCount}</div>
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
                <div>{skillCount}</div>
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

      {/* Edit Button */}

      <div>
        <Drawer
          anchor="right" // Set the anchor to "right" for the drawer to appear from the right side
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          <div className='EditSidebar'>
            <div className='createFlex'>
              <div className='create'>Create Employee Assessment</div>
              <div onClick={toggleDrawer(false)} className='cursor'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2ZM16 14.302L12.748 11.05C12.5228 10.8248 12.2174 10.6983 11.899 10.6983C11.5806 10.6983 11.2752 10.8248 11.05 11.05C10.8248 11.2752 10.6983 11.5806 10.6983 11.899C10.6983 12.2174 10.8248 12.5228 11.05 12.748L14.302 16L11.05 19.252C10.9385 19.3635 10.8501 19.4959 10.7897 19.6415C10.7294 19.7872 10.6983 19.9433 10.6983 20.101C10.6983 20.2587 10.7294 20.4148 10.7897 20.5605C10.8501 20.7061 10.9385 20.8385 11.05 20.95C11.1615 21.0615 11.2939 21.1499 11.4395 21.2103C11.5852 21.2706 11.7413 21.3017 11.899 21.3017C12.0567 21.3017 12.2128 21.2706 12.3585 21.2103C12.5041 21.1499 12.6365 21.0615 12.748 20.95L16 17.698L19.252 20.95C19.3635 21.0615 19.4959 21.1499 19.6415 21.2103C19.7872 21.2706 19.9433 21.3017 20.101 21.3017C20.2587 21.3017 20.4148 21.2706 20.5605 21.2103C20.7061 21.1499 20.8385 21.0615 20.95 20.95C21.0615 20.8385 21.1499 20.7061 21.2103 20.5605C21.2706 20.4148 21.3017 20.2587 21.3017 20.101C21.3017 19.9433 21.2706 19.7872 21.2103 19.6415C21.1499 19.4959 21.0615 19.3635 20.95 19.252L17.698 16L20.95 12.748C21.0615 12.6365 21.1499 12.5041 21.2103 12.3585C21.2706 12.2128 21.3017 12.0567 21.3017 11.899C21.3017 11.7413 21.2706 11.5852 21.2103 11.4395C21.1499 11.2939 21.0615 11.1615 20.95 11.05C20.8385 10.9385 20.7061 10.8501 20.5605 10.7897C20.4148 10.7294 20.2587 10.6983 20.101 10.6983C19.9433 10.6983 19.7872 10.7294 19.6415 10.7897C19.4959 10.8501 19.3635 10.9385 19.252 11.05L16 14.302Z" fill="#242D35" />
                </svg>
              </div>
            </div>
            <div>
              <TextField
                helperText="Please enter the title of assessment that help you to manage"
                id="demo-helper-text-aligned"
                label="Enter Assessment ID"

                sx={{
                  margin: '0px 40px 40px 40px',
                  width: '654px',
                  height: '22px'
                }}
              />
            </div>
            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label"
                  sx={{
                    margin: '40px 40px 40px 40px',
                    width: '654px',
                    height: '56px'
                  }}
                >
                  Department</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={departmentName}
                  onChange={departmentChange}
                  label="Select Department"
                  MenuProps={MenuProps}
                  sx={{
                    margin: '40px 50px 40px 30px',
                    width: '654px',
                    height: '56px'
                  }}
                >
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
            </div>
          </div>
        </Drawer>
      </div>

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

    </div>
  );
};

export default JobAssessment;


function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ marginLeft: '20px', display: "flex" }}>
        <div style={{ width: "184px", paddingRight: 4 }}>{props.children}</div>
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