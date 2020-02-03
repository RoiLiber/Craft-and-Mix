import React, { Component } from 'react';
import { connect } from "react-redux";
import { shuffle, slice } from 'lodash';
import Section from "../../components/Section";
import {setPhotos } from "../../store/actions/mainActions";
import './style.scss';

class Mood extends Component {

    popUp = item => {
        const { setPhotos } = this.props;
        setPhotos(item)
    };

    setPhoto = (photo, location) => {
        return <img src={photo} alt={location}/>
    };

    render() {
        const { large, moodPhotos, setPhotos } = this.props;

        return (
            <Section elementName={'mood'} text={'Mood'} textColor={'black'} color={'gold'}>
                <div className={'mood_section'}>
                    <p>Some mood Photos from our Events</p>
                    {moodPhotos.map((photos, index) => {
                        const location = photos.location;
                        const shufflePhotos = shuffle(photos.photos);
                        const photo = shufflePhotos[0].img;

                        return <div key={index} className={'photo_wrapper'} onClick={() => setPhotos(photos)}>
                            {this.setPhoto(photo, location)}
                        </div>
                    })}
                </div>
            </Section>
        )
    };
}

const mapStateToProps = state => {
    const { windowWidthSize, moodPhotos } = state.mainReducer;
    const { large } = windowWidthSize;

    return {
        large,
        moodPhotos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPhotos: photosObj => dispatch(setPhotos(photosObj)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Mood);
