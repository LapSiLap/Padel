import React from 'react';
import styles from './Ball.module.css'

interface Props {
  color: 'red' | 'white',
}

function Ball(props: Props) {
  const className = props.color === 'red' ? styles.red : styles.white;

  return (
    <div className={className} />
  )
}

export default Ball;