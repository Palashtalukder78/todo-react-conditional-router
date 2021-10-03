import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './ToDoDetail.css';
import emptyplate from '../../images/empty-plate.jpg';
import fullplate from '../../images/full-plate.png';

const ToDoDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [id]);
    const handleBack = () => {
        history.push('/todo');
    }
    return (
        <Container className="my-4" >
            {
                detail.length === 0 ?
                    <div>
                        <Spinner className="mx-auto d-block" animation="border" variant="primary" />
                    </div>
                    :
                    <>
                        <div id="details">
                            <div>
                                {
                                    detail?.completed ?
                                        <img className="img-fluid" style={{ width: '400px' }} src={fullplate} alt="" />
                                        :
                                        <img className="img-fluid" style={{ width: '400px' }} src={emptyplate} alt="" />
                                }
                            </div>
                            <div className="content">
                                {
                                    detail?.completed ?
                                        <div className="text-center">
                                            <p>He is Rich man. And he always try it</p>
                                        </div>
                                        :
                                        <div className="text-center">
                                            <p>He is not Able to eat this Expensive Food. </p>
                                            <p>He may try Later</p>
                                        </div>
                                }
                            </div>
                        </div>
                        <Button onClick={handleBack} className="mx-auto d-block " variant="outline-primary">Back</Button>
                    </>
            }
        </Container >
    );
};

export default ToDoDetail;