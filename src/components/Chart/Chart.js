import React from 'react';
import { Container } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = () => {
    const data = [
        {
            name: 'Assignment 1',
            Mark: 60,
        },
        {
            name: 'Assignment 2',
            Mark: 60,
        },
        {
            name: 'Assignment 3',
            Mark: 60,
        },
        {
            name: 'Assignment 4',
            Mark: 53,
        },
        {
            name: 'Assignment 5',
            Mark: 60,
        },
        {
            name: 'Assignment 6',
            Mark: 60,
        },
        {
            name: 'Assignment 7',
            Mark: 60,
        },
        {
            name: 'Assignment 8',
            Mark: 60,
        },
    ];
    return (
        <Container className="my-4 d-block" >
            <ResponsiveContainer width="100%" height={300}>
            <LineChart
                width={'100%'}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Mark" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
            </ResponsiveContainer>
        </Container>
    );
};

export default Chart;