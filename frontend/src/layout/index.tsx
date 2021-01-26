import React from 'react'
import { Layout as LayoutComponent } from './styles'

import { Header } from '../components/Header'

type LayoutProps = {
  children: React.ReactNode;
  header?: Boolean;
}

export const Layout = ({ children, header }:LayoutProps) => {

  return (
    <LayoutComponent header={header}>
      {
        header && (<Header />) 
      }
      <div className="layout-content">
        {
          children
        }
      </div>
    </LayoutComponent>
  )
}