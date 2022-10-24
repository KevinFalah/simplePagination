import React from 'react'

const Posts = ({post, loading}) => {

    if(loading) {
        return <h5>Loading...</h5>
    }

  return (
    <ul className='list-group mb-2'>
        {post?.map(item => (
            <li key={item.id} className="list-group-item mb-2">{item.title}</li>
        ))}
    </ul>
  )
}

export default Posts