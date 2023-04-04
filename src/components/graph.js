import React,{useEffect,useState} from 'react'
import axios from 'axios';
import ChartViewer from './ChartViewer';
function Graph() {
	const [data, updateData] = useState([]);
	useEffect(() => {
		axios.get("https://api.dexit.network/transactions").then((res)=>{	
			updateData(res.data.data);
		})
	  }, []);
	return (
		<>
			<ChartViewer data={data} /> 
			{}
		</>
	);
}
export default Graph;
