
@awaitbox/sleep
========================

Await for a certain amount of time.

#### `npm i @awaitbox/sleep --save`

The `sleep` async function returns a promise that will resolve after the
specified amount of time. This is a convenient alternative for `setTimeout`.
This is inspired from `sleep(...)` in the C language, except that time is
specified in milliseconds rather than seconds.

You can use it in async functions:

```js
import sleep from '@awaitbox/sleep'

async function main() {
  await sleep( 1000 )
  console.log( 'I fell asleep for a second!' )
}

main()
```

You can of course use it as a Promise:

```js
import sleep from '@awaitbox/sleep'

sleep( 1000 )
  .then( data => console.log( 'I took a 1-second nap!' ) )
```

Chain values will pass through if you use it in a Promise chain like follows:

```js
import sleep from '@awaitbox/sleep'

fetch( ... )
  .then( ... )
  .then( sleep.bind( 1000 ) ) // passes data through after 1 second
  .then( data => console.log( 'use data for the awesome!', data ) )
```

Note
----

This is written in ES2016+ JavaScript. To use this in pre-ES2016 environments,
you'll need to run this through a transpiler like [Babel](http://babeljs.io)
(and I recommend using the
[fast-async](https://github.com/MatAtBread/fast-async) plugin to get the best
results). See some tips here on wiring it up with
[Webpack](https://webpack.js.org): http://2ality.com/2017/06/pkg-esnext.html.
