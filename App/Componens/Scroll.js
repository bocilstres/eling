import React, { useState } from 'react'
import InfiniteScroll  from 'react-infinite-scroller'
import UserService from 'services/UserService';


export default function InfiniteScrollerWithReactInfiniteScroller() {

  const [userList, setUserList] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const loadRondaList = (page) => {
    setTimeout(() => {
      UserService.getList(Ronda)
      .then((res) => {
        const newList = userList.concat(res.data);
        setRondaList(newList);

        if(res.data.length===0) {
          setHasMoreItems(false);
        } else {
          setHasMoreItems(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
    
    }, 1500)
  }
  
  return (
    <div>
      <div className="section">
        <InfiniteScroll
          threshold={0}
          pageStart={0}
          loadMore={loadUserList}
          hasMore={hasMoreItems}
          loader={<div className="text-center">loading data ...</div>}>

            {userList.map((user, i) => 
              ( 
              <div className="box m-3 user" key={i}>
                <img src={user.avatar} alt={user.first_name}/>
                <div className="user-details">
                  <strong>Email</strong>: {user.email}<br/> 
                  <strong>First Name</strong>: {user.first_name}<br/> 
                  <strong>Last Name</strong>: {user.last_name}<br/>
                </div>
              </div>
              )
            )}
        </InfiniteScroll>
        {hasMoreItems ? "" : <div className="text-center">no data anymore ...</div> }    
      </div>
    </div>
  )
}