function TimeNow( ) {
    const now = new Date().toLocaleTimeString();
    return (
        <h1>The time is {now}</h1>
    )
}

export default TimeNow;