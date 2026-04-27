'use client';

import React from 'react'
import styles from '../Style/button.module.css';

const Button = ({onClick, text, type, disabled}) => {
  return (
    <button className={`${styles.roundedButton} ${disabled ? styles.disabled : ''}`}
            type={type || 'button'}
            onClick={onClick}
            disabled={disabled}>
        <p className={styles.text}>{text}</p>
    </button>
  )
}

export default Button