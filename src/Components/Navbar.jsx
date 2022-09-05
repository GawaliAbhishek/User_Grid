import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CardScreen from './CardScreen';
import Loder from './Loder'




export default function Navbar() {
  let[isLoaded,setisLoded]=React.useState(false);
  let [items, setItems] = React.useState([]);
  const fetchData = async () => {
    console.log("in Fetch Data");
    const url1 = "https://reqres.in/api/users?page=1";
    const response = await fetch(url1);
    const JSON = await response.json();
    console.log(JSON);
    
    setItems(JSON.data);

}
  const LoadData=async()=>{
    console.log("In Load Data");
    await fetchData();
    setisLoded(true);
  }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#7ebffc',borderShadow: "0 1px 2px rgba(231, 224, 224, 0.995), 0 2px 4px rgba(211, 198, 198, 0.963), 0 4px 8px rgba(211, 198, 198, 0.963), 0 8px 16px rgba(211, 198, 198, 0.963), 0 16px 32px rgba(211, 198, 198, 0.963),0 32px 64px rgba(211, 198, 198, 0.963)"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            style={{color:'black'}}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="black">
            <span style={{fontFamily:'cursive',fontWeight:'600'}}>Gawali Abhishek</span>
          </Typography>
          <Button style={{color:'black'}} onClick={LoadData}>Get Users</Button>
        </Toolbar>
      </AppBar>
    </Box>
    {isLoaded  ? <CardScreen data={items}/>  : <div style={{marginTop:'5rem'}}><Loder/></div>}
    
    </>
  );
}

 