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
      list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
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
      author += `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`;
      i++;
    } 
    return author;
  }
}