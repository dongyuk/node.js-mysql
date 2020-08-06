var sanitizeHtml = require('sanitize-html');

module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <a href="author">author</a>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  list:function(topics){
    var list = '<ul>';
    var i = 0;
    while(i < topics.length){
      list = list + `<li><a href="/?id=${topics[i].id}">${sanitizeHtml(topics[i].title)}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  },
  auhtorSelect:function(authors, author_id){
    var author = '';
    var i = 0;
    while(i < authors.length){
      var selected = '';
      if (authors[i].id === author_id) {
        selected = ' selected';
      }
      author += `<option value="${authors[i].id}"${selected}>${sanitizeHtml(authors[i].name)}</option>`;
      i++;
    } 
    return author;
  },
  authorTable:function(authors){
    var author = '<tr><td>id</td><td>name</td><td>profile</td><td>update</td><td>delete</td></tr>';
    var i = 0;
    while(i < authors.length){
      author += `<tr>
                    <td>${authors[i].id}</td>
                    <td>${sanitizeHtml(authors[i].name)}</td>
                    <td>${sanitizeHtml(authors[i].profile)}</td>
                    <td><a href="/author/update?id=${authors[i].id}">update</a></td>
                    <td>
                      <form action="/author/delete_process" method="post">
                        <input type="hidden" name="id" value="${authors[i].id}">
                        <input type ="submit" value="delete">
                      </form>
                    </td>
                 <tr>`;
      i++;
    } 
    return `
      <table>
        ${author}
      </table>
    `;
  }
}
