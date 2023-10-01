import React from "react"
import gql from "graphql-tag"
import { graphql } from "react-apollo"
import "./SongList.css"

const query = gql`
  {
    songs {
      id
      title
    }
  }
`

const SongList = ({ data }) => {
  console.log(data)

  if (data.loading) {
    return <div>Loading</div>
  } else {
    return (
      <ul>
        {data.songs.map(({ id, title }) => {
          return <li key={id}>{title}</li>
        })}
      </ul>
    )
  }
}

export default graphql(query)(SongList)
