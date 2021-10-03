import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ToDo = () => {
    const [toDos, setToDos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(res => res.json())
            .then(data => setToDos(data))
    }, [])
    return (
        <Container className="my-4">
            {toDos.length === 0 ?
                <div>
                    <Spinner className="mx-auto d-block" animation="border" variant="primary" />
                </div>
                :
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Position</th>
                            <th className="text-center">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toDos.map(toDo => (
                                <tr>
                                    <td>{toDo?.id}</td>
                                    <td>{toDo?.title}</td>
                                    <td>
                                        {
                                            toDo.completed ? <p style={{ backgroundColor: 'blue', textAlign: 'center', borderRadius: '10px', color: "#fff" }}>
                                                {toDo?.completed.toString()}
                                            </p>
                                                :
                                                <p style={{ backgroundColor: 'red', textAlign: 'center', borderRadius: '10px', color: "#fff" }}>
                                                    {toDo?.completed.toString()}
                                                </p>
                                        }
                                    </td>
                                    <td>
                                        {
                                            toDo.completed ? <p style={{ backgroundColor: 'blue', textAlign: 'center', borderRadius: '10px', color: "#fff" }}>
                                                Badsha
                                            </p>
                                                :
                                                <p style={{ backgroundColor: 'red', textAlign: 'center', borderRadius: '10px', color: "#fff" }}>
                                                    Fokir
                                                </p>
                                        }
                                    </td>
                                    <td>
                                        <div className="text-center" >
                                            <NavLink to={`todo/${toDo?.id}`}style={{textDecoration: 'none'}}>View</NavLink>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            }
        </Container>
    );
};

export default ToDo;