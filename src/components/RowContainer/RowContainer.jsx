import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../Card/Card'

const GridRowContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.6rem;
`

const RowContainer = ({ data }) => {
  const { nodes } = data

  return (
    <GridRowContainerStyles>
      {nodes.map(node => (
        <Card data={node} key={node.id} />
      ))}
    </GridRowContainerStyles>
  )
}

RowContainer.propTypes = {}

export default RowContainer
