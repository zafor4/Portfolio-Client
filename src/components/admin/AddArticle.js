import React, { useState } from 'react';
import Layout from '../Layout';
import { Box, Button, TextField, Typography } from '@mui/material';
import { connect } from 'react-redux';
import { createArticle } from '../../api/ApiArticle';
import { fetchArticles } from '../../redux/ActionCreaters';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        token: state.token,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticles: () => dispatch(fetchArticles()),
    };
};

const AddArticle = (props) => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        photo: '',
    });

    const navigate = useNavigate(); // Corrected typo here

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('photo', values.photo);
        createArticle(props.token, formData)
            .then((res) => {
                props.fetchArticles();
                navigate('/dashboard', { replace: true }); // Corrected typo here
            })
            .catch((err) => console.log(err));
    };

    return (
        <Layout title="addArticle" className="container mx-auto px-4 md:px-20">
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography>Create Articles</Typography>
                <TextField
                    onChange={handleInputChange}
                    value={values.name}
                    type="text"
                    placeholder="article title"
                    name="name"
                    fullWidth
                    required
                />
                <TextField
                    multiline
                    minRows={8}
                    onChange={handleInputChange}
                    value={values.description}
                    type="text"
                    placeholder="article description"
                    name="description"
                    fullWidth
                    required
                />
                <TextField
                    onChange={(e) => setValues({ ...values, photo: e.target.files[0] })}
                    type="file"
                    name="photo"
                    fullWidth
                    required
                />
                <Button variant="outlined" type="submit">
                    Submit article
                </Button>
            </Box>
        </Layout>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);
