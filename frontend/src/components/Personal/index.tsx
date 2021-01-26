import React from 'react'
import { PersonalWrapper, PersonalHeaderWrapper, PersonalInformationWrapper } from './styles' 

import { Button } from '../Buttons'

export const Personal:React.FC = () => {

  return (
    <PersonalWrapper>
      <PersonalHeaderWrapper>
        <div>
          <strong>Profile</strong>
          <span>Some info may be visible to other people</span>
        </div>

        <Button content="Edit" width="20%" />
      </PersonalHeaderWrapper>

      <PersonalInformationWrapper>
        <li>
          <label htmlFor="">
            Name
          </label>
          <p>
            Name of the user
          </p>
        </li>
        <li>
          <label htmlFor="">
            Name
          </label>
          <p>
            Name of the user
          </p>
        </li>
      </PersonalInformationWrapper>

    </PersonalWrapper>
  )
}