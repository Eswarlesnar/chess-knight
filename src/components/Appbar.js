import { AppBar , Toolbar , Box, Typography, IconButton , Popover} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";

const Appbar = () => {
    const [infoAnchorElement , setInforAnchorElement] = useState(null)
    const openInfoPopOver =(e) =>{
        setInforAnchorElement(e.currentTarget)
    }
    const closeInfoPopover = () =>{
        setInforAnchorElement(null)
    }
    let open = Boolean(infoAnchorElement)
    let id = open ? "simple-popover" : undefined
    return (
        <Box sx = {{flexGrow : "2"}}>
            <AppBar sx={{background : "transparent"}} elevation = {0} variant = "outlined" position="static" >
                <Toolbar> 
                    <Typography variant = "h4" sx ={{color : "grey"}}>
                        Chess Moves
                    </Typography>
                    <IconButton sx ={{marginLeft:"auto", marginRight :"2em"}}   onClick = {e => {openInfoPopOver(e)}}>
                        <InfoIcon/>
                    </IconButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={infoAnchorElement}
                        onClose ={closeInfoPopover}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                       
                        >
                        <Typography sx={{ p: 2 , width : "300px", background : "rgba(228, 241, 227, 0.7)"  ,color : "grey" , fontWeight :"600"}}  >Welcome to chess moves.
                        <p> Click on any square in chess board to get possible moves of a Knight.</p>
                        <p>Once you click you will get possible moves.</p>
                        <p>Click again on a square to deselect your selection</p>
                        <p>Repeat .....</p>
                        
                        </Typography>
                    </Popover>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Appbar
