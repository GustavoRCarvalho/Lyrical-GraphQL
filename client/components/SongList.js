import React from "react"
import { graphql } from "react-apollo"
import "./SongList.css"
import { Link } from "react-router"
import fetchSongs from "../queries/fetchSongs"
import mutationDeleteSong from "../queries/mutationDeleteSong"

const SongList = ({ data, mutate }) => {
  console.log(data)

  function handleDelete(id) {
    mutate({
      variables: {
        id: id,
      },
      refetchQueries: [{ query: fetchSongs }],
    })
  }

  if (data.loading) {
    return <div>Loading</div>
  } else {
    return (
      <ul>
        {data.songs.map(({ id, title }) => {
          return (
            <li key={id} className="list">
              {title}
              <button className="delete" onClick={() => handleDelete(id)}>
                delete
              </button>
            </li>
          )
        })}
        <Link className="create list" to="/songCreate">
          <button key={"createSongButton"}>Create New Song</button>
        </Link>
      </ul>
    )
  }
}

export default graphql(mutationDeleteSong)(graphql(fetchSongs)(SongList))
