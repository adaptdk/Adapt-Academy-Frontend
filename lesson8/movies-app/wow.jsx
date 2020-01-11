import React, { Component } from 'react';

class wow extends Component {
    render() {
        return (
            <div>
            {
                (() => {
                    if (flag1 && flag2 && !flag3) {
                        if (flag4) {
                            return <p>Blah</p>
                        } else if (flag5) {
                            return <p>Meh</p>
                        } else {
                            return <p>Herp</p>
                        }
                    } else {
                        return <p>Derp</p>
                    }
                })()
            }
            </div>
        );
    }
}

export default wow;