import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { connect } from 'react-redux'
import { fetchIndividualArticle } from '../../redux/ActionCreaters'
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../utils/config';
import Preparation from '../Preparation';

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
    const formattedDate = new Date(props.article.createdAt).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
      });
  return (
    
    <Layout title={`Articles/${id}`} className='container mx-auto px-4 md:px-20'>
        <Preparation>
        <div className='mt-20'>
            <p className='text-gray-400 text-sm'>{formattedDate}</p>
            <h1 className='mt-8 font-bold text-4xl'>{props.article.name}</h1>
            <img className='rounded shadow mt-8' style={{maxHeight:'600px'}} src={`${baseUrl}/article/photo/${id}`}/>
            <p className='mt-8'>{props.article.description}</p>
        </div>
        </Preparation>
    </Layout>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(IndividualArticle)