import React, { useState } from 'react';
import styles from "./Section.module.css";
import Button from '@mui/material/Button';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Section({title,data,type}) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if(type==="song"){
    var jazzSongs = data.filter((ele) =>{
      return ele.genre.label === "Jazz"
    });

    var rockSongs = data.filter((ele) =>{
      return ele.genre.label === "Rock"
    });

    var popSongs = data.filter((ele) =>{
      return ele.genre.label === "Pop"
    });

    var bluesSongs = data.filter((ele) =>{
      return ele.genre.label === "Blues"
    });

    
  }
   const [toggleBtn,setToggleBtn] = useState(false);
   const [toggleText,setToggleText] = useState('Show All');

   const handleToggle = () =>{
    if(toggleBtn){
      setToggleText('Show All');
    }else{
      setToggleText('Collapse');
    }
    setToggleBtn(!toggleBtn);
   }

   if(type==="album"){
    return (
      <div className={styles.albumWrapper}>
      <div className={styles.title}>
          <p className={styles.heading}>{title}</p>
          <Button variant="text" className={styles.button1} onClick={handleToggle}>{toggleText}</Button>
      </div>
      <div className={styles.albumcards}>
       { toggleBtn ?  data.map((item) => <Card data1={item} type={"album"}/>) 
         : <Carousel data2={data} type={"album"}/>}
      </div>
  </div>
    )
   }else{
    return (
      <div className={styles.songWrapper}>
      <div className={styles.albumWrapper}>
      <div className={styles.title}>
          <p className={styles.heading1}>{title}</p>
      </div>
      <div className={styles.albumcards}>
      <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 0, borderColor: 'divider' ,paddingBottom: "20px"}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="white" sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: '#34C94B',
          borderRadius: '2px',
        },
      }}>
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Rock" {...a11yProps(1)} />
          <Tab label="Pop" {...a11yProps(2)} />
          <Tab label="Jazz" {...a11yProps(3)} />
          <Tab label="Blue" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Carousel data2={data} type={"song"}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Carousel data2={rockSongs} type={"song"}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Carousel data2={popSongs} type={"song"}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Carousel data2={jazzSongs} type={"song"}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <Carousel data2={bluesSongs} type={"song"}/>
      </CustomTabPanel>
    </Box>
      </div>
  </div>
  </div>
  )
   }
}

export default Section;