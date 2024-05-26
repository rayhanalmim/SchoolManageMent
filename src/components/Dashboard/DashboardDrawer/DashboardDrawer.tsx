'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//-----------------icons---------------
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import Person4Icon from '@mui/icons-material/Person4';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';
import Groups2Icon from '@mui/icons-material/Groups2';
import ArticleIcon from '@mui/icons-material/Article';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import CollectionsIcon from '@mui/icons-material/Collections';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import student from '../../../../public/assests/dashboard/sidebar/student.png';
import teacher from '../../../../public/assests/dashboard/sidebar/teacher.png';
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import MenuIcon from '@mui/icons-material/Menu';

// ---------profile-----------
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Link from 'next/link';

const drawerWidth = 200;

const sidebarMenuItems = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon />,
    href: "/dashboard"
  },
  {
    id: 2,
    name: "Admin",
    icon: <AdminPanelSettingsIcon />,
    href: "/admin"
  },
  {
    id: 2,
    name: "Header",
    icon: <CalendarViewDayIcon />,
    href: "/dashboard/header"
  },
  {
    id: 2,
    name: "Footer",
    icon: <HorizontalSplitIcon/>,
    href: "/admin"
  },
  {
    id: 2,
    name: "Navbar",
    icon: <MenuIcon />,
    href: "/admin"
  },
  {
    id: 3,
    name: "Teachers",
    icon: <FaChalkboardTeacher className="w-6 h-6"/>,
    href: "/dashboard/administration/teacher"
  },
  {
    id: 4,
    name: "Students",
    icon: <PiStudent className="w-6 h-6" />,
    href: "/students"
  },
  {
    id: 5,
    name: "Admissions",
    icon: <MedicalInformationIcon />,
    href: "/admissions"
  },
  {
    id: 6,
    name: "Finance",
    icon: <AttachMoneyIcon />,
    href: "/finance"
  },
  {
    id: 7,
    name: "About Us",
    icon: <InfoIcon />,
    href: "/about"
  },
  {
    id: 8,
    name: "Administration",
    icon: <Groups2Icon />,
    href: "/administration"
  },
  {
    id: 9,
    name: "Result",
    icon: <ArticleIcon />,
    href: "/result"
  },
  {
    id: 10,
    name: "Facilities",
    icon: <DonutLargeIcon />,
    href: "/facilities"
  },
  {
    id: 11,
    name: "Gallery",
    icon: <CollectionsIcon />,
    href: "/gallery"
  },
  {
    id: 12,
    name: "Contact",
    icon: <PermContactCalendarIcon />,
    href: "/contact"
  },
  {
    id: 13,
    name: "Notice",
    icon: <NotificationsIcon />,
    href: "/notice"
  },
];
export default function DashboardDrawer({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {sidebarMenuItems.map((items, index) => (
          <ListItem key={items.id} disablePadding>
            <ListItemButton >
              <Link href={items.href} passHref >
                <div className='flex items-center content-center'>
                  <ListItemIcon >
                    {items.icon}
                  </ListItemIcon>
                  <ListItemText primary={items.name} sx={{ marginLeft: -2 }} />
                </div>
              </Link>
            </ListItemButton>
          </ListItem>

        ))}
      </List>
      <Divider />
      <List>
        {['Log Out'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <LogoutIcon /> : ""}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex',  background: "#F2F4F4 " }}> 
      
        <CssBaseline />
        <AppBar
          position="fixed"
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },
        // }} flexItem 
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dash Board
            </Typography>


            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Typography sx={{ minWidth: 100 }}>Contact</Typography>
              <Typography sx={{ minWidth: 100 }}>Profile</Typography>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>

          </Toolbar>



        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`, background: "#F2F4F4 ", } }}
        >
          <Toolbar />

          {children}
        </Box>
      </Box>


    </>
  );
}
