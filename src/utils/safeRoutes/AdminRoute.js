import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        token: state.token,
        role: state.user ? state.user.role : null, // Safely accessing the role
    };
};

const AdminRoute = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust timing as needed based on data fetching

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        // You can return a loading spinner or null here
        return <div>Loading...</div>;
    }

    if (props.token && props.role === 'admin') {
        return <Outlet />;
    }

    return <Navigate to='/login' replace />;
};

export default connect(mapStateToProps)(AdminRoute);
