import React from 'react';
import { connect } from 'react-redux';
import { loadBeers } from '../actions';
import { Beer } from './Beer';



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.props.updateInSearch(false);
        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.props.loadBeers();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    }

    handleOnScroll() {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || window.innerHeight;
        var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if (scrolledToBottom) {
            this.props.loadBeers();
        }
    }

    renderBeer(beer) {
        return (
            <div key={beer.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <Beer
                    handleFavorite={this.props.handleFavorite}
                    checkFavoritos={this.props.checkFavoritos}
                    onClick={this.props.onClick}
                    beer={beer}
                />
            </div>);
    }

    render() {
        const { beers, isLoading, data, isFetching } = this.props;

        return (
            <div className="row">
                {data.map(beer => this.renderBeer(beer))}
                {isFetching && <div className="text-center mb-5 mt-5 col-12">
                    <i className="fas fa-spinner fa-spin"></i> Loading...
                </div>}
            </div>
        )
    }

}

const mapsStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        data: state.data
    }
}
const mapsDispatchToProps = (dispatch) => {
    return {
        loadBeers: () => dispatch(loadBeers())
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Home);