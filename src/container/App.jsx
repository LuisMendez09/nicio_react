import React from 'react'
import Header from '../componet/Header'
import Search from '../componet/Search';
import Categories from '../componet/Categories';
import Carousel from '../componet/Carousel';
import CarouselItem from '../componet/CarouselItem';
import Footer from '../componet/Footer';
import useInitialState from '../assets/hooks/useInitialState';

import '../assets/styles/App.scss'


const API = "http://localhost:3000/initalState";

const App  = ()=> {
    const InitialState = useInitialState(API);
    
    return (
        <div className="App">
            <Header/>
            <Search/>

            { InitialState.mylist.length > 0 && 
                <Categories title="mi lista">
                    <Carousel>
                    {InitialState.mylist.map(item=>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                    </Carousel>
                </Categories>
            };


            <Categories title='tendencias'>
                <Carousel>
                    {InitialState.trends.map(item=>
                            <CarouselItem key={item.id} {...item}/>
                        )};
                </Carousel>
            </Categories>

            <Categories title='originales'>
                <Carousel>
                    {InitialState.originals.map(item=>
                            <CarouselItem key={item.id} {...item}/>
                        )};
                </Carousel>
            </Categories>




            <Footer/>
        </div>
    );
}
    

export default App