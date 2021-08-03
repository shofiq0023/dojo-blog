import { useState } from 'react';

function Create() {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('mario');
	const [isPending, setIsPending] = useState(false);
	const [addedBlog, setAddedBlog] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newBlog = { title, body, author };

		setIsPending(true);

		setTimeout(() => {
			fetch('http://localhost:8000/blogs', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newBlog),
			}).then(() => {
				setIsPending(false);
				setTitle('');
				setBody('');
				setAuthor('mario');
				setAddedBlog(true);
				setTimeout(() => {
					setAddedBlog(false);
				}, 2000);
			});
		}, 800);
	};

	return (
		<div className='create'>
			<h2>Add a new blog</h2>
			{addedBlog && <p className='added-blog-message'>New Blog Added</p>}
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input
					required
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog body:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}></textarea>
				<label>Blog author:</label>
				<select
					required
					value={author}
					onChange={(e) => setAuthor(e.target.value)}>
					<option value='mario'>mario</option>
					<option value='yoshi'>yoshi</option>
				</select>
				{!isPending && <button>Submit</button>}
				{isPending && <button disabled>Adding...</button>}
			</form>
		</div>
	);
}

export default Create;
