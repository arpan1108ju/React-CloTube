import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar,Feed,ChannelDetail,VideoDetail,SearchFeed} from './components';

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor : '#000'}}>
          <Navbar/>
            <Routes>
                <Route path="/" exact element={<Feed/>} />
                <Route path="/video/:id" element={<VideoDetail/>}></Route>
                <Route path="/channel/:id" element={<ChannelDetail/>}></Route>
                <Route path="/search/:searchTerm" element={<SearchFeed/>}></Route>
            </Routes>

        </Box>
    
    </BrowserRouter>

)


export default App