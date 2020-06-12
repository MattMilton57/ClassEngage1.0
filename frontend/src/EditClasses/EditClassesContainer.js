import React, {Fragment} from 'react';
import ClassElement from './ClassElement'


class EditClassesContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          students: [],
          assessments: [],
          registrations: [],
          enrollments: [],
          classes: [],
          selectedClass:2
        };
      }

    componentDidMount(){
        this.setState({
            students: this.props.students,
            enrollments: this.props.enrollments,
        })        
    }

    outOfClass = (student, enrollment) => {
        console.log(student.name + ' removed from class')
        this.removeEnrollment(enrollment.id)
    }

    removeEnrollment = (id) => {
        var array = [];
        array.push((this.state.enrollments))
        var otherArray=(array[0])
        otherArray.map(enrollment => {
            if (enrollment.id == id && enrollment.period_id == this.state.selectedClass){
                const thisEnrollment=enrollment
                for (var i = 0; i < otherArray.length; i++){
                    if (otherArray[i].id == thisEnrollment.id){
                        otherArray.splice(i, 1);
                        this.setState({enrollments: otherArray});
                    }
                }
            }
        })   
    }
   
    buildClassList(){
    return this.state.enrollments.map(enrollment => {
        if (enrollment.period_id == this.state.selectedClass){
            return this.state.students.map(student => {
                if (student.id == enrollment.student_id){
                    return <ClassElement 
                    student={student}
                    enrollment={enrollment}
                    outOfClass={this.outOfClass} />
                    }
                })
            }
        }) 
    }
    
    render(){   
        return (
            <Fragment>
                <div>
                    {this.buildClassList()}
                </div>
            </Fragment>
        )
    }    
    
}            
export default EditClassesContainer