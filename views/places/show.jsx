const React = require('react')
const Def = require('../default')

function show (data) {
    let comments =(
      <h3 className='inactive'>
        No comments yet!
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
            <Def>
              <main>
              <h1>{data.place.name}</h1>
                <div className="row">
                  <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name} />
                    <h3>
                      Located in {data.place.city}, {data.place.state}
                    </h3>
                  </div>
                  <div className="col-sm-6">
                    <h2>
                      Description
                    </h2>
                    <h3>
                      {data.place.showEstablished()}
                    </h3>
                    <h4>
                      Serving {data.place.cuisines}
                    </h4>
                  </div>
                </div>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                  Edit
                </a>  
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>  
                <hr /> 
                <h2>Comments</h2>
                  {comments}  
                <form method="POST" action={`/places/${data.place.id}/comment`}>
                <label for="author">Author</label>
                <input type="text" id="author" name="author" />
                <label for="content">Leave your mark!</label>
                <input type="textArea" id="content" name="content" />
                <label for="stars">Give it a rating:</label>
                <input type="number" step={0.5} id="stars" name="stars" min={0} />
                <label for="rant">Rant?</label> 
                <input type="checkbox" id="rant" name="rant" />
                         
                <button type="submit" className='btn btn-primary'>
                  Submit your comment
                </button>   
                </form>
              </main>
            </Def>

    )
}

module.exports = show


