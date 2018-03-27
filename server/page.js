export default (App, state) => (
    `<!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>React demo</title>
        <script defer src="./dest/js/main.bundle.js"></script>
        <style>
            .hoho {
                display: block;
                margin: 10px;
            }
        </style>
    </head>
    <body>
    <div id="app">${App}</div>
    <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
    </script>
    </body>
    </html>`
)