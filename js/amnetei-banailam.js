
const tags = document.getElementsByTagName('h3');
for (const tag of tags) {
    tag.style.textAlign = 'center';
    tag.style.color = 'darkblue';
}
const id = document.getElementById('first-paragraph');
id.style.color = 'brown';
id.style.textAlign = 'center';

const query = document.querySelector('h2');
query.style.color = 'gray';

const query2 = document.querySelectorAll('.second-li');
for (const query3 of query2) {
    query3.style.color = 'orange';
}

query.setAttribute('title', 'this is awesome');

//create element by js
const article = document.createElement('article');
article.classList.add('blog');
// const h3 = document.createElement('h3');
// h3.innerText = 'My awesome blog-5';
// const p = document.createElement('p');
// p.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat libero illo nihil, dolore reiciendis dignissimos molestias illum distinctio tenetur, quas ratione quibusdam? Consequuntur quos aperiam, modi libero illum debitis deleniti'
// article.appendChild(h3);
// article.appendChild(p);

article.innerHTML = `
<h3>My awesome blog-5</h3>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat libero illo nihil, dolore reiciendis dignissimos molestias illum distinctio tenetur, quas ratione quibusdam? Consequuntur quos aperiam, modi libero illum debitis deleniti</p>
`

// get element where we want to set 
const allBlogs = document.getElementById('blogs');
allBlogs.appendChild(article);

const blogs = document.getElementsByClassName('blog');
for (const blog of blogs) {
    blog.style.backgroundColor = 'gray';
    blog.style.border = '2px solid orange';
    blog.style.margin = '10px';
    blog.style.padding = '10px';
}