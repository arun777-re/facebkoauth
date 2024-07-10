import React,{useEffect,useState} from 'react';
import { useParams,useLocation } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';

const PageInsights = () => {
    const [analyticsData,setAnalyticsData] = useState(null);
    const {id} = useParams();
    const {state} = useLocation();
    console.log(state);
       //  function to fetch analytics data
       useEffect(() => {
        fetchAnalyticsData();
      }, [id]);

    const fetchAnalyticsData = async () => {
        if (state.accessToken) return;
          try {
            const response = await axios.get(
              `https://graph.facebook.com/v12.0/${id}/insights/`,
              {
                params: {
                  access_token: state?.accessToken,
                  since:'2023-06-01',
                  until:'2024-06-01',
                  period: "total_over_period",
                },
              }
            );
            setAnalyticsData(response.data.data);
            console.log(response);
          } catch (error) {
            console.error("Error while fetching analyticsData", error);
            console.log(error.response.data.error);
          }
      };
   
  return (
    <div>
    {analyticsData && analyticsData?.length >0 ?
    ( analyticsData?.map((data)=>(
        <Card head={data.title} data={data.value}/>
    ))
):(
    <p>No analytics data available</p>
)
}        
    </div>
  )
}

export default PageInsights