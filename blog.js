const getOpenInNew = () => {
  const openInNew = document.createElement("i")
  openInNew.setAttribute("class", "material-icons")
  openInNew.setAttribute("role", "presentation")
  openInNew.setAttribute("aria-label", "link leads to external site")
  openInNew.append("open_in_new")

  return openInNew
}

function getBlogPosts() {
  fetch("https://dev.to/api/articles?username=eevajonnapanula")
    .then((res) => res.json())
    .then((data) => createPosts(data))
}

function createPosts(posts) {
  const section = document.getElementById("blog-posts")
  posts.forEach((item) => {
    const title = document.createElement("h3")
    const link = document.createElement("a")
    link.setAttribute("href", item.url)
    link.append(`${item.title} `)
    link.append(getOpenInNew())
    title.append(link)
    const date = document.createElement("p")
    date.append(`${item.readable_publish_date}`)
    const reactions = document.createElement("p")
    reactions.append(
      `${item.comments_count} comments | ${item.public_reactions_count} reactions`
    )

    const description = document.createElement("p")
    description.append(item.description)
    const tags = document.createElement("p")
    tags.append(`#${item.tag_list.join(", #")}`)
    const post = document.createElement("article")
    post.setAttribute("class", "blog-post")
    post.append(title)
    post.append(date)
    post.append(reactions)
    post.append(tags)
    post.append(description)
    section.append(post)
  })
}

getBlogPosts()
