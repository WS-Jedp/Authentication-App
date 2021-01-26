import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { Context } from '../../../context'
import { ErrorReportWrapper, ErrorReportContainerWrapper } from './styles'

export const ErrorReport:React.FC = ({children}) => {

  const { errors } = useContext(Context)


  return ReactDOM.createPortal( (<ErrorReportContainerWrapper>
    {
      errors && errors.map(err => (
      <ErrorReportWrapper>
        {
          children
        }
      </ErrorReportWrapper>
      ))
    }
    </ErrorReportContainerWrapper>
  ), window.document.querySelector('#alerts'))
}