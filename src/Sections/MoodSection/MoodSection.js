import React, { Component, Fragment } from 'react';
import './style.scss';
import SectionHeadLine from "../../components/SectionHeadLine";
import { connect } from "react-redux";
import { Fade } from "react-reveal";
import PopUpImg from '../../components/UI/PopUpPhoto/PopUpPhoto';
import backgroundImage from '../../assest/img/logos/G.png';
import {find, slice} from 'lodash';

class MoodSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popUpPhoto: false,
            photo: this.props.mood[0].img,
            photoText: '',
            nextPhoto: this.props.mood[1].img,
            popPhoto: '',
            nextPhotoIndex: 1,
            activeCarousel: false
        };
    }

    componentDidMount() {
        this.toggleCarousel(true)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { nextPhotoIndex, activeCarousel } = this.state;

        if (prevState.activeCarousel !== activeCarousel && activeCarousel) {
            setTimeout(() => {
                this.carousel(nextPhotoIndex)
            }, 3000)
        }
    }

    toggleCarousel = bool => {
        this.setState({ activeCarousel: bool })
    };

    carousel = index => {
        const { mood } = this.props;

        const img = find(mood, { index: index });
        this.toggleCarousel(false);
        this.setState({
            photo: img.img,
            nextPhoto: index === 6 ? mood[0].img : mood[index + 1].img,
            nextPhotoIndex: index === 6 ? 0 : index + 1,
            photoText: img.text
        });
        this.toggleCarousel(true)
    };

    popUp = item => {
        const { popUpPhoto } = this.state;
        this.setState({ popUpPhoto: !popUpPhoto, popPhoto: item })
    };

    render() {
        const { mood } = this.props;
        const { popPhoto, popUpPhoto, photo, activeCarousel, nextPhotoIndex,photoText } = this.state;
        let width = window.innerWidth;
        // const photos = width < 767 ? slice(mood, 0, 2) : mood;

        return (
            <div className={'mood_section'} style={{ backgroundImage: `url(${backgroundImage})` }}>
                {/*<Fragment>*/}
                {/*    <a href={'https://www.instagram.com/craftnmix/'} target={'_blank'}>*/}
                {/*        <i className="fab fa-instagram"/>*/}
                {/*    </a>*/}
                {/*    <a href={'https://www.facebook.com/asafamir1'} target={'_blank'}>*/}
                {/*        <i className="fab fa-facebook-square"/>*/}
                {/*    </a>*/}
                {/*    <a href={'#'} target={'_blank'}>*/}
                {/*        <i className="fas fa-phone-square-alt"/>*/}
                {/*    </a>*/}
                {/*    <a href={'#'} target={'_blank'}>*/}
                {/*        <i className="far fa-envelope"/>*/}
                {/*    </a>*/}
                {/*</Fragment>*/}
                {popUpPhoto && <PopUpImg photo={popPhoto} onClick={() => this.popUp()} />}
                <div className={'mood'}>
                    {activeCarousel &&
                    <div className={'mood_img_wrapper'}>
                        <Fade delay={120}>
                            <div onClick={() => this.popUp(photo)}>
                                <img src={photo} alt={`mood`}/>
                            </div>
                        </Fade>
                        <Fade delay={350}>
                            <span className={'text'}>{photoText}</span>
                        </Fade>
                    </div>
                    }

                </div>
                <SectionHeadLine
                    scrollTo={this.scrollTo}
                    scroll={1000}
                    text={'Mood'}
                    textColor={'black'}
                    arrowColor={'gold'}
                    lineColor={'gold'}
                    arrowUp={true}
                />
            </div>
        )
    };
}

const mapStateToProps = state => {
    const { mood } = state.mainReducer;
    return {
        mood
    };
};

export default connect(mapStateToProps)(MoodSection);
