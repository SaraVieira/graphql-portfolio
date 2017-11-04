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
          <meta charset="utf-8">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="description" content="Front-End Developer from Portugal">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="twitter:card" content="Front-End Developer From Portugal">
          <meta name="twitter:site" content="@NikkitaFTW">
          <meta name="twitter:title" content="Sara Vieira - Front-End Developer">
          <meta name="twitter:creator" content="@NikkitaFTW">
          <meta property="og:title" content="Sara Vieira - Front-End Developer" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.iamsaravieira.com/" />
          <meta property="og:description" content="Front-End Developer From Portugal" />
          <link rel="me" href="https://twitter.com/NikkitaFTW" type="text/html">
          <link rel="me" href="mailto:hey@iamsaravieira.com">
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
          <div id="root">
          </div>
          <noscript>
            Sara Vieira
            Front End Developer
            </noscript>
          <script src="${VENDOR_BUNDLE}"></script>
          <script src="${CLIENT_BUNDLE}"></script>
          <script>
            (function(a, h, d, c, g, f) {
                a.GoogleAnalyticsObject = c;
                a[c] || (a[c] = function() {
                    (a[c].q = a[c].q || []).push(arguments)
                });
                a[c].l = +new Date;
                g = h.createElement(d);
                f = h.getElementsByTagName(d)[0];
                g.src = "//www.google-analytics.com/analytics.js";
                f.parentNode.insertBefore(g, f)
            }(window, document, "script", "ga"));
            ga("create", "UA-37411302-1");
            ga("send", "pageview");
        </script>
        </body>
      </html>
    `)
}

export default render
