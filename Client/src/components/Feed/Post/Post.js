import React from 'react';
import Image from '../../Image/Image';
import './Post.css';
import ViewButton from '../../Button/ViewButton';
import EditButton from './../../Button/EditButton';
import DeleteButton from './../../Button/DeleteButton';

const post = props => (
  <article className="post">
    <header className="post__header">
      <h3 className="post__meta">
        Posted by {props.author} on {props.date}
      </h3>
      <h1 className="post__title">{props.title}</h1>
    </header>
    <div className="post__image">
      <Image imageUrl={props.image} contain />
    </div>
    <div className="post__content">{props.content}</div>
    <hr className='ruler__small' />
    <div className="post__actions">
      <ViewButton mode="flat" link={props.id}>
        View
      </ViewButton>
      <EditButton mode="flat" onClick={props.onStartEdit}>
        Edit
      </EditButton>
      <DeleteButton mode="flat" design="danger" onClick={props.onDelete}>
        Delete
      </DeleteButton>
    </div>
  </article>
);

export default post;
