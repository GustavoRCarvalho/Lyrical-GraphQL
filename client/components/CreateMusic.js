import { useState } from "react"
import React from "react"

export const CreateMusic = () => {
  const [form, setForm] = useState({})

  function handleInput({ type, text }) {
    setForm((state) => {
      return { state, [type]: text }
    })
  }

  return (
    <form>
      <label>Title:</label>
      <input
        type="text"
        value={form.title}
        onChange={(e) => handleInput({ type: "title", text: e.target.value })}
      />
      <button>Submit</button>
    </form>
  )
}
