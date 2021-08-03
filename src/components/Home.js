import BlogList from './BlogList';
import useFetch from '../customHooks/useFetch';

function Home() {
	// using a custom hooks here
	const {
		// putting the data in the 'blogs'
		data: blogs,
		isPending,
		error,
	} = useFetch('http://localhost:8000/blogs');

	return (
		<div className='home'>
			<h2>Blogs</h2>
			{error && <p>{error}</p>}
			{isPending && <p>Loading...</p>}
			{blogs && !isPending && <BlogList blogs={blogs} />}
			{blogs === null && !isPending && !error && <p>No blogs</p>}
		</div>
	);
}

export default Home;
