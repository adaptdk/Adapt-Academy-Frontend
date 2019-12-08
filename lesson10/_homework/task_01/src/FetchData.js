
//                    Adapt Academy 2019 lesson 10 - Redux | task 01 by Donatas Dereškevičius


import React from 'react';

const FetchData = (props) => WrappedComponent => {
    class FetchData extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                users: []
            };
        };
        
        componentDidMount() {
            fetch(props.url)
            .then(res => res.json())
            .then((data) => {
                this.setState({isLoaded: true, users: data});
            },
            (error) => {
                this.setState({isLoaded: true, error});
            });
        };

        render() {
            const {error, isLoaded, users} = this.state;

            return (
                <WrappedComponent error={error} isLoaded={isLoaded} users={users} {...this.props} />
            );
        };
    };

    FetchData.displayName = `FetchData(${WrappedComponent.name})`;

    return FetchData;
};

export {FetchData};