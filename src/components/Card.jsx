const Card = ({influencer}) => {
    const { profile_picture, name, latest_post, latest_review, latest_recipe } = influencer;

    const content = latest_post ? (
        <div className='content'>
          <p>{latest_post.caption}</p>
          <div className='reactions'>
            <p>Likes: {latest_post.basic_stats.likes}</p>
            <p>Comments: {latest_post.basic_stats.comments}</p>
            <p>Shares: {latest_post.basic_stats.shares}</p>
          </div>
        </div>
      ) : latest_review ? (
        <div className='content'>
          <p>{latest_review.caption}</p>
          <div className='reactions'>
            <p>Likes: {latest_review.basic_stats.likes}</p>
            <p>Comments: {latest_review.basic_stats.comments}</p>
            <p>Shares: {latest_review.basic_stats.shares}</p>
          </div>
          
        </div>
      ) : latest_recipe ? (
        <div className='content'>
          <p>{latest_recipe.caption}</p>
          <div className='reactions'>
          <p>Likes: {latest_recipe.basic_stats.likes}</p>
          <p>Comments: {latest_recipe.basic_stats.comments}</p>
          <p>Shares: {latest_recipe.basic_stats.shares}</p>
          </div>
        </div>
      ) : null;

    return(
      <div className="card">
      <img className='profile-pic' src={profile_picture} alt={name} />
      <h3>{name}</h3>
      {/* {follower_count && <p>Followers: {follower_count}</p>} */}
      {content}
    </div>
    );
}
export default Card;