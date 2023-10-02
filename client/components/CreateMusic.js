import React from "react"
import { graphql } from "react-apollo"
import { Link, hashHistory } from "react-router"
import mutationAddSong from "../queries/mutationAddSong"
import fetchSongs from "../queries/fetchSongs"

const CreateMusic = ({ mutate }) => {
  function handleSubmit(e) {
    e.preventDefault()
    const title = e.target[0].value

    mutate({
      variables: {
        title: title,
      },
      refetchQueries: [{ query: fetchSongs }],
    }).then(() => hashHistory.push("/"))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Link to="/">{"<- Back"}</Link>
      <br />
      <br />
      <label title="title">Title:</label>
      <input type="text" title="title" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default graphql(mutationAddSong)(CreateMusic)
