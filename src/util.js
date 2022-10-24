function randomDirection() {
    return (Math.floor(Math.random() * 2)) === 0 ? 'horizontal' : 'vertical';
}

export default randomDirection;