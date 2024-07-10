import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const PageAnalytics = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [pages,setPages] = useState([])
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  console.log(state);
  // sample pages owned by user
 

  useEffect(() => {
    if (state) {
      // Fetch pages managed by the user
      fetchManagedPages(state.userID, state.accessToken);
    }
  }, [state]);
   // Function to fetch pages managed by the user
   const fetchManagedPages = async (userID, accessToken) => {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v12.0/me/accounts`, {
        params: {
          access_token: accessToken,
        },
      });
      console.log("req done",response);
      setPages(response.data.data)
    } catch (error) {
      console.error("Error fetching managed pages:", error);
    }
  };


 


  // handle page selection change
  const handlePageChange = (selectedOption) => {
    setSelectedPage(selectedOption);
  };

  const handleClick = ()=>{
    if(selectedPage){
        navigate(`/page/${selectedPage?.value}`,{
            state:state
        })

    }
  }

return (
    <div>
      {state && (
        <>
          <h2>Welcome,{state?.name}</h2>
          <img
            src={state?.picture.data.url}
            alt="name"
            style={{ width: "50px", borderRadius: "50%" }}
          />
          <h3>Select a Facebook Page</h3>
          <Select
            options={pages?.map((page)=>({label:page.name,value:page.id}))}
            onChange={handlePageChange}
            value={selectedPage}
          />
          {/* navigate to the particular page */}
          {selectedPage && <button onClick={handleClick}>Submit</button>}
          
        </>
      )}
    </div>
  );
};

export default PageAnalytics;
