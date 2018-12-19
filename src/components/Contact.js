import React, { Component } from 'react';
import Styled from 'styled-components';

export default class Contact extends Component {
  render() {
    const { name, email, phone, id } = this.props;
    return (
      <main className='mw6 center' key={id}>
        <article>
          <a
            className='link dt w-100 bb b--black-10 pb2 mt2 dim blue'
            href='#0'
          >
            <div className='dtc w3'>
              <img
                src='http://mrmrs.github.io/images/0010.jpg'
                className='db w-100'
              />
            </div>
            <div className='dtc v-top pl2'>
              <h1 className='f6 f5-ns fw6 lh-title black mv0'>{name}</h1>
              <h2 className='f6 fw4 mt2 mb0 black-60'>{email}n</h2>
              <dl className='mt2 f6'>
                <dt className='clip '>Price</dt>
                <dd className='ml0'>{phone}</dd>
              </dl>
            </div>
          </a>
        </article>
      </main>
    );
  }
}
