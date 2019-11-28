import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {

    const {
        gallery,
        page,
        setPage,
        perPage,
        downloadData,
        setParamsPage,
        params
    } = props;

    const  onClickNextHandler = () => {
        if (gallery.slice(page*perPage - perPage, page*perPage).length < perPage || page === params.limit / perPage) {
            setPage(prevState => prevState);
        } else {
            setPage(prevState => prevState +1);
        }
    };

    const onClickPreviousHandler = () => {
        if(page> 1) setPage(prevState => prevState -1);
    };

    const onClickLoadMoreHandler = () => {
        setParamsPage(prevState => prevState+1);
        downloadData();
    };

    const btnLoadMore = <button onClick={onClickLoadMoreHandler}>Download more photos</button>;

    return (
        <div className="galleryButtons">
            {gallery.length > 0 ?
                <>
                    <button onClick={onClickPreviousHandler}>Previous page</button>
                    <button onClick={onClickNextHandler}>Next page</button>
                    {page === params.limit / perPage ? btnLoadMore : null}
                </> : null }
        </div>
    )
}
export default Pagination;

Pagination.propTypes = {
    gallery: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    perPage: PropTypes.func.isRequired,
    downloadData: PropTypes.func.isRequired,
    setParamsPage: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired
};
