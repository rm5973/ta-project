import Search from "./compo/search";
import Card from "./compo/Card";
import list from "./list"
import images from './images/images.png'
//props to be passed to card.jsx file
// usestate for search bar is to be added
//fetch request to be added for passing the data throung props to card.jsx
//maping fucntion to be used to map all the rendering cards
function CardCreation(list){
  return(
    <div class="p-2 flex justify-center items-center">

    <Card 
    imglink={list.imglink}
    year={list.year}
    />
    </div>
  )
}
function App() {
  return (
    <div class='bg-inherit bg-white h-[70vw]  ' >  
        <div><Search />
          </div>
          
          {list.map(CardCreation)}
     
    </div>
  );
}

export default App;
