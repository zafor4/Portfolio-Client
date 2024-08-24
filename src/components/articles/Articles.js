import React from 'react'
import Layout from '../Layout'
import { connect } from 'react-redux'
import { baseUrl } from '../../utils/config'
import { fetchIndividualArticle } from '../../redux/ActionCreaters'
import { Button } from '@mui/material'
import { replace, useNavigate } from 'react-router-dom'
import ArticleCard from './ArticleCard'
const mapStateToProps=state=>{
  return{
    articles:state.articles
  }
}

const Articles = (props) => {
  const navigate=useNavigate()

  const articles=props.articles.map(article=><div key={article._id} className='mt-8'>
    <ArticleCard article={article}/>
  </div>)
  return (
    <Layout title='Articles' className='container mx-auto px-4 md:px-20'>

       <div className='my-20'>
       <h1 className='text-4xl font-bold'>Writing on software development, company building, and the aerospace industry.</h1>
       <p className='mt-4'>All of my long-form thoughts on programming, software engineering, leadership, and more, collected in chronological order.</p>
       <div>
        {articles}
       </div>
       
       </div>

    </Layout>
  )
}

export default connect(mapStateToProps)(Articles)