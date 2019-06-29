# React Beach Resort Project
* Beach Resort is a full stack mock resort website template that can be sold to clients to display their hotel rooms and have option to filter : room type, number of guests, search by the price, room size, included breakfast , allowed pet … more 
* Used react router for routing and create custom 404 page not found and will have option of click return to home page or can navigate through a navbar
* Used react context API for state management 
* used contentful  headlessCMS for data management
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

## React.createContext API
* Create a Context object
* Access to component
* Provider React component : allows the access to my context all throughout my application
* Context.Consumer : Consumer will lets subscribe to a context within a function component.

![loading](assets/load.gif "loading")


## Styled components to styled-Hero
* We can attach styles to the component and it will be right away rendered
* Use javaScript and CSS
* Installation 

```
npm install --save styled-components

```

![styled-hero](assets/styled.gif "styled-hero")

## Additional Resources
1. <a href="https://www.slightedgecoder.com/2018/12/18/page-not-found-on-netlify-with-react-router/" target="_blank">react-router-dom an netlify</a>
2. <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank">React Router Dom </a>
3. <a href="https://react-icons.netlify.com/#/" target="_blank">React Icons</a>
4. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns" target="_blank">grid-template-columns</a>
5. <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">A Complete Guide to Grid</a>
6. <a href="https://reactjs.org/docs/context.html#reactcreatecontext" target="_blank">React.createContext API</a>
7. <a href="https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d" target="_blank">Simplify your JavaScript – Use .map(), .reduce(), and .filter()</a>
8. <a href="https://icons8.com/preloaders/en/search/2/loading" target="_blank">loading gif</a>
9. <a href="https://reactjs.org/docs/typechecking-with-proptypes.html" target="_blank">Typechecking With PropTypes</a>
10. <a href="https://www.iconfinder.com/" target="_blank">logo icon</a>
11. <a href="https://www.styled-components.com/" target="_blank">Styled components</a>
