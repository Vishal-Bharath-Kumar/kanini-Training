import React from 'react';
import { faBookmark, faClock, faClockFour, faEnvelope, faMapMarker, faMobile, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import img1 from '../assets/Img2.png'
import img2 from '../assets/Skill Level_ Begineer.png'
import '../components/EmployeeManagement.css'



const EmployeeManagement = () => {
   
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    

    return (

        <div className='commondiv'>
            <div className='leftcard'>
                <Card className='card1' sx={{ borderRadius: 3 }}>
                    <CardContent className='boxsize'>
                        <br />
                        <CardMedia
                            className='image1'
                            image={img1}
                            alt="profileimage"
                        />
                        <br />
                        <Typography variant='h5'  style={{marginLeft:60,padding:10}}>
                            2080-Kalaimathi Kathiravan
                        </Typography>
                        
                        <Typography style={{marginLeft:40,padding:10}}>
                            Junior Associate - IT Application Development
                        </Typography>
                      
                        <CardMedia
                            className='mediaStyle'
                            image={img2}
                            alt="skill_level"
                        />
                        <br />
                        <br />
                        <br />

                        <div className="points">
                            <div className="bg">
                                <p className='earnedpoints'>Earned Points</p>
                                <p className='earned'>1257</p>
                                <div className="stroke"></div>
                                <p className='TestTaken'>Earned Points</p>
                                <p className='test'>15</p>

                            </div>
                        </div>

                        <br/>
                        <br />


                        <div className='details'>
                            <p className='contact'>Contact Details</p>
                            <div className='combine'>
                                <div><FontAwesomeIcon icon={faMapMarker} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>Coimbatore</div>
                            </div>
                            <div className='combine'>
                                <div><FontAwesomeIcon icon={faMobile} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>+91 98674 36879</div>
                            </div>
                            <div className='combine'>
                                <div><FontAwesomeIcon icon={faEnvelope} /></div> &nbsp;&nbsp;&nbsp;&nbsp;
                                <div>Somogyi Adrián@gmail.com</div>
                            </div>
                        </div>

                    </CardContent>
                </Card>
            </div>
            <div className='secondbody'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box >
                            <TabList onChange={handleChange} >
                                <Tab label="Completed Test" value="1" />
                                <Tab label="Ongoing Test" value="2" />
                                <Tab />
                                <Tab />
                                <Tab />
                                <Tab />
                                <Tab />
                                <Tab />
                                <button className='assign'><FontAwesomeIcon icon={faPlus} />  Assign Assignment</button>

                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Card className='card2' sx={{ borderRadius: 2 }}>
                                <CardContent className='boxsize2'>
                                    <div className='combine2'>
                                        <div>
                                            <Typography variant='h5' component="h2" className='mainhead1'>
                                                User-Experience Skill Assessment
                                            </Typography> <br />
                                            <Typography>
                                                Topics : <span>Information Architecture, Information Design , Interaction Design , Mobile UX Design, Patterns & Antipatterns , Portfolio Design.</span>
                                            </Typography>
                                            <hr />
                                            <br />
                                            <div className='assignments'>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faClock} /></div>&nbsp;&nbsp;
                                                    <div>Created On : 27th July 2022</div> 
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faUser} /></div>&nbsp;&nbsp;
                                                    <div>Created By : Sachin Borkar</div>
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faClockFour} /></div>&nbsp;&nbsp;
                                                    <div>Submitted On : 8th Aug 2022</div>    
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faBookmark} /></div>&nbsp;&nbsp;
                                                    <div>Result : Passed</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='viewres'> View Result</button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <br />

                            <Card className='card2' sx={{ borderRadius: 2 }}>
                                <CardContent className='boxsize2'>
                                    <div className='combine2'>
                                        <div>
                                            <Typography variant='h5' component="h2" className='mainhead1'>
                                                User-Experience Skill Assessment
                                            </Typography> <br />
                                            <Typography>
                                                Topics : <span>Information Architecture, Information Design , Interaction Design , Mobile UX Design, Patterns & Antipatterns , Portfolio Design.</span>
                                            </Typography>
                                            <hr />
                                            <br />
                                            <div className='assignments'>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faClock} /></div>&nbsp;&nbsp;
                                                    <div>Created On : 27th July 2022</div> 
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faUser} /></div>&nbsp;&nbsp;
                                                    <div>Created By : Sachin Borkar</div>
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faClockFour} /></div>&nbsp;&nbsp;
                                                    <div>Submitted On : 8th Aug 2022</div>    
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faBookmark} /></div>&nbsp;&nbsp;
                                                    <div>Result : Passed</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='viewres'> View Result</button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <br />

                            <Card className='card2' sx={{ borderRadius: 2 }}>
                                <CardContent className='boxsize2'>
                                    <div className='combine2'>
                                        <div>
                                            <Typography variant='h5' component="h2" className='mainhead1'>
                                                User-Experience Skill Assessment
                                            </Typography> <br />
                                            <Typography>
                                                Topics : <span>Information Architecture, Information Design , Interaction Design , Mobile UX Design, Patterns & Antipatterns , Portfolio Design.</span>
                                            </Typography>
                                            <hr />
                                            <br />
                                            <div className='assignments'>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faClock} /></div>&nbsp;&nbsp;
                                                    <div>Created On : 27th July 2022</div> 
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faUser} /></div>&nbsp;&nbsp;
                                                    <div>Created By : Sachin Borkar</div>
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faClockFour} /></div>&nbsp;&nbsp;
                                                    <div>Submitted On : 8th Aug 2022</div>    
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faBookmark} /></div>&nbsp;&nbsp;
                                                    <div>Result : Passed</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='viewres'> View Result</button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabPanel>
                        <TabPanel value="2">

                        <Card className='card2' sx={{ borderRadius: 2 }}>
                                <CardContent className='boxsize2'>
                                    <div className='combine2'>
                                        <div>
                                            <Typography variant='h5' component="h2" className='mainhead1'>
                                                User-Experience Skill Assessment
                                            </Typography> <br />
                                            <Typography>
                                                Topics : <span>Information Architecture, Information Design , Interaction Design , Mobile UX Design, Patterns & Antipatterns , Portfolio Design.</span>
                                            </Typography>
                                            <hr />
                                            <br />
                                            <div className='assignments'>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faClock} /></div>&nbsp;&nbsp;
                                                    <div>Created On : 27th July 2022</div> 
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faUser} /></div>&nbsp;&nbsp;
                                                    <div>Created By : Sachin Borkar</div>
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faClockFour} /></div>&nbsp;&nbsp;
                                                    <div>Submitted On : 8th Aug 2022</div>    
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faBookmark} /></div>&nbsp;&nbsp;
                                                    <div>Result : Passed</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='viewres'> View Result</button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <br />

                            <Card className='card2' sx={{ borderRadius: 2 }}>
                                <CardContent className='boxsize2'>
                                    <div className='combine2'>
                                        <div>
                                            <Typography variant='h5' component="h2" className='mainhead1'>
                                                User-Experience Skill Assessment
                                            </Typography> <br />
                                            <Typography>
                                                Topics : <span>Information Architecture, Information Design , Interaction Design , Mobile UX Design, Patterns & Antipatterns , Portfolio Design.</span>
                                            </Typography>
                                            <hr />
                                            <br />
                                            <div className='assignments'>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faClock} /></div>&nbsp;&nbsp;
                                                    <div>Created On : 27th July 2022</div> 
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faUser} /></div>&nbsp;&nbsp;
                                                    <div>Created By : Sachin Borkar</div>
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faClockFour} /></div>&nbsp;&nbsp;
                                                    <div>Submitted On : 8th Aug 2022</div>    
                                                </div>
                                                <div className='times'>
                                                    <div><FontAwesomeIcon icon={faBookmark} /></div>&nbsp;&nbsp;
                                                    <div>Result : Passed</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='viewres'> View Result</button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    )
}

export default EmployeeManagement