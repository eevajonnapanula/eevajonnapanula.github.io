function getBlogPosts() {
  fetch("https://dev.to/api/articles?username=eevajonnapanula")
    .then((res) => res.json())
    .then((data) => createPosts(data))
}

function createPosts(posts) {
  const section = document.getElementById("blog-posts")
  posts.forEach((item) => {
    console.log(item)
    const title = document.createElement("h3")
    title.append(item.title)
    const date = document.createElement("span")
    date.append(item.readable_publish_date)
    const description = document.createElement("p")
    description.append(item.description)
    const post = document.createElement("article")
    post.setAttribute("class", "blog-post")
    post.append(title)
    post.append(date)
    post.append(description)
    section.append(post)
  })
}

getBlogPosts()
