import React, { Component } from 'react';
import { connect } from "react-redux";
import { shuffle, slice } from 'lodash';
import Section from "../../components/Section";
import { setPhotos } from "../../store/actions/mainActions";
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
        const { larger, moodPhotos, setPhotos } = this.props;
        // const shuffleMood = shuffle(moodPhotos);
        const numberOfPhotos = larger
            ? slice(moodPhotos, 0, 15)
            : slice(moodPhotos, 0, 12);

        return (
            <Section elementName={'mood'} text={'Mood'} textColor={'black'} color={'gold'}>
                <div className={'mood_section'}>
                    <p>Some mood Photos from our Events</p>
                    {numberOfPhotos.map((photos, index) => {
                        const location = photos.location;
                        const shufflePhotos = shuffle(photos.photos);
                        const photo = shufflePhotos[0].img;

                        return <div key={index} className={'photo_wrapper'} onClick={() => setPhotos(photos)}>
                            {this.setPhoto(photo, location)}
                                {photos.photos.length > 1 ? <i className="fas fa-images"/> : null}
                        </div>
                    })}
                </div>
            </Section>
        )
    };
}

const mapStateToProps = state => {
    const { windowWidthSize, moodPhotos } = state.mainReducer;
    const { larger } = windowWidthSize;

    return {
        larger,
        moodPhotos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPhotos: photosObj => dispatch(setPhotos(photosObj)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Mood);
