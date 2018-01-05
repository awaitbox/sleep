/**
 * Await for a certain amount of time.
 */
export default
async function sleep( duration, _passThrough ) {
    await new Promise( r => setTimeout( r, duration ) )
    return _passThrough
}
