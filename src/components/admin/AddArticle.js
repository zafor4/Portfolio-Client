import React, { useState, useRef } from "react";
import Layout from "../Layout";
import { Box, Button, TextField, Typography } from "@mui/material";
import { connect } from "react-redux";
import { createArticle } from "../../api/ApiArticle";
import { fetchArticles } from "../../redux/ActionCreaters";
import { useNavigate } from "react-router-dom";
import RichTextEditor from "../RichTextEditor";

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
    name: "",
    description: "",
    photo: "",
  });
  const editorRef = useRef(null);

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
    formData.append("name", values.name);
    const descriptionHtml = editorRef.current
      ? editorRef.current.getContent()
      : values.description;
    formData.append("description", descriptionHtml);
    formData.append("photo", values.photo);
    console.log("Submitting article with data:", {
      name: values.name,
      description: descriptionHtml,
      photo: values.photo,
    });
    createArticle(props.token, formData)
      .then((res) => {
        props.fetchArticles();
        navigate("/dashboard", { replace: true }); // Corrected typo here
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout title="addArticle" className="container mx-auto px-4 md:px-20">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
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
        <div>
          <Typography variant="subtitle1">Article content</Typography>
          <RichTextEditor ref={editorRef} />
        </div>
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
