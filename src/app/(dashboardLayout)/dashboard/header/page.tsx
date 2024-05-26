import Image from 'next/image';
import React from 'react';
import logo from '../../../../../public/assests/dashboard/institutelogo/logo4.webp';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Header = () => {
    return (
        <div className='space-y-5 bg-white rounded border p-5'>
            <Image src={logo} className='h-[250px] w-[250px]' alt='this is school logo' />
            <label className="form-control w-full ">
                
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: '100%',
                    }}
                >
                <TextField fullWidth label="English Institution Name"  id="fullWidth" defaultValue="Doctors Care Model School" disabled/>
                </Box>
            </label>
            <label className="form-control w-full ">
                
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: '100%',
                    }}
                >
                <TextField fullWidth label="Bangla Institution Name"  id="fullWidth" defaultValue="ডক্টর’স কেয়ার মডেল স্কুল" disabled/>
                </Box>
            </label>
            
            <label className="form-control w-full ">
                <div className="flex gap-3">
                    <label className="w-full ">
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="EIIN No"  id="fullWidth" defaultValue="123456"  disabled/>
                        </Box>
                    </label>
                    <label className="w-full ">
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="কারিগরি কোডঃ" required id="fullWidth" />
                        </Box>
                    </label>
                    <label className="w-full ">
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Established " required id="fullWidth" />
                        </Box>
                    </label>
                </div>
            </label>
        </div>
    );
};

export default Header;