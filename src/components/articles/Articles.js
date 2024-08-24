import React from 'react'
import Layout from '../Layout'
import { connect } from 'react-redux'
import { baseUrl } from '../../utils/config'
import { fetchIndividualArticle } from '../../redux/ActionCreaters'
import { Button } from '@mui/material'
import { replace, useNavigate } from 'react-router-dom'
import ArticleCard from './ArticleCard'
import Preparation from '../Preparation'
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
<Preparation>
       <div className='mt-20 mb-20 w-3/4'>
       <h1 className='text-4xl font-bold'>Crafting Code, Building Futures, and Reaching for the Stars: Articles by Zafor Iqbal</h1>
       <p className='mt-4'>All of my thoughts on programming, software engineering, web development and its architectures.</p>
       <div>
        {articles}
       </div>
       
       </div>
       </Preparation>

    </Layout>
  )
}

export default connect(mapStateToProps)(Articles)