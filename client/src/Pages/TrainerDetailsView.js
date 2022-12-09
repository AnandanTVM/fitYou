import React from 'react'
import { AdminNav, AdminTrainerDetailsView } from '../Components'

function TrainerDetailsView() {
  return (
    <div><AdminNav authentication/>
    <AdminTrainerDetailsView/>
    </div>
  )
}

export default TrainerDetailsView