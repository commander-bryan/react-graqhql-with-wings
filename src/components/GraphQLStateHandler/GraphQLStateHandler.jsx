import React from 'react';

function GraphQLStateHandlerFactory(dataProperty = 'data', isLoadingPage = false) {
    return function GraphQLStateHandler(Component) {
        const GraphQLStateHandlerComponent = (props) => {
            const data = props[dataProperty];
            const { loading } = data;
            if (loading) {
                return <span>Loading...</span>;
            }

            return (
                <Component
                    {...props}
                />
            );
        };

        return GraphQLStateHandlerComponent;
    };
}

export default GraphQLStateHandlerFactory;
