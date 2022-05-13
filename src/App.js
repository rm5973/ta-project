import Search from "./compo/search";
import Card from "./compo/Card";
//props to be passed to card.jsx file
// usestate for search bar is to be added
//fetch request to be added for passing the data throung props to card.jsx
//maping fucntion to be used to map all the rendering cards
function App() {
  return (
    <div class='bg-inherit bg-white h-[70vw]  ' >  
        <div><Search />
          </div>
          <div class="flex justify-center items-center">
            <Card />
          </div>
        
     
    </div>
  );
}

export default App;
