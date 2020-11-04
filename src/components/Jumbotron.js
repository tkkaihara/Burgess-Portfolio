import React from 'react';
import {Switch, Link} from 'react-router-dom';

export default function Jumbotron() {
  return (
    <section id='landing'>
      <div className='header-box'>
        <div className='header-text'>
          <h1>Victoria Burgess</h1>
        </div>
        <div className='header-secondary'>
          <div>
            <p className='header-text mb-4'>UI/UX Designer</p>
          </div>
          <div>
            <Switch>
              <Link className='call-to-action' to='/app_designs'>
                My Work
              </Link>
            </Switch>
          </div>
        </div>
      </div>
    </section>
  );
}
