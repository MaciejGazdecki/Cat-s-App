import React from 'react';
import cat from '../../../../../images/contactbg1.png'

function DomesticCatHistory() {
    return (
        <section className='catHistorySection'>
            <div className='wrapper catsHistory'>
                <div className='catLogo'>
                    <img src={cat} alt=""/>
                </div>
                <h2>History of <span>Cat</span></h2>
                <div className="articleWrapper">
                    <article>
                        The cat <span className="italic">(Felis catus) </span>
                        is a small carnivorous mammal It is the only domesticated species in the
                        family Felidae and often referred to as the domestic cat to distinguish it from wild members of
                        the family. The cat is either a house cat or a farm cat, which are pets, or a feral cat, which
                        ranges freely and avoids human contact. A house cat is valued by humans for companionship and
                        for its ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.
                        The cat is similar in anatomy to the other felid species, has a strong flexible body, quick
                        reflexes, sharp teeth and retractable claws adapted to killing small prey. Its night vision 
                        and sense of smell are well developed. Cat communication includes vocalizations 
                        like meowing, purring, trilling, hissing, growling and grunting as well as cat-specific
                        body language. It is a solitary hunter, but a social species. It can hear sounds
                        too faint or too high in 
                        frequency for human ears, such as those made by mice and other small mammals. It is a 
                        predator that is most active at dawn and dusk. It secretes and perceives pheromones.
                    </article>
                    <article>
                        Female domestic cats can have kittens from spring to late autumn, with litter sizes ranging
                        from two to five kittens. Domestic cats are bred and shown as registered pedigreed cats, a hobby
                        known as cat fancy. Failure to control breeding of pet cats by spaying and neutering, as well
                        as abandonment of pets, resulted in large numbers of feral cats worldwide, contributing to the
                        extinction of entire bird species, and evoking population control.
                        It was long thought that cat domestication was initiated in Egypt, because cats in ancient
                        Egypt were venerated since around 3100 BC. However, the earliest indication for the taming 
                        of an African wildcat <span className='italic'>(F. lybica) </span>was found in Cyprus,
                        where a cat skeleton was excavated close by a human Neolithic grave dating to around 7500 BC. 
                        African wildcats were probably
                        first domesticated in the Near East. As of 2017, the domestic cat was the second-most popular
                        pet in the United States by number of pets owned, after freshwater fish, with 95 million cats
                        owned. In the United Kingdom, around 7.3 million cats lived in more than 4.8 million
                        households as of 2019.
                        <p>Source:</p>
                        <p className='source'>
                            <a
                                target='_blank'
                                rel="noopener noreferrer"
                                href="https://en.wikipedia.org/wiki/Cat">
                                Wikipedia
                            </a>
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
    
}

export default DomesticCatHistory;
