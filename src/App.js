import { useEffect, useState } from "react";
import Card from "./components/card/Card";
import Search from "./components/Search/Search";
import './App.css';
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=39020913-bedaaba3c700d191941e8a030&q=${term}&image_type=photo&pretty=false&per_page=200`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <>
      <h1 className="tittle">Search any Image you Want</h1>
      <div className="container">
        <Search searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && <h1 className="search">No Images Found</h1>}

        {isLoading ? <h1 className="grid">Loading...</h1> : <div className="gridecl">
          {images.map(image => (
            <Card key={image.id} image={image} />
          ))}
        </div>}
      </div>
    </>
  );
}

export default App;
