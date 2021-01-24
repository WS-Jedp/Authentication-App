import React from 'react'
import { Layout as LayoutComponent } from './styles'

export const Layout:React.FC = ({ children }) => {

  return (
    <LayoutComponent>
      {
        children
      }
    </LayoutComponent>
  )
}
