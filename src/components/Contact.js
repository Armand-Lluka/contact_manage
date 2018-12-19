import React, { Component } from 'react';
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Article = Styled.article.attrs({
  className: 'mw6 center'
})``;
const Hover = Styled.div.attrs({
  className: 'link dt w-100 bb b--black-10 pb2 mt2 dim blue'
})``;
const Cell = Styled.div.attrs({
  className: 'dtc w3'
})``;
const Image = Styled.img.attrs({
  className: 'db w-100'
})``;
const Name = Styled.h1.attrs({
  className: 'f6 f5-ns fw6 lh-title black mv0'
})``;
const Email = Styled.h2.attrs({
  className: 'f6 fw4 mt2 mb0 black-60'
})``;
const Phone = Styled.dd.attrs({
  className: 'ml0 pt2'
})``;
const Table = Styled.div.attrs({
  className: 'dtc v-top pl2'
})``;

export default class Contact extends Component {
  state = {};

  onShowClick = e => {
    console.log(e);
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    return (
      <Article key={id}>
        <Hover href='#0'>
          <Cell>
            <Image src='http://mrmrs.github.io/images/0010.jpg' />
          </Cell>
          <Table>
            <Name>
              {name}{' '}
              <FontAwesomeIcon onClick={this.onShowClick} icon='sort-down' />
            </Name>
            <Email>{email}</Email>
            <Phone>{phone}</Phone>
          </Table>
        </Hover>
      </Article>
    );
  }
}
