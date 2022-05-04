import React, { useState } from "react";
import axios from 'axios';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";

  
function About() {
    const [data, setData] = useState(null); 
    const location = useLocation()
    const { id } = location.state

    React.useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`http://localhost:3001/api/${id}/dishes`)//call db deliveboo
            console.log(res.data)
            setData(res.data.result);//with this we'll put all the users in data
        }
        fetchData();
        console.log(data)
    }, [])

    return (
        <div>
            <h1>Show Restaurant</h1>
            <ul>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* Endpoint to route to About component */}
                    <Link to="/about">About</Link>
                </li>
            </ul>

            <Row className="row-cols-4">{!data ? "Loading..." : data.map(dish => {
                return <Col key={dish.id} className="d-flex justify-content-around mb-3">
                    <Card style={{ width: '83%' }}>
                        <Card.Img style={{ height: '209.95px' }} variant="top" src={dish.photo ? dish.photo : 'https://food-lifestyle.it/wp-content/uploads/2018/04/cibi-sani-food-lifestyle.jpg'} />
                        <Card.Body>
                            <Card.Title>{dish.name}</Card.Title>
                            <Card.Text>
                                {dish.description ? dish.description : 'something'}
                            </Card.Text>
                            <Card.Text>
                                {dish.price}&euro; // {dish.availability == 1 ? 'Available' : 'Not available'}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            })}</Row>
        </div>
    );
}
  
export default About;