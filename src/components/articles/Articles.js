import React from 'react'
import Layout from '../Layout'
import { connect } from 'react-redux'
import { baseUrl } from '../../utils/config'
import { fetchIndividualArticle } from '../../redux/ActionCreaters'
import { Button } from '@mui/material'
import { replace, useNavigate } from 'react-router-dom'
const mapStateToProps=state=>{
  return{
    articles:state.articles
  }
}

const Articles = (props) => {
  const navigate=useNavigate()

  const articles=props.articles.map(article=><div key={article._id} className='mt-8'>
    <p>date here</p>
    <h1 className='font-bold text-lg'>{article.name}</h1>
    
    <p>{article.description}</p>
    <Button onClick={() => navigate(`/article/${article._id}`, { replace: true })}>read more</Button>
  </div>)
  return (
    <Layout title='Articles' className='container mx-auto px-4 md:px-20'>

       <div className='my-8'>
       <h1 className='text-4xl font-bold'>Writing on software design, company building, and the aerospace industry.</h1>
       <p className='mt-4'>All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.</p>
       <div>
        {articles}
       </div>
       
       </div>

    </Layout>
  )
}

export default connect(mapStateToProps)(Articles)