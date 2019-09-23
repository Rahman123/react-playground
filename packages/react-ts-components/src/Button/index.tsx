import React from 'react';
import { ButtonProps } from './index.d';

export default function Button(props: ButtonProps) {
    return <button>{props.label}</button>
}
