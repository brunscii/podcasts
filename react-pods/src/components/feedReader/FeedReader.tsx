import "./FeedReader.css"
function FeedReader() {
  return (
    <>
    <div className='rss-input-box' >
      <div className="rss-input">
        <label htmlFor="rss-input">Enter a RSS URL</label>
        <input title="rss-input" type="url" name="rss-input" id="rss-input" placeholder="rss.website.com" />
      </div>
    </div>
    </>
  )
}
export default FeedReader