import React from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-roughviz';

function Charts() {
    // const {selectedBreed} = props;
    const breeds = JSON.parse(localStorage.getItem('breeds'));
    console.log(breeds);
    const labels = [
        'adaptability',
        'affection_level',
        'child_friendly',
        'dog_friendly',
        'energy_level',
        'grooming',
        'health_issues',
        'intelligence',
        'shedding_level',
        'social_needs',
        'stranger_friendly',
        'vocalisation'];
    return (
        <div className='charts'>
            { breeds !== null ? breeds.map(el =>
                <div key={el.id}>
                    <div  className={'desktop'}>
                        <Bar
                            data={{
                                labels: labels.map(lab => lab.replace("_", " ")),
                                values: labels.map((label)=> el[label]),
                            }}
                            title={el.name}
                            width={800 / breeds.length}
                            height={800 / breeds.length}
                            axisFontSize={'1.3rem'}
                            margin={{top: 60, right: 50, bottom: 130, left: 100}}
                        />
                     </div>
                    <div className='mobile'>
                        <Bar
                        data={{
                            labels: labels.map(lab => lab.replace("_", " ")),
                            values: labels.map((label)=> el[label]),
                        }}
                        title={el.name}
                        width={300}
                        height={300}
                        axisFontSize={'1rem'}
                        margin={{top: 60, right: 50, bottom: 130, left: 100}}
                        />
                        </div>
                </div>) : <div className="noChartToDisplay">Please add any breed to display chart here</div>}
            {/*<div className={'desktop'}>*/}
            {/*    <Bar*/}
            {/*        data={{*/}
            {/*            labels: labels.map(lab => lab.replace("_", " ")),*/}
            {/*            values: labels.map((label)=> selectedBreed[label]),*/}
            {/*        }}*/}
            {/*        title={selectedBreed.name}*/}
            {/*        width={800}*/}
            {/*        height={800}*/}
            {/*        axisFontSize={'1.3rem'}*/}
            {/*        margin={{top: 60, right: 50, bottom: 130, left: 100}}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className={'mobile'}>*/}
            {/*    <Bar*/}
            {/*        data={{*/}
            {/*            labels: labels.map(lab => lab.replace("_", " ")),*/}
            {/*            values: labels.map((label)=> selectedBreed[label]),*/}
            {/*        }}*/}
            {/*        title={selectedBreed.name}*/}
            {/*        width={400}*/}
            {/*        height={400}*/}
            {/*        axisFontSize={'1rem'}*/}
            {/*        margin={{top: 60, right: 50, bottom: 130, left: 100}}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    )
}

export default Charts;

Charts.propTypes= {
    selectedBreed: PropTypes.object.isRequired
};