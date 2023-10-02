import React from "react"
import ReactDOM from "react-dom"
import ApolloClient from "apollo-client"
import { ApolloProvider } from "react-apollo"
import SongList from "./components/SongList.js"
import { Router, Route, hashHistory, IndexRoute } from "react-router"
import CreateMusic from "./components/CreateMusic.js"
import { App } from "./components/App.js"
import "./style/style.css"

const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="/songCreate" component={CreateMusic} />
        </Route>
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector("#root"))
