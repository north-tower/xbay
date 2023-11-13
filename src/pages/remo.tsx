import React from 'react'
import Header3 from '../components/Header3'
import Project from '@/components/Project'
import Progress from '@/components/Progress'


type Props = {}

function remo({}: Props) {
  return (
    <div>
        <Header3 />
        <Project />
        <Progress />
    </div>
  )
}

export default remo