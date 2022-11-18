import './App.css'
import React from 'react';
import Card from './component/card/Card'

function App(){
  return <div> 
    <Card 
    title="Forest" 
    imageUrl="https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0"
    body="Nature, in the broadest sense, is the physical world or universe. 
         Nature can refer to the phenomena of the physical world, 
         and also to life in general. The study of nature is a large, 
         if not the only, part of science."/>
  </div>
}
export default App;