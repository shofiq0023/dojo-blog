import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../customHooks/useFetch';

const BlogDetails = () => {
	const { id } = useParams();
	const history = useHistory();
	const {
		data: blogs,
		isPending,
		error,
	} = useFetch('http://localhost:8000/blogs/' + id);

	const deleteBlog = () => {
		fetch('http://localhost:8000/blogs/' + id, {
			method: 'DELETE',
		}).then(() => {
			history.push('/');
		});
	};

	return (
		<div>
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blogs && (
				<article className='blog-details'>
					<h2>{blogs.title}</h2>
					<p>Written by: {blogs.author}</p>
					<div>{blogs.body}</div>
					<button onClick={deleteBlog}>Delete blog</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
