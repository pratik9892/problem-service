const marked = require("marked")
const sanitizeHtmlLib = require('sanitize-html');
var TurndownService = require('turndown')

function sanitizeMarkdownContent(markdownContent){

    const turndownService = new TurndownService()

    // 1.Convert markdown to html
    const convertedHTML = marked.parse(markdownContent)

    // 2. sanitize the converted html for any malicious script tags

    const sanitizedHTML = sanitizeHtmlLib(convertedHTML , {
        allowedTags : sanitizeHtmlLib.defaults.allowedTags
    })

    // convert sanitize html back to markdown
    return turndownService.turndown(sanitizedHTML)
}

module.exports = sanitizeMarkdownContent;