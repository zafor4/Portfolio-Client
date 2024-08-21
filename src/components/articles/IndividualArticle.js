import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { connect } from 'react-redux'
import { fetchIndividualArticle } from '../../redux/ActionCreaters'
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../utils/config';

const mapStateToProps=state=>{
    return {
        article:state.article
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        fetchIndividualArticle:(id)=>dispatch(fetchIndividualArticle(id))
    }
}

const IndividualArticle = (props) => {
    const { id } = useParams();

    useEffect(()=>{
        if (id){
            props.fetchIndividualArticle(id)
        }
    },[id])

  return (
    <Layout title='Article'className='container mx-auto px-4 md:px-20'>
        <div>
            <h1>{props.article.name}</h1>
            <img src={`${baseUrl}/article/photo/${props.article._id}`}/>
            <p>{props.article.description}</p>
        </div>
    </Layout>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(IndividualArticle)