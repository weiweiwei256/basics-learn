'use strict'

const e = React.createElement

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { liked: false, name: 'weiyajun' }
    }

    render() {
        if (this.state.liked) {
            return 'You liked commentid is' + this.props.commentID
        }

        // return e('button', { onClick: () => this.setState({ liked: true }) }, 'L12313ike')
        return (
            <button onClick={() => this.setState({ liked: true })}>
                button text: {this.state.name + `  likes:${this.state.liked}`}
            </button>
        )
    }
}
document.querySelectorAll('.invoke-react-btn').forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid)
    ReactDOM.render(e(LikeButton, { commentID }), domContainer)
})
