import React from 'react';
import { NewContext, UserContext } from '../App';

const CompC = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <NewContext.Consumer>
                                {
                                    name => {
                                        return (
                                        <div>name {user} { name }</div>
                                        )
                                    }
                                }
                            </NewContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default CompC
