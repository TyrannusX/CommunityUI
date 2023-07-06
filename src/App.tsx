import './App.css';
import { Navbar } from 'flowbite-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeComponent from './home/home-component';
import React from 'react';
import { CommunitiesComponent } from './communities/communities-component';
import { CommunityComponent } from './communities/community/community-component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent/>
  },
  {
    path: "/communities",
    element: <CommunitiesComponent />
  },
  {
    path: "/community/:name",
    element: <CommunityComponent />
  }
])

function App() {
  return (
    <div>
    <Navbar fluid rounded>
    <Navbar.Brand>
      <span>Community!</span>
    </Navbar.Brand>
    <Navbar.Collapse>
      <Navbar.Link href='/'>
        Home
      </Navbar.Link>
      <Navbar.Link href='/communities'>
        Communities
      </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
  );
}

export default App;
