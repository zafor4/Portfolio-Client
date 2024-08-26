import React, { useState } from 'react';
import Layout from '../Layout';
import { Box, TextField, Button, Typography } from '@mui/material';
import { createProject } from '../../api/ApiProject';
import { connect } from 'react-redux';
import { fetchProjects, projects } from '../../redux/ActionCreaters';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        token: state.token,
    };
};
const mapDispatchToProps=dispatch=>{
   return{
    fetchProjects:()=>dispatch(fetchProjects())
   }
}

const AddProject = (props) => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        server: '',
        client:'',
        preview: '',
        photo: ''
    });

    const navigate=useNavigate()

    // Handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a FormData object
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('server', values.server);
        formData.append('client', values.client);
        formData.append('preview', values.preview);
        formData.append('photo', values.photo); // Assuming photo is a file

        // Send the FormData object
        createProject(props.token, formData)
            .then(res => {
                props.fetchProjects()
                navigate('/dashboard', { replace: true });
            })
            .catch(err => console.log('Error:', err));
    };

    return (
        <Layout title='Add Project' className='container mx-auto px-4 md:px-20'>
            <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography>Enter Your Project</Typography>
                <TextField
                    type='text'
                    placeholder='Enter Project Title'
                    name='name'
                    value={values.name}
                    onChange={handleInputChange}
                    fullWidth
                    required
                />
                <TextField
                    type='text'
                    placeholder='Add description'
                    name='description'
                    value={values.description}
                    onChange={handleInputChange}
                    fullWidth
                    required
                />
                <TextField
                    type='text'
                    placeholder='Add GitHub server link'
                    name='server'
                    value={values.server}
                    onChange={handleInputChange}
                    fullWidth
                />
                                <TextField
                    type='text'
                    placeholder='Add GitHub client link'
                    name='client'
                    value={values.client}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    type='text'
                    placeholder='Add live preview link'
                    name='preview'
                    value={values.preview}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    type='file'
                    name='photo'
                    onChange={(e) => setValues({ ...values, photo: e.target.files[0] })}
                    fullWidth
                />

                <Button type='submit' variant='contained' color='primary'>
                    Submit
                </Button>
            </Box>
        </Layout>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProject);
