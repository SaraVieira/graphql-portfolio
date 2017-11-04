/* global CSS_BUNDLE: true, VENDOR_BUNDLE: true, CLIENT_BUNDLE: true */
function render (req, res) {
  const context = {}

  if (context.url) {
    return res.redirect(302, context.url)
  }

  return res.status(context.status || 200).send(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.23.0/theme/material.css" />
          <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono" rel="stylesheet">
          <title>Sara Vieira</title>
          <style>
            body,
            html,
            #root {
              height: 100%;
            }
          </style>
          <link href="${CSS_BUNDLE}" rel="stylesheet">
        </head>
        <body>
          <div id="root"></div>
          <script src="${VENDOR_BUNDLE}"></script>
          <script src="${CLIENT_BUNDLE}"></script>
        </body>
      </html>
    `)
}

export default render
