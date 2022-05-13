import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
	cloud_name: 'drqbe1vok',
	api_key: '843435351471981',
	api_secret: 'k2GsDE1NFu1QrSqchwALazDqipc',
	secure: true,
});

describe('Test in fileUpload', () => {
	test('should upload a file and return a URL', async (done) => {
		const resp = await fetch(
			'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
		);
		const blob = await resp.blob();

		const file = new File([blob], 'photo.jpg');
		const url = await fileUpload(file);

		expect(typeof url).toBe('string');

		// Delete image:
		const segments = url.split('/');
		const imageId = segments[segments.length - 1].replace('.jpg', '');
		cloudinary.v2.api.delete_resources([imageId], {}, () => {
			done();
		});
	}); // test1

	test('should return an error', async () => {
		const file = new File([], 'photo.avif');
		const url = await fileUpload(file);

		expect(url).toBe(null);
	}); // test2
}); // close describe
