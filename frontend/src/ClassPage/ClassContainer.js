import React, {Fragment} from 'react';
import Class from './Class'

const ClassContainer = (props) => {
    const {classes, stateForLink} = props;

    const sendClasses = () => {
        return classes.map(period => {
            return (
                <Class 
                period={period}
                stateForLink={stateForLink} />
            )

        })
    }
   
    return (
        <Fragment>
            <div>
                
                {sendClasses()}
             
            </div>
        </Fragment>
    )
}
export default ClassContainer