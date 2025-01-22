import Main from '@/components/Main'
import React from 'react'
import { Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div>
      <Route path='/' ><Main/></Route>
    </div>
  )
}

export default AppRoutes
