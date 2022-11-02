function About({blogData}){
  
  const {image, about} = blogData
  return (
    <aside>
      <img src={image ? image : 'https://via.placeholder.com/215'} alt="blog logo"></img>
      <p>{about}</p>

    </aside>
  )
}

export default About;