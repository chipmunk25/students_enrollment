import React from 'react';

const PrintPage = React.forwardRef((props, ref) => {
    return <div ref={ref}>{props.children}</div>;
});

export default PrintPage;
