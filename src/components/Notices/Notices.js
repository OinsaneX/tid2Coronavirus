import React from 'react'
import './Notices.css'
function Notices() {
    return (
        <div className="container">
             <div id="blog" className="row"> 
        <div className="col-md-10 blogShort">
        <h1>Title 1</h1>
        <img src="http://www.kaczmarek-photo.com/wp-content/uploads/2012/06/guinnes-150x150.jpg" alt="post img" className="pull-left img-responsive thumb margin10 img-thumbnail"/>
        
            <em>This snippet use <a href="http://bootsnipp.com/snippets/featured/sexy-sidebar-navigation">Sexy Sidebar Navigation</a></em>
        <article><p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.    
            </p></article>
        <a className="btn btn-blog pull-right marginBottom10" href="http://bootsnipp.com/user/snippets/2RoQ">READ MORE</a> 
    </div>
     <div className="col-md-10 blogShort">
        <h1>Title 2</h1>
        <img src="http://www.kaczmarek-photo.com/wp-content/uploads/2012/06/DSC_4073-150x150.jpg" alt="post img" className="pull-left img-responsive thumb margin10 img-thumbnail"/>
        <article><p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
            </p></article>
        <a className="btn btn-blog pull-right marginBottom10" href="http://bootsnipp.com/user/snippets/2RoQ">READ MORE</a> 
    </div>
    
     <div className="col-md-10 blogShort">
        <h1>Title 3</h1>
        <img src="http://www.kaczmarek-photo.com/wp-content/uploads/2012/06/DSC_1681-150x150.jpg" alt="post img" className="pull-left img-responsive thumb margin10 img-thumbnail"/>
        <article><p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
            </p></article>
        <a className="btn btn-blog pull-right marginBottom10" href="http://bootsnipp.com/user/snippets/2RoQ">READ MORE</a> 
    </div>
    
  <div className="col-md-12 gap10"></div>
</div>
</div>
    )
}

export default Notices
