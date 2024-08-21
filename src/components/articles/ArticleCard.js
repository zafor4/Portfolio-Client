import { Button } from '@mui/material'
import React from 'react'

const ArticleCard = (props) => {
  return (
    <div className='border rounded p-2'>
        <p className='py-2'>date</p>
        <h5 className='py-2'>{props.article.name}</h5>
        <p className='py-2'>{props.article.description}</p>
        <Button className='py-2'>Read more</Button>
    </div>
  )
}

export default ArticleCard