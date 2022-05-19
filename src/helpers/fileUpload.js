
export const fileUpload = async file => {
	const cloudUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`;
	const formData = new FormData();
	formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
	formData.append('file', file);

	try {
		const resp = await fetch(cloudUrl, {
			method: 'POST',
			body: formData,
		});
		if (resp.ok) {
			const cloudResp = await resp.json();
			return cloudResp.secure_url;
		} else {
			return null;
		}
	} catch (err) {
		throw err;
	}
};


