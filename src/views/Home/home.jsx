import React from 'react'
import Allbeers from '../../assets/beers.png'
import Random from '../../assets/random-beer.png'
import NewBeer from '../../assets/new-beer.png'
import './home.css'

const Home = () => {
    return(
        <div className='home'>
            <a className='homeCard' href='/beers' alt='all beers' >
                <img src={Allbeers} alt="All beers" />
                <div>
                    <h2>All beers</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex consequuntur corrupti tempore necessitatibus inventore est aspernatur unde.</p>
                </div>
            </a>
            <a className='homeCard' href='/beers/random' alt='random'>
                <img src={Random} alt="Random Beer" />
                <div>
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex consequuntur corrupti tempore necessitatibus inventore est aspernatur unde.</p>
                </div>
            </a>
            <a className='homeCard' href='/new-beer' alt='new-beer'>
                <img src={NewBeer} alt="New Beer" />
                <div>
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex consequuntur corrupti tempore necessitatibus inventore est aspernatur unde.</p>
                </div>
            </a>
        </div>
    )
}
export default Home 