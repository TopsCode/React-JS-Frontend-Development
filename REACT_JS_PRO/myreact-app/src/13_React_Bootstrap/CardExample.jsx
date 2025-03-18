import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardExample() {
  return (
    <Container className="d-flex justify-content-start">
      <Card
        style={{
          width: "20rem",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          border: "none",
          margin:"20px",
          padding:"20px"
        }}
      >
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="text-center bg-light">
          <Card.Title className="text-primary">Beautiful Card</Card.Title>
          <Card.Text className="text-muted">
            This is a visually enhanced card with colors, shadows, and better design.
          </Card.Text>
          <Button variant="success" className="px-4">Explore</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
