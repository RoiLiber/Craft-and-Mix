import React, { Component, Fragment } from 'react';
import './style.scss';
import SectionHeadLine from "../../components/SectionHeadLine";
import { connect } from "react-redux";
import { Fade } from "react-reveal";
import PopUpImg from '../../components/UI/PopUpPhoto/PopUpPhoto';
import backgroundImage from '../../assest/img/logos/G.png';

class MoodSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popUpPhoto: false,
            photo: ''
        };
    }

    popUp = item => {
        const { popUpPhoto } = this.state;
        this.setState({ popUpPhoto: !popUpPhoto, photo: item })
    };

    render() {
        const { mood } = this.props;
        const { photo, popUpPhoto } = this.state;
        let width = window.innerWidth;

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
                {popUpPhoto && <PopUpImg photo={photo} onClick={() => this.popUp()} />}
                <div className={'mood'}>
                    <div className={'mood_img_wrapper'}>
                        {mood.map((item, index) => {
                            return <Fragment>
                                {width < 767 && index === 1
                                ? <div onClick={() => this.popUp(item)}>
                                        <Fade bottom delay={120 * index}>
                                            <img src={item} alt={`${index}`}/>
                                        </Fade>
                                    </div>
                                    : (index === 0 || index === 1 || index === 2) && width > 767
                                ? <div onClick={() => this.popUp(item)}>
                                        <Fade bottom delay={120 * index}>
                                            <img src={item} alt={`${index}`}/>
                                        </Fade>
                                    </div>
                                    : null
                                }
                            </Fragment>
                        })}
                    </div>
                    <div className={'mood_img_wrapper'}>
                        {mood.map((item, index) => {
                            return <Fragment>
                                {width < 767 && index === 2
                                    ? <div onClick={() => this.popUp(item)}>
                                        <Fade bottom delay={120 * index}>
                                            <img src={item} alt={`${index}`}/>
                                        </Fade>
                                    </div>
                                    : (index === 3 || index === 4 || index === 5) && width > 767
                                        ? <div onClick={() => this.popUp(item)}>
                                            <Fade bottom delay={120 * index}>
                                                <img src={item} alt={`${index}`}/>
                                            </Fade>
                                        </div>
                                        : null
                                }
                            </Fragment>
                        })}
                    </div>
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
