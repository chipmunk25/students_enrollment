import React from 'react';
import PrintPage from './report';
import PrintContent from './content';
const PrintContainer = ({ componentRef, students, course }) => {
    return (
        <div className="w-full">
            <div style={{ display: 'none' }}>
                <PrintPage ref={componentRef}>
                    <PrintContent students={students} course={course} />
                </PrintPage>
            </div>
        </div>
    );
};
export default PrintContainer;
