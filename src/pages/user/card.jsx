function Card({bookData}) {
    return (
        <div className="card">
          {bookData.author}
          <div className="card__image">
            <img src="/img/bookDefault.png" alt="" />
          </div>
          <div className="card">
            <h1>Title</h1>
            <p>text</p>
          </div>
          <div className="card">
          <h1>Title</h1>
            <p>text</p>
          </div>
        </div>
    )
  }
export default Card;