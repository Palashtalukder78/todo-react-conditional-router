import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './NotFound.css';
import notFound from '../../images/not-found.gif'
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();

    const handleHome =() =>{
        history.push('/todo');
    }
    const handleAssignment =() =>{
        history.push('/chart');
    }
    return (
        <Container className="my-4">
            <div id="not-found">
                <img src={notFound} alt="" />
                <h1>404 Not Found</h1>
                <Button onClick={handleHome} variant="primary" className="m-1">Home</Button>
                <Button onClick={handleAssignment} variant="info" className="m-1">Assignment Mark</Button>
            </div>
        </Container>
    );
};

export default NotFound;