 console.log(' ----  templateLiterals ---- ')

 const name_ = 'John'
 const age = '30'
 const job = 'Web Developer'
 const city = 'Miami'
 let html;

 /* withou template strings  */

html = '<ul><li>Name : ' + name_  +  '</li><li>' + age + '</li><li>' + job
  + '</li><li>' + city + '</li></ul>'

html = '<ul>' +
          '<li>' + name_ + '</li>' +
          '<li>' + age + '</li>' +
          '<li>' + job + '</li>' +
          '<li>' + city + '</li>' +
        '</ul>'
  /* template string  */

  function hello(){
    return 'Hello'
  }

html = `<ul>
          <li>Name : ${name_}</li>
          <li>Name : ${age}</li>
          <li>Name : ${job}</li>
          <li>Name : ${city}</li>
          <li>Name : ${2 + 2}</li>
          <li>Name : ${ hello()}</li>
          <li>Name : ${ age > 30 ? 'Over 30' : 'under 30' }</li>
    </ul>`;
console.log(html);
Document.body.innerHTML  = html;
/* document.body.innerHTML = '<h1>Hello</h1>' */
