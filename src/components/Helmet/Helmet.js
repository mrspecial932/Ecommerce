import React from 'react'

const Helmet = (props) => {
    Document.title='Maltimart-' + props.title
  return (
    <div className='w-100'> {props.childen}</div>
  )
};

export default Helmet;