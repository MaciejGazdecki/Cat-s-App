import React from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-roughviz';

function Charts(props) {
    const {selectedBreed} = props;
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
        <div className={'charts'}>
            <div className={'desktop'}>
                <Bar
                    data={{
                        labels: labels.map(lab => lab.replace("_", " ")),
                        values: labels.map((label)=> selectedBreed[label]),
                    }}
                    title={selectedBreed.name}
                    width={800}
                    height={800}
                    axisFontSize={'1.3rem'}
                    margin={{top: 60, right: 50, bottom: 130, left: 100}}
                />
            </div>
            <div className={'mobile'}>
                <Bar
                    data={{
                        labels: labels.map(lab => lab.replace("_", " ")),
                        values: labels.map((label)=> selectedBreed[label]),
                    }}
                    title={selectedBreed.name}
                    width={400}
                    height={400}
                    axisFontSize={'1rem'}
                    margin={{top: 60, right: 50, bottom: 130, left: 100}}
                />
            </div>
        </div>
    )
}

export default Charts;

Charts.propTypes= {
    selectedBreed: PropTypes.object.isRequired
};