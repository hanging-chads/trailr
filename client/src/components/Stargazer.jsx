import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AddPicture from './AddPicture.jsx';
import AstroPhoto from './AstroPhoto.jsx';

const Stargazer = ({ user, location: { lat, lng } }) => {
	const [bg, setBg] = useState(true);
	// if user reloads the page location isn't stored so set it defalut to new orleans
	lat = lat || 30.0766974;
	lng = lng || -89.8788793;

	const handleBg = () => {
		setBg(!bg);
	};

	return (
		<div style={{
			backgroundColor: bg ? null : '#121212'
		}}>
			<button onClick={handleBg} />
			<Container style={{ display: 'flex', padding: '40px' }}>
				<iframe
					width="900" 
					height="600" 
					frameBorder="0" 
					scrolling="yes"
					src={`https://virtualsky.lco.global/embed/index.html?longitude=${lat}&latitude=${lng}&projection=gnomic&constellations=true&constellationlabels=true&az=73.76133336981957&live=true`}
				>
				</iframe>
			</Container>
			{/* <AddPicture /> */}
			<AstroPhoto user={user}  />
		</div>
)}


export default Stargazer;