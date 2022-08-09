import { Badge, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';


const ButtonHome = (props: any) => {
    return (
        <IconButton size="large" color="inherit">
            <Badge badgeContent={0} color="error">
                <HomeIcon />
            </Badge>
        </IconButton>
    );
};

export default ButtonHome;

