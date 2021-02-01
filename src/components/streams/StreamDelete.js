import React from 'react'
import Modal from '../Modal'

const StreamDelete = () => {

    const actions = (
        // Fragment tag is just binding elements the tag is not appeared in HTML source
        <React.Fragment>
            <div>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </div>
        </React.Fragment>
    )
    return (
        <div>
            StreamDelete
            <Modal
                title='Delete Stream'
                content="Are you sure you want to delete this stream?"
                actions={actions}
            />
        </div>
    )
}

export default StreamDelete
