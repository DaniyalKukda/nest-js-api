
import '../App.css';

const Details = ({ setDetails, post }) => {

    return (
        <div className='App'>
            <button onClick={() => setDetails(false)}>Back</button>
            {post.statusCode === 404 ? <h2>{post.message}</h2> : <div>
                <h2>{post.title}</h2>
                <textarea disabled={true} rows={10} cols={80}>{post.body}</textarea>
            </div>}
        </div>
    );
};

export default Details;