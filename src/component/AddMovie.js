import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function AddMovie({ handleAdd }) {
  const [movie, setMovie] = useState({
    title: "",
    posterUrl: "",
    description: "",
    rate: 0,
  })

  const ChangeHandler = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div className="Formulaire">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title of Movie</Form.Label>
            <Form.Control
              name="title"
              type="text"
              onChange={ChangeHandler}
              placeholder=" Title of the film"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Poster Url</Form.Label>
            <Form.Control
              name="posterUrl"
              type="websiteUrl"
              onChange={ChangeHandler}
              placeholder=" PosterUrl of the film"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description of Movie</Form.Label>
            <Form.Control
              name="description"
              type="text"
              onChange={ChangeHandler}
              placeholder="Describe the film"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              name="rate"
              type="number"
              onChange={ChangeHandler}
              placeholder="Rate the film"
            />
            <Form.Text className="text-muted">Note = 0 /5</Form.Text>
          </Form.Group>

          <Button
            onClick={(e) => {
              e.preventDefault();
              handleAdd(movie);
            }}
          >
            Add New Movie
          </Button>
        </Form>
      </div>
    </div>
  );
}
