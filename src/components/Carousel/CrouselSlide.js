import React, { Component } from 'react';
import Carousel from 're-carousel';

export default function carousel () {
    return <Carousel loop auto widgets={[]}>
        <div style={{backgroundColor: 'tomato', height: '100%', width: '100%'}}>Frame 1</div>
        <div style={{backgroundColor: 'orange', height: '100%', width: '100%'}}>Frame 2</div>
        <div style={{backgroundColor: 'orchid', height: '100%', width: '100%'}}>Frame 3</div>
    </Carousel>
}
