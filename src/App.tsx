import React from "react";
import "./App.css";
import image from "./Procrastination.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>Hello World!</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Roisin Rumsey</p>
            <h1>9/17</h1>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>

            <Container>
                <Row>
                    <Col>
                        <div className="rectangle">y</div>
                        Unordered List:
                        <ul>
                            <li>Iodine</li>
                            <li>Carbon</li>
                            <li>Hydrogen</li>
                        </ul>
                    </Col>
                    <Col>
                        <div className="rectangle">x</div>
                        <img
                            src={image}
                            alt="Procastination Meme"
                            width="600"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
