import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';


const Deshboard = () => {
    const marksArray = [
        {
            id: 1,
            name: 'Assignment-1',
            marks: 58,
        },
        {
            id: 1,
            name: 'Assignment-2',
            marks: 56,
        },
        {
            id: 1,
            name: 'Assignment-3',
            marks: 58,
        },
        {
            id: 1,
            name: 'Assignment-4',
            marks: 50,
        },
        {
            id: 1,
            name: 'Assignment-5',
            marks: 38,
        },
        {
            id: 1,
            name: 'Assignment-6',
            marks: 54,
        },
        {
            id: 1,
            name: 'Assignment-7',
            marks: 58,
        },
        {
            id: 1,
            name: 'Assignment-8',
            marks: 60,
        },
    ]
    return (
        <div>
            <BarChart
                width={1000}
                height={400}
                data={marksArray}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar fill='#82ca9d' dataKey='marks'></Bar>
            </BarChart>
        </div>
    );
};

export default Deshboard;