console.log('I am from summary js file');

const blogs = document.getElementsByTagName('p');
// console.log(blogs);
for (const blog of blogs) {
    // console.log(blog);
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'blue';
}
const harun = document.getElementById('special-blog');
// harun.innerText = 'Hello mr.harun';
// create Element
harun.innerHTML = `
<h4>special inner html</h4>
<div>
      <ul>
           <li>ami pari</li>
           <li>lol inside li </li>

      </ul>     
</div>
`
//remove element
// get element and then remove child 
const friends = document.getElementById('friends');
// console.log(friends.children);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

// create,get and add element
// create element 
const eleven = document.createElement('li');
eleven.innerText = 'friends-11';
// get element 
const allFriends = document.getElementById('friends');
//add element
allFriends.appendChild(eleven);


