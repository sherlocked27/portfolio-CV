import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Hello from '../components/Contact/Hello';

const Index = () => (
  <Main
    description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/"><Hello />! Welcome to my Website</Link></h2>
          <p>
            Data is everywhere and Data is <a href = "https://informationisbeautiful.net/">beautiful</a> .
          </p>
        </div>
      </header>
      <p> Welcome to my website. You can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">some statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/sherlocked27/portfolio-CV">here</a>.</p>
    </article>
  </Main>
);

export default Index;
