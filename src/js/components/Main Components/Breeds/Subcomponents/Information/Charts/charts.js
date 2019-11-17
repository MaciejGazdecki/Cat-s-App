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
            <Bar
                data={{
                    labels: labels.map(lab => lab.replace("_", " ")),
                    values: labels.map((label)=> selectedBreed[label])
                }}
                labels='flavor'
                values='price'
                title={selectedBreed.name}
            />
        </div>
    )
}

export default Charts;

Charts.propTypes= {
    selectedBreed: PropTypes.object.isRequired
};