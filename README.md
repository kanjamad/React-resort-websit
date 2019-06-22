# React Beach Resort Project
* Display hotel rooms
* Set up functionality so the user can filter 
* Used reactor for routing react content API
* Full responsive
* Used react icons is very nice features render as a SVG 

## User stories

### Home page
* Have hero component that will have a background image
* In the middle of hero component will have banner that will have link to route to rooms page
* Used react icons to display the services
* Have data for all the rooms in the hotel
* Room component will have price, name, image and when hover the image will have option of click then will navigate to a single room page

### Single room page
* Have information just about the specific room page
* Info : price, size, pets allowed/not allowed, free breakfast included/not included
* Detail: just about the specific for that room

### Rooms page
* Have multiple rooms
* User have option to filter ; Room type, Number of Gueste, Search by the price, Room size and have more filter by check the box breakfask included and pet allowed or just want to looking for the room the allwed pet 
* Search by the price : if you go below the price will have message error notice it say no rooms match


### Navigate to page that doesn't exist
* Used react router
* Create custom 404 page not found 
* Will have option fo click return to home page or can navigate through a navbar

___


## Single room
* forEach
* A Switch renders the first child Route that matches. A Route with no path always matches.

```
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/rooms" component={Rooms} />
<Route exact path="/rooms/: name variable" component={SingleRoom} />
<Route component={Error} />
</Switch>

```

## Navbar
* Have navbar every page
* app.js pretty much done

```
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:roomName" component={SingleRoom} />
      <Route component={Error} />
      </Switch>

```


## Additional Resources
1. <a href="https://www.slightedgecoder.com/2018/12/18/page-not-found-on-netlify-with-react-router/" target="_blank">react-router-dom an netlify</a>
2. <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank">React Router Dom </a>
3. <a href="https://react-icons.netlify.com/#/" target="_blank">React Icons</a>