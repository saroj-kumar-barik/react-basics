import './Card.css'
function Card(props) {
    // Here Card is used as a composite class os that we can use that any where in our project
    // here a Space is importamt after 'card' 
    // classes variable is declare to show our custum tag, <Card> in this case, to accept css classes.
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card