import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	() => {
		console.log('Deploy Complete!');
	}
);
