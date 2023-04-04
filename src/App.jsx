import React from 'react'
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import { Cookies } from 'universal-cookie';

// import ChannelContainer from './components/ChannelContainer';
// import ChannelListContainer from './components/ChannelListContainer'; 

import { ChannelListContainer,ChannelContainer } from './components'; //Two import in one line

const apiKey = 'hbvqpvy2sxtf';

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app_wrapper'>
        <Chat client={client} theme="team light">
          <ChannelListContainer>

          </ChannelListContainer>
          <ChannelContainer>
            
          </ChannelContainer>
        </Chat>
    </div>
  )
}

export default App

