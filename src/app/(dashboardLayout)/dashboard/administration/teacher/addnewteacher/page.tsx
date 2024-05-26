"use client"
import React from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import adduser from "../../../../../../../public/assests/dashboard/adduser.png"
import Image from 'next/image';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


const AddNewTeacher = () => {
    const [age, setAge] = React.useState<string | number>('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: SelectChangeEvent<typeof age>) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div>
            <h1 className='lg:text-3xl font-bold mb-2 flex items-center gap-4 ml-2'><Image src={adduser} className='h-10 w-10' alt='this is user' /> Add Teacher</h1>
            <div className="rounded-lg p-2 md:p-5 lg:p-5 shadow bg-white mb-4">
                <h1 className='lg:text-xl font-bold'>Personal Details</h1>
                {/* Divider  */}
                <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                    <label className="form-control w-full ">
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="First Name" required id="fullWidth" />
                        </Box>
                    </label>
                    <label className="form-control w-full ">

                        <Box

                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Last Name" required id="fullWidth" />
                        </Box>
                    </label>
                    <label className="w-full ">
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Email" required id="fullWidth" />
                        </Box>
                    </label>
                    <label className="w-full ">
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Mobile No." required id="fullWidth" />
                        </Box>
                    </label>


                    <div>
                        <FormControl sx={{ minWidth: "100%" }}>
                            <InputLabel id="demo-controlled-open-select-label" required>Gender</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={age}
                                label="Gender"
                                onChange={handleChange}
                                required
                            >

                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Fe-Male</MenuItem>
                            </Select>
                        </FormControl>
                    </div>





                    <label className="w-full ">
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Date of Birth" required id="fullWidth" />
                        </Box>
                    </label>
                    <label className="w-full ">
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="NID/Birth Certificate No. -" required id="fullWidth" />
                        </Box>
                    </label>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button>


                    {/* <label className="w-full">
                        <h1 className="text-sm text-primary p-1">Gender </h1>
                        <select className="select select-bordered w-full">
                            <option disabled selected>
                                -- Select a Gender --
                            </option>
                            <option>Male</option>
                            <option>Fe-Male</option>
                        </select>
                    </label>
                    <label className=" w-full ">

                        <h1 className="text-sm text-primary p-1">Mobile No.</h1>
                        <input
                            type="text"
                            placeholder="+880123456789123"
                            className="input input-bordered w-full "
                        />
                    </label> */}
                    {/* <label className="w-full ">
                        <h1 className="text-sm text-primary p-1">E-Mail</h1>
                        <input
                            type="text"
                            placeholder="example@example.com"
                            className="input input-bordered w-full "
                        />
                    </label>

                    <label className="w-full">
                        <h1 className="text-sm text-primary p-1">Date of Birth</h1>
                        <input
                            type="date"
                            placeholder="DD-MM-YYYY"
                            className="input input-bordered w-full"
                        />
                    </label> */}
                    {/* <label className="w-full">
                        <h1 className="text-sm text-primary p-1">
                            NID / Birth Certificate No. -
                        </h1>
                        <input
                            type="text"
                            placeholder="NID / Birth Certificate Number"
                            className="input input-bordered w-full"
                            pattern="[0-9]*"
                        />
                    </label> */}
                    {/* <label className="w-full ">
                        <h1 className="text-sm text-primary p-1">
                            Image (Passport Size)
                        </h1>
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full"
                        />
                    </label> */}
                </div>
            </div>
            {/* Address */}
            <div className="rounded-lg p-2 md:p-5 lg:p-5 shadow bg-white mb-4">
                <h1 className='lg:text-xl font-bold'>Address</h1>
                {/* Divider  */}
                <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                    <TextField
                        id="outlined-multiline-static"
                        label="Present Address"
                        multiline
                        rows={4}
                    // defaultValue="Default Value"
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Permanent Address"
                        multiline
                        rows={4}
                    // defaultValue="Default Value"
                    />
                    {/* <label className="form-control w-full ">
                        <h1 className="text-sm p-1"></h1>
                        <textarea
                            className="textarea textarea-bordered h-24"
                            placeholder="Present Address"
                        ></textarea>
                    </label>
                    <label className="form-control w-full ">
                        <h1 className="text-sm p-1">Permanent Address</h1>
                        <textarea
                            className="textarea textarea-bordered h-24"
                            placeholder="Permanent Address"
                        ></textarea>
                    </label> */}
                </div>
            </div>
            {/* Education Information */}
            <div className="rounded-lg p-2 md:p-5 lg:p-5 shadow bg-white mb-4">
                <h1 className='lg:text-xl font-bold'>Educational Information</h1>
                {/* Divider  */}
                <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                    <label className="w-full ">
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="University" required id="fullWidth" />
                        </Box>
                    </label>
                    <label className="w-full ">
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Degree" required id="fullWidth" />
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
                                    <TextField fullWidth label="Start Date" required id="fullWidth" />
                                </Box>
                            </label>
                            <label className="w-full ">
                                <Box
                                    sx={{
                                        width: "100%",
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="End Date" required id="fullWidth" />
                                </Box>
                            </label>
                        </div>
                    </label>
                    <label className="w-full ">
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Subject" required id="fullWidth" />
                        </Box>
                    </label>


                    {/* <label className="form-control w-full ">
                        <h1 className="text-sm p-1">University</h1>
                        <input
                            type="text"
                            placeholder="University of Oxford"
                            className="input input-bordered w-full "
                            required
                        />
                    </label>
                    <label className="form-control w-full ">
                        <h1 className="text-sm p-1">Degree</h1>
                        <input
                            type="text"
                            placeholder="Honours/Masters"
                            className="input input-bordered w-full "
                        />
                    </label>
                    <label className="form-control w-full ">
                        <h1 className="text-sm p-1">Subject</h1>
                        <input
                            type="text"
                            placeholder="CSE/EEE/English"
                            className="input input-bordered w-full "
                        />
                    </label> */}

                </div>
            </div>
            {/*Subject and Designation */}
            <div className="rounded-lg p-2 md:p-5 lg:p-5 shadow bg-white">
                <h1 className='lg:text-xl font-bold'>Teaching Subject and Designation</h1>
                {/* Divider  */}
                <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                    <label className="form-control w-full ">
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Subject" required id="fullWidth" />
                        </Box>
                    </label>
                    <label className="form-control w-full ">

                        <Box

                            sx={{
                                width: "100%",
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Designation" required id="fullWidth" />
                        </Box>
                    </label>



                </div>
            </div>
            <div className="flex flex-row justify-center md:justify-end lg:justify-end py-5">
                <button className="btn bg-white border-violet-500 btn-wide ml-4  text-primary">
                    Save As Draft
                </button>
                <button className="btn btn-primary btn-wide ml-4  text-white">
                    Add Teacher
                </button>
            </div>
        </div>
    );
};

export default AddNewTeacher;