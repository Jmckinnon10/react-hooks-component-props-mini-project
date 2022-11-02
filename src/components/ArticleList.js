function ArticleList({blogData})  {
  console.log(blogData)
  const blogInfo = blogData.map((blog) => {
    console.log(blog)
    const {date, preview, title, id} = blog
    return ( 
    <>
      <h3 key={id}>{title}</h3>
      <small key={id}>{date ? date : "January 1, 1970" }</small>
      <p key={id}>{preview}</p>
    </>
    )
  })

  return (
    <article>
      {blogInfo}
    </article>
  )
}

export default ArticleList;