import { useEffect, useState } from "react";


async function getBuckets() {
	const bucketsURL = "/api/";
	const response = await fetch(bucketsURL);
	return await response.json();
}

async function getFiles(bucket: string) {
	const bucketObjectsURL = `/api/${bucket}/`;
	const response = await fetch(bucketObjectsURL);
	return await response.json();
}

async function getFile(bucket: string, object: string) {
	const bucketObjectsURL = `/api/${bucket}/${object}`;
	const response = await fetch(bucketObjectsURL);
	const blob = await response.blob();
	return URL.createObjectURL(blob)
}


export default function Index() {
	const [files, setFiles] = useState([]);
	const [fileURL, setFileURL] = useState('')

	useEffect(() => {
		getFiles("upheld-hope-380117-private")
			.then(json => {
				setFiles(json);
			}).catch(err => {
				console.log(err);
			})

		getFile("upheld-hope-380117-private", "mario_3d_world_art.0.webp")
			.then(url => {
				setFileURL(url);
			}).catch(err => {
				console.log(err)
			})
	}, [])


	return (<>
		<h1>Local Server Testing</h1>
		<div>
			<h2>Response Area</h2>
			<div>
				Available files are: {JSON.stringify(files, null, 4)}<br/>
				Selected file: {fileURL ? <img src={fileURL} /> : <div>EMPTY</div>}
			</div>
		</div> 
	</>)
}