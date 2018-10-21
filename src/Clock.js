import React from 'react';
import './Clock.css';

const Clock= props => {
	let time=props.time;
	let splits=time.split(':');
	let wish;
	if(splits[2].includes('AM')){
		if(splits[0]>=12 && splits[0]<3)
			wish="HAPPY MIDNIGHT!";
		if(splits[0]>=3 && splits[0]<6)
			wish="HAPPY DAWN!";
		if(splits[0]>=6 && splits[0]<12)
			wish="GOOD MORNING!";
	} else{
		if(splits[0]>=12 && splits[0]<3)
			wish="GOOD AFTERNOON!";
		if(splits[0]>=3 && splits[0]<6)
			wish="HAPPY DUSK!";
		if(splits[0]>=6 && splits[0]<7)
			wish="GOOD EVENING!";
		if(splits[0]>=7 && splits[0]<12)
			wish="GOOD NIGHT!";
	}
	return(
			<div id="time">
			<span style={{fontSize:80,fontWeight:300}}>HI, SAYAN</span><br/>
			<span style={{fontSize:100,fontWeight:600}}>{wish}</span><br/>
			<span style={{fontSize:70,fontWeight:400}}>TIME</span><br/>
			{time}</div>
		);
}

export default Clock;