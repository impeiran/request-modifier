import React from 'react'

import css from './Banner.module.scss'

const Banner: React.FC = () => {
  return (
    <div className={css.banner}>
      <h1>Request Modifier</h1>
    </div>
  )
}

export default Banner