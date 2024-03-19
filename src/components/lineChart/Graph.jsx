

import { LineChart, Line,XAxis,YAxis } from 'recharts';

const Graph = () => {

    const studentData = [
        { id: 1, name: 'Student 1', mathMarks: 85 },
        { id: 2, name: 'Student 2', mathMarks: 78 },
        { id: 3, name: 'Student 3', mathMarks: 90 },
        { id: 4, name: 'Student 4', mathMarks: 65 },
        { id: 5, name: 'Student 5', mathMarks: 72 },
        { id: 6, name: 'Student 6', mathMarks: 88 },
        { id: 7, name: 'Student 7', mathMarks: 95 },
        { id: 8, name: 'Student 8', mathMarks: 70 },
        { id: 9, name: 'Student 9', mathMarks: 82 },
        { id: 10, name: 'Student 10', mathMarks: 79 },
      ]; 

    return (
        <div>
            <LineChart width={500} height={400} data={studentData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Line  dataKey="mathMarks" stroke='red'></Line>
            <Line dataKey="id"stroke='blue'></Line>
            </LineChart>
            
        </div>
    );
};

export default Graph;