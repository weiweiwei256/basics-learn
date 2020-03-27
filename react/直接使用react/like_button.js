'use strict'

const e = React.createElement

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { liked: false }
    }

    render() {
        if (this.state.liked) {
            return 'You liked commentid is' + this.props.commentID
        }

        return e('button', { onClick: () => this.setState({ liked: true }) }, 'Like')
    }
}
document.querySelectorAll('.invoke-react-btn').forEach(domContainer => {
    console.log(domContainer.dataset)
    const commentID = parseInt(domContainer.dataset.commentid)
    ReactDOM.render(e(LikeButton, { commentID }), domContainer)
})
