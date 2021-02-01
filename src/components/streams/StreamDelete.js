import React from 'react'
import { connect } from 'react-redux'
import Modal from '../Modal'
import history from '../../history'
import { fetchStream } from '../../actions'


class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions(){
        return(
            // Fragment tag is just binding elements the tag is not appeared in HTML source
            <React.Fragment>
                <div>
                    <button className="ui button negative">Delete</button>
                    <button className="ui button">Cancel</button>
                </div>
            </React.Fragment>
        )
    }

    render(){
        return (
            <div>
                StreamDelete
                <Modal
                    title='Delete Stream'
                    content="Are you sure you want to delete this stream?"
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}

export default connect(null, { fetchStream })(StreamDelete)
